import React, { useEffect, useRef, useState } from 'react';
import './App.css';

import * as THREE from 'three';
import { STLExporter } from 'three/addons/exporters/STLExporter.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSG } from 'three-csg-ts';

function App() {
  const [radius, setRadius] = useState(150);
  const [height, setHeight] = useState(30);
  const [segments, setSegments] = useState(48);
  const [thickness, setThickness] = useState(2);
  const [status, setStatus] = useState('');
  const [mainMesh, setMainMesh] = useState(null);

  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const combinedMeshRef = useRef(null);
  const requestIdRef = useRef(null);       
  const rlightef = useRef(null);       

  const MM_TO_M = 0.001;


  const generateBahtinovMaskMesh = () => {
    var geometry = new THREE.BoxGeometry(height * MM_TO_M, 0.02, 0.02);
    console.log("new height", height);
    // var geometry = new THREE.CylinderGeometry(10, 10, 10,10 ,20);
    var material = new THREE.MeshBasicMaterial({ color: 0x3498db });
    var cube = new THREE.Mesh(geometry, material);

    const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.012, 18, 18));

    // Make sure the .matrix of each mesh is current
    cube.updateMatrix();
    sphere.updateMatrix();

    // Perform CSG operations
    // The result is a THREE.Mesh that you can add to your scene...
    const subRes = CSG.subtract(cube, sphere);

    return subRes;
  };

  useEffect(() => {
    // initThreeJS();
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    sceneRef.current = scene;
    var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 10);
    camera.position.set(0, 0.1, 0.1);

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current && containerRef.current.appendChild( renderer.domElement );

    // Контроль миші
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 0.05;
    controls.maxDistance = 2.0;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight1.position.set(0.5, 0.5, 0.5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight2.position.set(-0.5, -0.5, -0.5);
    scene.add(directionalLight2);

    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    scene.add( directionalLight )
    rlightef.current = directionalLight;

    // Сітка для орієнтації
    const gridHelper = new THREE.GridHelper(0.2, 20);
    scene.add(gridHelper);


    // use ref as a mount point of the Three.js scene instead of the document.body

    const subRes = generateBahtinovMaskMesh();
    combinedMeshRef.current = subRes;

    scene.add(subRes);
    // setMainMesh(subRes);

    var animate = function () {
      requestAnimationFrame(animate);
      subRes.rotation.x += 0.01;
      subRes.rotation.y += 0.01;
      renderer.render(scene, camera);
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

  // useEffect(() => {
  //   if (sceneRef.current) {
  //     console.log("set new params", height);

  //     const mainMesh = generateBahtinovMaskMesh();


  //   // Видалення старого меша
  //   if (combinedMeshRef.current) {
  //     sceneRef.current.remove(combinedMeshRef.current);
  //     if (combinedMeshRef.current.geometry) {
  //       combinedMeshRef.current.geometry.dispose();
  //     }
  //     if (combinedMeshRef.current.material) {
  //       combinedMeshRef.current.material.dispose();
  //     }
  //   }
  // console.log("sceneRef.current.add(mainMesh);");

  //   sceneRef.current.add(mainMesh);
  //   setMainMesh(mainMesh);

  //   }
  // }, [radius, height, segments, thickness]);



  // const initThreeJS = () => {
  //   // Ініціалізація сцени
  //   const scene = new THREE.Scene();
  //   scene.background = new THREE.Color(0xf0f0f0);
  //   sceneRef.current = scene;

  //   // Камера
  //   const camera = new window.THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 10);
  //   camera.position.set(0, 0.3, 0.5);
  //   cameraRef.current = camera;

  //   // Рендерер
  //   const renderer = new window.THREE.WebGLRenderer({ antialias: true });
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   renderer.setPixelRatio(window.devicePixelRatio);
  //   containerRef.current.appendChild(renderer.domElement);
  //   rendererRef.current = renderer;

  //   // Контроль миші
  //   const controls = new window.THREE.OrbitControls(camera, renderer.domElement);
  //   controls.enableDamping = true;
  //   controls.dampingFactor = 0.05;
  //   controls.minDistance = 0.05;
  //   controls.maxDistance = 2.0;
  //   controlsRef.current = controls;

  //   // Освітлення
  //   const ambientLight = new window.THREE.AmbientLight(0xffffff, 0.6);
  //   scene.add(ambientLight);

  //   const directionalLight1 = new window.THREE.DirectionalLight(0xffffff, 0.8);
  //   directionalLight1.position.set(0.5, 0.5, 0.5);
  //   scene.add(directionalLight1);

  //   const directionalLight2 = new window.THREE.DirectionalLight(0xffffff, 0.5);
  //   directionalLight2.position.set(-0.5, -0.5, -0.5);
  //   scene.add(directionalLight2);

  //   // Сітка для орієнтації
  //   const gridHelper = new window.THREE.GridHelper(1, 10);
  //   scene.add(gridHelper);

  //   // Обробка зміни розміру вікна
  //   window.addEventListener('resize', onWindowResize);

  //   // Анімаційний цикл
  //   const animate = () => {
  //     controls.update();
  //     renderer.render(scene, camera);
  //     requestIdRef.current = requestAnimationFrame(animate);
  //   };
  //   requestIdRef.current = requestAnimationFrame(animate);

  //   // Генерація початкової моделі
  //   generateBahtinovMaskMesh();
  // };

  // const generateBahtinovMaskMesh = () => {
  //   const scene = sceneRef.current;
  //   if (!scene) return;

  //   // Видалення старого меша
  //   if (combinedMeshRef.current) {
  //     scene.remove(combinedMeshRef.current);
  //     if (combinedMeshRef.current.geometry) {
  //       combinedMeshRef.current.geometry.dispose();
  //     }
  //     if (combinedMeshRef.current.material) {
  //       combinedMeshRef.current.material.dispose();
  //     }
  //   }

  //   // Конвертація в метри
  //   const radiusVal = radius * MM_TO_M;
  //   const heightVal = height * MM_TO_M;
  //   const thicknessVal = thickness * MM_TO_M;

  //   // Створення основного циліндра
  //   const mainGeometry = new window.THREE.CylinderGeometry(
  //     radiusVal,
  //     radiusVal,
  //     heightVal,
  //     segments
  //   );
  //   const mainMaterial = new window.THREE.MeshPhongMaterial({ color: 0x3498db });
  //   const mainMesh = new window.THREE.Mesh(mainGeometry, mainMaterial);
    
  //   // Створення циліндра для віднімання
  //   const subtractGeometry = new window.THREE.CylinderGeometry(
  //     radiusVal - thicknessVal,
  //     radiusVal - thicknessVal,
  //     heightVal * 1.1,
  //     segments
  //   );
  //   const subtractMesh = new window.THREE.Mesh(subtractGeometry);
  //   subtractMesh.position.y = -heightVal * 0.05;

  //   // Виконання віднімання
  //   try {
  //     // Перетворюємо меші у формат ThreeBSP
  //     const mainBSP = new window.ThreeBSP(mainMesh);
  //     const subtractBSP = new window.ThreeBSP(subtractMesh);
      
  //     // Виконуємо булеву операцію віднімання
  //     const resultBSP = mainBSP.subtract(subtractBSP);
      
  //     // Перетворюємо результат назад у Three.js mesh
  //     const result = resultBSP.toMesh(mainMaterial);
      
  //     // Копіюємо властивості трансформації
  //     result.position.copy(mainMesh.position);
  //     result.rotation.copy(mainMesh.rotation);
  //     result.scale.copy(mainMesh.scale);
      
  //     // Оновлюємо нормалі для коректного освітлення
  //     result.geometry.computeVertexNormals();
      
  //     combinedMeshRef.current = result;
  //     scene.add(result);
  //   } catch (e) {
  //     console.error("Помилка булевої операції:", e);
  //     // Резервний варіант - показати основний циліндр
  //     combinedMeshRef.current = mainMesh;
  //     scene.add(mainMesh);
  //   }

  //   setStatus(`Модель згенерована: Ø${radius}мм × ${height}мм`);
  // };

  const exportSTL = () => {
    // if (!combinedMeshRef.current) return;

    // Експорт
    const exporter = new STLExporter();
    const stlString = exporter.parse(mainMesh, { binary: false });

    // Створення Blob та посилання для завантаження
    const blob = new Blob([stlString], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `циліндр_Ø${radius}мм_${height}мм_бахтiмов.stl`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setStatus(`STL файл згенеровано!`);
  };

  const onWindowResize = () => {
    if (cameraRef.current && rendererRef.current) {
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    }
  };

  return (
    <div className="App">
      <div ref={containerRef} className="three-container" />
      
      <div className="ui-panel">
        <h2>Генератор маски Бахтінова</h2>
        
        <div className="input-group">
          <label htmlFor="radius">Радіус (мм):</label>
          <input 
            type="number" 
            id="radius" 
            value={radius} 
            min="10" 
            max="1000" 
            step="1"
            onChange={(e) => setRadius(Number(e.target.value))}
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="height">Висота (мм):</label>
          <input 
            type="number" 
            id="height" 
            value={height} 
            min="10" 
            max="75" 
            step="1"
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </div>
        
        <div className="input-group">
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
        </div>
        
        <div className="input-group">
          <label htmlFor="thickness">Товщина маски (мм):</label>
          <input 
            type="number" 
            id="thickness" 
            value={thickness} 
            min="1" 
            max="10" 
            step="0.1"
            onChange={(e) => setThickness(Number(e.target.value))}
          />
        </div>
        
        <div className="button-group">
          <button onClick={exportSTL}>Експорт в STL</button>
        </div>
        
        <div className="status">{status}</div>
      </div>
    </div>
  );
}

export default App;