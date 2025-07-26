import * as THREE from "three";
import { degToRad } from "three/src/math/MathUtils.js";

const MM_TO_M = 0.001;

const calculateCircleYFromX = (radius, x) => {
  return Math.sqrt(Math.pow(Math.abs(radius), 2) - Math.pow(Math.abs(x), 2));
};

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


const generateTriangle = (radius, slitsZoneStartAngle, slitsZoneWidthAngle) => {
  const paths = [];
  
  let xStart = -radius * Math.cos(Math.PI - slitsZoneStartAngle);
  let xEnd = radius * Math.cos(slitsZoneStartAngle - slitsZoneWidthAngle);
  let yStart = calculateCircleYFromX(radius, xStart);
  let yEnd = calculateCircleYFromX(radius, xEnd);

  // Cut triangle from circle center and xstartand xend points
  {
    const triangle = new THREE.Path();
    triangle.moveTo(0, 0);
    triangle.lineTo(xStart, yStart);

    // put 10 samples on the circle arc
    const numSamples = 10;
    for (let i = 0; i <= numSamples; i++) {
      const distance = xEnd - xStart;
      const step = distance / numSamples;
      const x = xStart + i * step;
      const y = calculateCircleYFromX(radius, x);

      triangle.lineTo(x, y);
    }

    triangle.lineTo(xEnd, yEnd);
    triangle.lineTo(0, 0);

    paths.push(triangle);
  }

  return paths;
};

const generateSlits = (
  radius,
  slitsPatternAngle,
  slitsZoneStartAngle,
  slitsZoneWidthAngle,
  slitWidth
) => {
  const paths = [];
  const slitSpacing = slitWidth * 2;

  let xStart = -radius * Math.cos(Math.PI - slitsZoneStartAngle);
  let xEnd = radius * Math.cos(slitsZoneStartAngle - slitsZoneWidthAngle);
  let yStart = calculateCircleYFromX(radius, xStart);
  let yEnd = calculateCircleYFromX(radius, xEnd);
  const numSlits = Math.floor((xEnd - xStart) / slitSpacing);

  console.log("slitsZoneWidthAngle degrees", THREE.MathUtils.radToDeg(slitsZoneWidthAngle).toFixed(2));
  console.log("slitsZoneStartAngle", THREE.MathUtils.radToDeg(slitsZoneStartAngle).toFixed(2));
  console.log("slitsZoneend degrees", THREE.MathUtils.radToDeg(slitsZoneStartAngle - slitsZoneWidthAngle).toFixed(2));
  console.log("slitsZoneAngle cos", Math.cos(slitsZoneStartAngle).toFixed(2));
  console.log("xStart", xStart.toFixed(2), "xEnd", xEnd.toFixed());
  console.log("yStart", yStart.toFixed(2), "yEnd", yEnd.toFixed(2));
  console.log("numSlits",numSlits);
  console.log("slitSpacing", slitSpacing);
  console.log("width", (xEnd - xStart));


  // todo center slits around xMiddlePoint

  for (let i = 0; i <= Math.floor(numSlits / 2); i++) {
    // console.log("i", i, "numSlits", numSlits);

    const slitStartX = (slitSpacing/4) + (i * slitSpacing);

    if (xEnd - slitStartX <= slitSpacing) {
      continue;
    }

    const slitEndX = slitStartX + slitWidth;

    const slitStartYInner = slitStartX < 0 ? -slitStartX * Math.tan((2 * Math.PI) - slitsZoneStartAngle) : -slitStartX * Math.tan((2 * Math.PI) - slitsZoneStartAngle - slitsZoneWidthAngle);
    const slitEndYInner = slitEndX < 0 ? -slitEndX * Math.tan((2 * Math.PI) - slitsZoneStartAngle) : -slitEndX * Math.tan((2 * Math.PI) - slitsZoneStartAngle - slitsZoneWidthAngle);

    const slitStartYOuter = calculateCircleYFromX(radius, slitStartX);
    const slitEndYOuter = calculateCircleYFromX(radius, slitEndX);

    // console.log(slitStartYInner.toFixed(2), slitStartYOuter.toFixed(2), slitEndYInner.toFixed(2), slitEndYOuter.toFixed(2));

    const slit = new THREE.Path();
    slit.moveTo(slitStartX, slitStartYInner);
    slit.lineTo(slitStartX, slitStartYOuter);
    slit.lineTo(slitEndX, slitEndYOuter);
    slit.lineTo(slitEndX, slitEndYInner);

    const slitMirrored = new THREE.Path();
    slitMirrored.moveTo(-slitStartX, slitStartYInner);
    slitMirrored.lineTo(-slitStartX, slitStartYOuter);
    slitMirrored.lineTo(-slitEndX, slitEndYOuter);
    slitMirrored.lineTo(-slitEndX, slitEndYInner);

    paths.push(slit);
    paths.push(slitMirrored); 
  }

  return paths;
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

const generate2dBahtinovMaskMesh = (
  newFocalLength,
  newApertureDiameter,
  newTelescopeInnerDiameter
) => {
  const innerRadius = newApertureDiameter / 2;
  const outerRadius = newTelescopeInnerDiameter / 2;

  const bahtinovFactor = 200.0; // 150 - 200
  let slitWidth = newFocalLength / bahtinovFactor;
  if (slitWidth < 1) {
    slitWidth *= 3;
  }

  const outerCircle = new THREE.Shape().absarc(
    0,
    0,
    outerRadius,
    0,
    Math.PI * 2,
    false
  );

  const slitSpacing = 1;
  const guidingWidth = 3;
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

  const topAngleDegrees = 45;

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

  // const slits = generateSlits(
  //   innerRadius,
  //    Math.PI / 16, // slitsPatternAngle
  //   (3 / 4) * Math.PI   , // Кут старту зони (150°)
  //   // (3 / 4) * Math.PI + Math.PI /8  , // Кут старту зони (150°)
  //   Math.PI / 2, // Кутова зона (90)
  //   // slitWidth // Товщина щілини
  //   2
  // );

  // slits.forEach((slit) => outerCircle.holes.push(slit));

  const extrudeSettings = {
    depth: 3,
    bevelEnabled: false,
    curveSegments: 64,
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

export default generate2dBahtinovMaskMesh;
