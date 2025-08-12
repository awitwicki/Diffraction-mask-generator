import { useEffect, useRef, useState } from 'react';
import './App.css';

import * as THREE from "three";
import { STLExporter } from "three/addons/exporters/STLExporter.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import Switch from "react-switch";
import {
  generate2dBahtinovMaskMesh,
  generate3dBahtinovMaskMesh,
} from "./MeshGenerators";

function App() {
  const [maskThickness, setMaskThickness] = useState(2);
  const [focalLength, setFocalLength] = useState(400);
  const [apertureDiameter, setApertureDiameter] = useState(51);
  const [telescopeInnerDiameter, setTelescopeInnerDiameter] = useState(80);
  const [wallThickness, setWallThickness] = useState(1);
  const [wallHeight, setWallHeight] = useState(10);

  const [isAdvancedModeChecked, setAdvancedModeChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setAdvancedModeChecked(nextChecked);
  };

  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const combinedMeshRef = useRef(null);
  const requestIdRef = useRef(null);

  const clampBetweenMinAndMax = (e) => {
    const value = Number(e.target.value);
    const min = Number(e.target.min);
    const max = Number(e.target.max);

    const safeValue = Math.min(Math.max(value, min), max);

    return safeValue;
  };

  useEffect(() => {
    // window.addEventListener('resize', onWindowResize);

    let scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    sceneRef.current = scene;
    var camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.01,
      10
    );
    camera.position.set(0, 0.125, -0.035);

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current &&containerRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 0.05;
    controls.maxDistance = 2.0;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    sceneRef.current.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.8);
    directionalLight1.position.set(0.5, 0.5, 0.5);
    sceneRef.current.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1.8);
    directionalLight2.position.set(-0.5, 0.5, 0.5);
    sceneRef.current.add(directionalLight2);

    const gridHelper = new THREE.GridHelper(0.2, 20);
    sceneRef.current.add(gridHelper);

    // Add annotation text
    const fontLoader = new FontLoader();
    fontLoader.load(
      "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
      (font) => {
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0x1a1a1a });
        const textGeometryX = new TextGeometry("20 x 20 cm", {
          font: font,
          size: 0.01,
          height: 0.001,
          depth: 0.000001,
        });

        const textMesh = new THREE.Mesh(textGeometryX, textMaterial);
        textMesh.rotation.set(Math.PI / 2, Math.PI, 0);
        textMesh.position.set(0.095, 0, -0.095);
        sceneRef.current.add(textMesh);
      }
    );

    var animate = function () {
      requestAnimationFrame(animate);
      // combinedMeshRef.current.rotation.x += 0.01;
      // combinedMeshRef.current.rotation.y += 0.01;
      controls.update();
      renderer.render(sceneRef.current, camera);
    };
    animate();

    return () => {
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  useEffect(() => {
    if (!sceneRef.current) return;

    if (combinedMeshRef.current) {
      sceneRef.current.remove(combinedMeshRef.current);
 
      if (combinedMeshRef.current.geometry) {
        combinedMeshRef.current.geometry.dispose();
      }

      if (combinedMeshRef.current.material) {
        combinedMeshRef.current.material.dispose();
      }
    }

    try {
      combinedMeshRef.current = isAdvancedModeChecked
        ? generate3dBahtinovMaskMesh({
            maskThickness,
            focalLength,
            apertureDiameter,
            telescopeInnerDiameter,
            wallThickness,
            wallHeight,
          })
        : generate2dBahtinovMaskMesh({
            maskThickness,
            focalLength,
            apertureDiameter,
            telescopeInnerDiameter,
          });

      sceneRef.current.add(combinedMeshRef.current);

      if (rendererRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    } catch (e) {
      console.log(focalLength, apertureDiameter, telescopeInnerDiameter);
      console.log(e);
    }
  }, [
    maskThickness,
    focalLength,
    apertureDiameter,
    telescopeInnerDiameter,
    isAdvancedModeChecked,
    wallThickness,
    wallHeight,
  ]);

  const exportSTL = () => {
    if (!combinedMeshRef.current) return;

    const exporter = new STLExporter();
    const stlString = exporter.parse(combinedMeshRef.current, {
      binary: false,
    });

    const blob = new Blob([stlString], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `циліндр_Ø${apertureDiameter}мм_f${focalLength}мм_бахтiнов.stl`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="App">
      <div ref={containerRef} className="three-container" />

      <div className="ui-panel">
        <h2>Генератор маски Бахтінова</h2>

        <div className="input-group">
          <label htmlFor="focalLength">Тип моделі ({isAdvancedModeChecked ? "насадка" : "пласка"}):</label>
          <Switch
            onChange={handleChange}
            checked={isAdvancedModeChecked}
            uncheckedIcon={false}
            checkedIcon={false}
            onColor="#2693e6"
          />
        </div>

        <div className="input-group">
          <label htmlFor="maskThickness">Товщина маски (мм):</label>
            <input
            type="number"
            id="maskThickness"
            value={maskThickness}
            min="2"
            max="5"
            step="0.1"
            onChange={(e) => setMaskThickness(clampBetweenMinAndMax(e))}
          />
        </div>

        <div className="input-group">
          <label htmlFor="focalLength">Фокусна відстань (мм):</label>
          <input
            type="number"
            id="focalLength"
            value={focalLength}
            min="100"
            max="3000"
            step="1"
            onChange={(e) => setFocalLength(clampBetweenMinAndMax(e))}
          />
        </div>

        <div className="input-group">
          <label htmlFor="apertureDiameter">Апертура (мм):</label>
          <input
            type="number"
            id="apertureDiameter"
            value={apertureDiameter}
            min="50"
            max={telescopeInnerDiameter - 1}
            step="1"
            onChange={(e) => setApertureDiameter(clampBetweenMinAndMax(e))}
          />
        </div>

        <div className="input-group">
          <label htmlFor="telescopeInnerDiameter">
            {isAdvancedModeChecked ? "Зовнішній діаметр" : "Внутрішній діаметр"} 
            труби (мм):
          </label>
          <input
            type="number"
            id="telescopeInnerDiameter"
            value={telescopeInnerDiameter}
            min={apertureDiameter + 1}
            max="400"
            step="0.1"
            onChange={(e) => setTelescopeInnerDiameter(clampBetweenMinAndMax(e))}
          />
        </div>

        {isAdvancedModeChecked && (
          <>
            <div className="input-group">
              <label htmlFor="wallHeight">Висота обідка (мм):</label>
              <input
                type="number"
                id="wallHeight"
                value={wallHeight}
                min="0"
                max="30"
                step="1"
                onChange={(e) => setWallHeight(Number(clampBetweenMinAndMax(e)))}
              />
            </div>

            <div className="input-group">
              <label htmlFor="telescopeOutDiameter">Товщина обідка (мм):</label>
              <input
                type="number"
                id="telescopeOutDiameter"
                value={wallThickness}
                min="1"
                max="5"
                step="1"
                onChange={(e) => setWallThickness(Number(clampBetweenMinAndMax(e)))}
              />
            </div>
          </>
        )}

        {/* <div className="input-group">
        <label htmlFor="segments">Сегменти:</label>
        <input 
          type="number" 
          id="segments" 
          value={segments} 
          min="8" 
          max="128" 
          step="1"
          onChange={(e) => setSegments(Number(e.target.value))}
        />
      </div> */}

        <div className="button-group">
          <button onClick={exportSTL}>Експорт в STL</button>
        </div>

        <div className="status">{status}</div>
      </div>
    </div>
  );
}

export default App;
