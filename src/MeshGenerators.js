import * as THREE from "three";

const MM_TO_M = 0.001;

const calculateCircleYFromX = (radius, x) => {
  return Math.sqrt(Math.pow(Math.abs(radius), 2) - Math.pow(Math.abs(x), 2));
};

const generateTriangle = (
  radius,
  slitsZoneStartAngle,
  slitsZoneWidthAngle,
) => {
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

  const slits = generateSlits(
    innerRadius,
     Math.PI / 16, // slitsPatternAngle
    (3 / 4) * Math.PI   , // Кут старту зони (150°)
    // (3 / 4) * Math.PI + Math.PI /8  , // Кут старту зони (150°)
    Math.PI / 2, // Кутова зона (90)
   // slitWidth // Товщина щілини
   1
  );

  slits.forEach((slit) => outerCircle.holes.push(slit));

  const extrudeSettings = {
    depth: 3,
    bevelEnabled: false,
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
