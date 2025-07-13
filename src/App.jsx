import React, { useEffect, useRef, useState } from 'react';
import './App.css';

import * as THREE from 'three';
import { STLExporter } from 'three/addons/exporters/STLExporter.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import generate2dBahtinovMaskMesh from './MeshGenerators'

function App() {

  const [focalLength, setFocalLength] = useState(416);
  const [apertureDiameter, setApertureDiameter] = useState(65);
  const [telescopeInnerDiameter, setTelescopeInnerDiameter] = useState(80);
  const [telescopeOutDiameter, setTelescopeOutDiameter] = useState(160);
  const [wallThickness, setWallThickness] = useState(3);

  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const combinedMeshRef = useRef(null);
  const requestIdRef = useRef(null);

  useEffect(() => {
    // window.addEventListener('resize', onWindowResize);

    let scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    sceneRef.current = scene;
    var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 10);
    camera.position.set(0, 0.25, -0.25);

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current && containerRef.current.appendChild( renderer.domElement );

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
    
    combinedMeshRef.current = generate2dBahtinovMaskMesh(focalLength, apertureDiameter, telescopeInnerDiameter, telescopeOutDiameter, wallThickness);
    
    sceneRef.current.add(combinedMeshRef.current);

    if (rendererRef.current) {
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
    
  }, [focalLength, apertureDiameter, telescopeInnerDiameter, telescopeOutDiameter, wallThickness]);

  const exportSTL = () => {
    if (!combinedMeshRef.current) return;

    const exporter = new STLExporter();
    const stlString = exporter.parse(combinedMeshRef.current, { binary: false });

    const blob = new Blob([stlString], { type: 'text/plain' });
    const link = document.createElement('a');
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
        <label htmlFor="focalLength">Фокусна відстань (мм):</label>
        <input 
          type="number" 
          id="focalLength" 
          value={focalLength} 
          min="100" 
          max="3000" 
          step="1"
          onChange={(e) => setFocalLength(Number(e.target.value))}
        />
      </div>
      
      <div className="input-group">
        <label htmlFor="apertureDiameter">Апертура (мм):</label>
        <input 
          type="number" 
          id="apertureDiameter" 
          value={apertureDiameter} 
          min="50" 
          max="500" 
          step="1"
          onChange={(e) => setApertureDiameter(Number(e.target.value))}
        />
      </div>
      
      <div className="input-group">
        <label htmlFor="telescopeInnerDiameter">Внутрішній діаметр труби (мм):</label>
        <input 
          type="number" 
          id="telescopeInnerDiameter" 
          value={telescopeInnerDiameter} 
          min="40" 
          max="400" 
          step="1"
          onChange={(e) => setTelescopeInnerDiameter(Number(e.target.value))}
        />
      </div>
      
            {/* for v2 */}
      {/* <div className="input-group">
        <label htmlFor="telescopeOutDiameter">Зовнішній діаметр труби (мм):</label>
        <input 
          type="number" 
          id="telescopeOutDiameter" 
          value={telescopeOutDiameter} 
          min="45" 
          max="410" 
          step="1"
          onChange={(e) => setTelescopeOutDiameter(Number(e.target.value))}
        />
      </div> */}

      {/* <div className="input-group">
        <label htmlFor="wallThickness">Товщина стінки кришки (мм):</label>
        <input 
          type="number" 
          id="wallThickness" 
          value={wallThickness} 
          min="1" 
          max="10" 
          step="0.1"
          onChange={(e) => setWallThickness(Number(e.target.value))}
        />
      </div> */}
      
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