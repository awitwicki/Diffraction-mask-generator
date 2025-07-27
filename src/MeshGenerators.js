import * as THREE from "three";
import { degToRad } from "three/src/math/MathUtils.js";
import  * as BufferGeometryUtils  from 'three/addons/utils/BufferGeometryUtils.js';

const MM_TO_M = 0.001;
const BASE_ANGLE_DEGREES = 60;
const CURVE_SEGMENTS = 64;

const calculateCircleIntersection = ({
  radius,       // radius of the circle
  angleDegrees, // angle in degrees
  x0 = 0,       // starting x coordinate
  y0 = 0,       // starting y coordinate
}) => {
  const toRadians = (deg) => (deg * Math.PI) / 180;
  const θ = toRadians(angleDegrees);

  const cosθ = Math.cos(θ);
  const sinθ = Math.sin(θ);

  // Quadratic equation coefficients: at^2 + bt + c = 0
  const a = cosθ * cosθ + sinθ * sinθ; // always = 1, but keeping it for clarity
  const b = 2 * (x0 * cosθ + y0 * sinθ);
  const c = x0 * x0 + y0 * y0 - radius * radius;

  const discriminant = b * b - 4 * a * c;
  // TODO fix bug
  if (discriminant < 0) return null; // no real intersection

  // Smallest positive t in the direction of the ray
  const sqrtDisc = Math.sqrt(discriminant);
  const t1 = (-b + sqrtDisc) / (2 * a);
  const t2 = (-b - sqrtDisc) / (2 * a);
  const t = Math.max(t1, t2); // pick the forward intersection

  const x = x0 + t * cosθ;
  const y = y0 + t * sinθ;

  return { x, y };
};

const calculateSlitsFitting = (baseDistance, slitWidth, slitSpacing) => {
  const numSlits = Math.floor((baseDistance + slitSpacing) / (slitWidth + slitSpacing));
  // n = (d + s) / (w + s)
  // n - amount of slits
  // d - base distance
  // s - slit spacing
  // w - slit width

  return { numSlits, widthUsedBySlits: numSlits * slitWidth + (numSlits - 1) * slitSpacing };
};

const generateVerticalSlits = ({
  startingPoint,  // x, y
  baseDistance,   // distance to populate slits
  innerRadius,    // radius of the inner circle
  slitWidth,      // width of the slit (hole)
  slitSpacing,    // width of a "bridge" between slits
  slitStepMultiplier, // { x, y } - how much to move the slit in x and y direction
  angleDegrees = 90,  // angle of the slit
}) => {
  console.log(`>> radius`, innerRadius);
  console.log(`>> innerDiameter`, 2 * innerRadius);
  console.log(`>> slitWidth`, slitWidth);
  console.log(`>> slitSpacing`, slitSpacing);

  const slits = [];

  const { numSlits: numVerticalSlits, widthUsedBySlits } = calculateSlitsFitting(
    baseDistance,
    slitWidth,
    slitSpacing
  );

  console.log(`>> numVerticalSlits`, numVerticalSlits);
  console.log(`>> widthUsedBySlits`, widthUsedBySlits);  

  const directionMultiplier = (angleDegrees % 360) < 0 ? -1 : 1;
  console.log(`>> directionMultiplier`, directionMultiplier);

  for (let i = 0; i < numVerticalSlits; i++) {
    const x1 = startingPoint.x + slitStepMultiplier.x * i * (slitWidth + slitSpacing);
    const y1 = startingPoint.y + slitStepMultiplier.y * i * (slitWidth + slitSpacing);

    const x2 = x1 + slitStepMultiplier.x * slitWidth;
    const y2 = y1 + slitStepMultiplier.y * slitWidth;

    const slit = new THREE.Path();

    const intersection1 = calculateCircleIntersection({
      radius: innerRadius,
      angleDegrees,
      x0: x1,
      y0: y1,
    });

    const intersection2 = calculateCircleIntersection({
      radius: innerRadius,
      angleDegrees,
      x0: x2,
      y0: y2,
    });

    slit.moveTo(x1, y1); // start from center of the circle
    slit.lineTo(intersection1.x, intersection1.y);
    slit.lineTo(intersection2.x, intersection2.y);
    slit.lineTo(x2, y2);

    slits.push(slit);
  }

  return slits;
};

const generate2dBahtinovMaskMesh = ({
  focalLength,
  apertureDiameter,
  telescopeInnerDiameter
}) => {
  const innerRadius = apertureDiameter / 2;
  const outerRadius = telescopeInnerDiameter / 2;

  const bahtinovFactor = 200.0; // 150 - 200
  let slitWidth = focalLength / bahtinovFactor;
  if (slitWidth < 1) {
    slitWidth *= 3;
  }

  const guidingWidth = Math.max(slitWidth, 1);
  const slitSpacing = slitWidth;

  const outerCircle = new THREE.Shape().absarc(
    0,
    0,
    outerRadius,
    0,
    Math.PI * 2,
    false
  );

  const bottomAngleDegrees = -90;
  const bottomAngleDirectionMultiplier = (bottomAngleDegrees % 360) < 0 ? -1 : 1;

  const { widthUsedBySlits } = calculateSlitsFitting(
    innerRadius * 2,
    slitWidth,
    slitSpacing
  );
  const xOffset = (innerRadius * 2 - widthUsedBySlits) / 2;
  const startingPoint = { 
    x: -innerRadius + xOffset,
    y: (bottomAngleDirectionMultiplier / 2) * guidingWidth, 
  };

  const bottomSlits = generateVerticalSlits({
    startingPoint,
    baseDistance: innerRadius * 2,
    innerRadius,
    slitWidth,
    slitSpacing,
    slitStepMultiplier: { x: 1, y: 0 },
    angleDegrees: -90,
  });

  const topAngleDegrees = BASE_ANGLE_DEGREES;

  const topSlitLowerWidth = slitWidth / Math.sin(degToRad(topAngleDegrees));
  const topSlitLowerSpacing = slitSpacing / Math.sin(degToRad(topAngleDegrees));

  const topSlitUpperWidth = slitWidth / Math.cos(degToRad(topAngleDegrees));
  const topSlitUpperSpacing = slitSpacing / Math.cos(degToRad(topAngleDegrees));

  console.log(`>> topSlitLowerWidth`, topSlitLowerWidth);
  console.log(`>> topSlitLowerSpacing`, topSlitLowerSpacing);
  console.log(`>> topSlitUpperWidth`, topSlitUpperWidth);
  console.log(`>> topSlitUpperSpacing`, topSlitUpperSpacing);

  const topLeftBottomSlits = generateVerticalSlits({
    startingPoint: { x: guidingWidth / 2 + 1 * topSlitLowerSpacing, y: guidingWidth / 2 },
    baseDistance: innerRadius - guidingWidth / 2 - 1 * topSlitLowerSpacing,
    innerRadius,
    slitWidth: topSlitLowerWidth,
    slitSpacing: topSlitLowerSpacing,
    slitStepMultiplier: { x: 1, y: 0 },
    angleDegrees: topAngleDegrees,
  });

  const topLeftUpperSlits = generateVerticalSlits({
    startingPoint: { x: guidingWidth / 2, y: guidingWidth / 2 },
    baseDistance: innerRadius - guidingWidth / 2,
    innerRadius,
    slitWidth: topSlitUpperWidth,
    slitSpacing: topSlitUpperSpacing,
    slitStepMultiplier: { x: 0, y: 1 },
    angleDegrees: topAngleDegrees,
  });

  const topRightBottomSlits = generateVerticalSlits({
    startingPoint: { x: -guidingWidth / 2 - 1 * topSlitLowerSpacing, y: guidingWidth / 2 },
    baseDistance: innerRadius - guidingWidth / 2 - 1 * topSlitLowerSpacing,
    innerRadius,
    slitWidth: topSlitLowerWidth,
    slitSpacing: topSlitLowerSpacing,
    slitStepMultiplier: { x: -1, y: 0 },
    angleDegrees: 180 - topAngleDegrees,
  });

  const topRightUpperSlits = generateVerticalSlits({
    startingPoint: { x: -guidingWidth / 2, y: guidingWidth / 2 },
    baseDistance: innerRadius - guidingWidth / 2,
    innerRadius,
    slitWidth: topSlitUpperWidth,
    slitSpacing: topSlitUpperSpacing,
    slitStepMultiplier: { x: 0, y: 1 },
    angleDegrees: 180 - topAngleDegrees,
  });

  const slits = [
    ...bottomSlits,
    ...topLeftUpperSlits,
    ...topLeftBottomSlits,
    ...topRightBottomSlits,
    ...topRightUpperSlits,
  ];

  slits.forEach((slit) => outerCircle.holes.push(slit));

  console.log(`>> verticalSlits`, slits);

  const extrudeSettings = {
    depth: 3,
    bevelEnabled: false,
    curveSegments: 64
  };

  const geometry = new THREE.ExtrudeGeometry(outerCircle, extrudeSettings);
  const material = new THREE.MeshPhongMaterial({
    color: 0x3498db,
    flatShading: true,
    side: THREE.DoubleSide,
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, 3 * MM_TO_M, 0);
  mesh.rotation.set(Math.PI / 2, 0, 0);
  mesh.scale.set(MM_TO_M, MM_TO_M, MM_TO_M);

  return mesh;
};


const generate3dBahtinovMaskMesh = ({
  focalLength,
  apertureDiameter,
  telescopeInnerDiameter,
  wallThickness,
  wallHeight
}) => {
  const innerRadius = apertureDiameter / 2;
  const outerRadius = wallThickness + telescopeInnerDiameter / 2;

  const bahtinovFactor = 200.0; // 150 - 200
  let slitWidth = focalLength / bahtinovFactor;
  if (slitWidth < 1) {
    slitWidth *= 3;
  }

  const guidingWidth = Math.max(slitWidth, 1);
  const slitSpacing = slitWidth;

  const outerCircle = new THREE.Shape().absarc(
    0,
    0,
    outerRadius,
    0,
    Math.PI * 2,
    false
  );

  const bottomAngleDegrees = -90;
  const bottomAngleDirectionMultiplier = (bottomAngleDegrees % 360) < 0 ? -1 : 1;

  const { widthUsedBySlits } = calculateSlitsFitting(
    innerRadius * 2,
    slitWidth,
    slitSpacing
  );
  const xOffset = (innerRadius * 2 - widthUsedBySlits) / 2;
  const startingPoint = { 
    x: -innerRadius + xOffset,
    y: (bottomAngleDirectionMultiplier / 2) * guidingWidth, 
  };

  const bottomSlits = generateVerticalSlits({
    startingPoint,
    baseDistance: innerRadius * 2,
    innerRadius,
    slitWidth,
    slitSpacing,
    slitStepMultiplier: { x: 1, y: 0 },
    angleDegrees: -90,
  });

  const topAngleDegrees = BASE_ANGLE_DEGREES;

  const topSlitLowerWidth = slitWidth / Math.sin(degToRad(topAngleDegrees));
  const topSlitLowerSpacing = slitSpacing / Math.sin(degToRad(topAngleDegrees));

  const topSlitUpperWidth = slitWidth / Math.cos(degToRad(topAngleDegrees));
  const topSlitUpperSpacing = slitSpacing / Math.cos(degToRad(topAngleDegrees));

  const topLeftBottomSlits = generateVerticalSlits({
    startingPoint: { x: guidingWidth / 2 + 1 * topSlitLowerSpacing, y: guidingWidth / 2 },
    baseDistance: innerRadius - guidingWidth / 2 - 1 * topSlitLowerSpacing,
    innerRadius,
    slitWidth: topSlitLowerWidth,
    slitSpacing: topSlitLowerSpacing,
    slitStepMultiplier: { x: 1, y: 0 },
    angleDegrees: topAngleDegrees,
  });

  const topLeftUpperSlits = generateVerticalSlits({
    startingPoint: { x: guidingWidth / 2, y: guidingWidth / 2 },
    baseDistance: innerRadius - guidingWidth / 2,
    innerRadius,
    slitWidth: topSlitUpperWidth,
    slitSpacing: topSlitUpperSpacing,
    slitStepMultiplier: { x: 0, y: 1 },
    angleDegrees: topAngleDegrees,
  });

  const topRightBottomSlits = generateVerticalSlits({
    startingPoint: { x: -guidingWidth / 2 - 1 * topSlitLowerSpacing, y: guidingWidth / 2 },
    baseDistance: innerRadius - guidingWidth / 2 - 1 * topSlitLowerSpacing,
    innerRadius,
    slitWidth: topSlitLowerWidth,
    slitSpacing: topSlitLowerSpacing,
    slitStepMultiplier: { x: -1, y: 0 },
    angleDegrees: 180 - topAngleDegrees,
  });

  const topRightUpperSlits = generateVerticalSlits({
    startingPoint: { x: -guidingWidth / 2, y: guidingWidth / 2 },
    baseDistance: innerRadius - guidingWidth / 2,
    innerRadius,
    slitWidth: topSlitUpperWidth,
    slitSpacing: topSlitUpperSpacing,
    slitStepMultiplier: { x: 0, y: 1 },
    angleDegrees: 180 - topAngleDegrees,
  });

  const slits = [
    ...bottomSlits,
    ...topLeftUpperSlits,
    ...topLeftBottomSlits,
    ...topRightBottomSlits,
    ...topRightUpperSlits,
  ];

  slits.forEach((slit) => outerCircle.holes.push(slit));

  const extrudeSettings = {
    depth: 3,
    bevelEnabled: false,
    curveSegments: CURVE_SEGMENTS
  };

    const wallExtrudeSettings = {
    depth: wallHeight,
    bevelEnabled: false,
    curveSegments: CURVE_SEGMENTS
  };

  // const geometry = new THREE.ExtrudeGeometry(outerCircle, extrudeSettings);
  const material = new THREE.MeshPhongMaterial({
    color: 0x3498db,
    flatShading: true,
    side: THREE.DoubleSide,
  });

  const baseGeometry = new THREE.ExtrudeGeometry(outerCircle, extrudeSettings);

  const wallCircle = new THREE.Shape().absarc(0,0,outerRadius,0,Math.PI * 2,false);
  const wallCircleHole = new THREE.Shape().absarc(0,0,outerRadius-wallThickness,0,Math.PI * 2,false);
  wallCircle.holes.push(wallCircleHole);

  const wallGeometry = new THREE.ExtrudeGeometry(wallCircle, wallExtrudeSettings);
  wallGeometry.rotateX(Math.PI);

  let geometry = BufferGeometryUtils.mergeGeometries([baseGeometry, wallGeometry],true)

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, 3 * MM_TO_M, 0);
  mesh.rotation.set(Math.PI / 2, 0, 0);
  mesh.scale.set(MM_TO_M, MM_TO_M, MM_TO_M);

  return mesh;
};

export { generate2dBahtinovMaskMesh, generate3dBahtinovMaskMesh };
