import * as THREE from "three";

const MM_TO_M = 0.001;

const generate2dBahtinovMaskMesh = (
  newFocalLength,
  newApertureDiameter,
  newTelescopeInnerDiameter
) => {
  const innerRadius = newApertureDiameter / 2;
  const outerRadius = newTelescopeInnerDiameter / 2;

  // TODO add formula
  const slitWidth = 1.0;
  const slitSpacing = slitWidth * 2;

  const outerCircle = new THREE.Shape().absarc(
    0,
    0,
    outerRadius,
    0,
    Math.PI * 2,
    false
  );

  const numSlits = Math.floor((innerRadius * 2) / slitSpacing);
  console.log(numSlits);

  for (let i = -Math.floor(numSlits / 2); i <= Math.floor(numSlits / 2); i++) {
    const distance = i * slitSpacing;

    const startX = 0;
    const startY = distance;

    const endX = Math.sqrt(Math.pow(innerRadius, 2) - Math.pow(distance, 2));
    const endY = distance;

    const dirX = endX - startX;
    const dirY = endY - startY;
    const length = Math.sqrt(dirX * dirX + dirY * dirY);

    const perpX = (-dirY / length) * (slitWidth / 2);
    const perpY = (dirX / length) * (slitWidth / 2);

    const slit = new THREE.Path();
    slit.moveTo(startX + perpX, startY + perpY);
    slit.lineTo(startX - perpX, startY - perpY);
    slit.lineTo(endX - perpX, endY - perpY);
    slit.lineTo(endX + perpX, endY + perpY);
    slit.lineTo(startX + perpX, startY + perpY);

    outerCircle.holes.push(slit);
  }

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
