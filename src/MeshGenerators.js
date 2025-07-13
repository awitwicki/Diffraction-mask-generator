import * as THREE from "three";
import { CSG } from "three-csg-ts";

const MM_TO_M = 0.001;

const generate2dBahtinovMaskMesh = (
  newFocalLength,
  newApertureDiameter,
  newTelescopeInnerDiameter
) => {
  var geometry = new THREE.CylinderGeometry(
    newTelescopeInnerDiameter * MM_TO_M,
    newTelescopeInnerDiameter * MM_TO_M,
    3 * MM_TO_M,
    100,
    20
  );

  const material = new THREE.MeshPhongMaterial({
    color: 0x3498db,
    flatShading: true,
    side: THREE.DoubleSide,
  });

  let cube = new THREE.Mesh(geometry, material);

  const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.012, 18, 18));

  // Make sure the .matrix of each mesh is current
  cube.updateMatrix();
  sphere.updateMatrix();

  // Perform CSG operations
  // The result is a THREE.Mesh that you can add to your scene...
  const subRes = CSG.subtract(cube, sphere);

  return subRes;
};

export default generate2dBahtinovMaskMesh;
