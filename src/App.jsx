import {useEffect, useRef, useState} from 'react';
import './App.css';

import * as THREE from "three";
import {STLExporter} from "three/addons/exporters/STLExporter.js";
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
import {FontLoader} from "three/addons/loaders/FontLoader.js";
import {TextGeometry} from "three/addons/geometries/TextGeometry.js";
import Switch from "react-switch";
import {
    generate2dBahtinovMaskMesh,
    generate3dBahtinovMaskMesh,
} from "./MeshGenerators";
import ClampNumberInput from './ClampNumberInput';
import {downloadSVG} from "./SvgExporter";
import {LanguageProvider, useI18n} from "./i18n";
import LanguageSelector from "./LanguageSelector";

function AppContent() {
    const {t} = useI18n();

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

    const [panelCollapsed, setPanelCollapsed] = useState(false);
    const togglePanel = () => setPanelCollapsed((v) => !v);

    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('theme');
        return saved ? saved === 'dark' : true;
    });
    const toggleTheme = () => setDarkMode((v) => !v);

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

    // Apply theme to DOM and update 3D scene
    useEffect(() => {
        const theme = darkMode ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        if (sceneRef.current) {
            const style = getComputedStyle(document.documentElement);
            const sceneBg = style.getPropertyValue('--scene-bg').trim();
            sceneRef.current.background = new THREE.Color(sceneBg);

            const gridColor = style.getPropertyValue('--grid-color').trim();
            const gridOpacity = parseFloat(style.getPropertyValue('--grid-opacity'));
            const textColor = style.getPropertyValue('--text-3d-color').trim();

            sceneRef.current.traverse((child) => {
                if (child.isGridHelper) {
                    child.material.color.set(gridColor);
                    child.material.opacity = gridOpacity;
                } else if (child.isMesh && child.geometry?.type === 'TextGeometry') {
                    child.material.color.set(textColor);
                }
            });
        }
    }, [darkMode]);

    useEffect(() => {
        // window.addEventListener('resize', onWindowResize);

        let scene = new THREE.Scene();
        scene.background = new THREE.Color(darkMode ? 0x0a0a1a : 0xe8ecf0);
        sceneRef.current = scene;
        var camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.01,
            10
        );
        camera.position.set(0, 0.125, -0.035);

        var renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        containerRef.current && containerRef.current.appendChild(renderer.domElement);

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

        const gridCol = darkMode ? 0x1a1a3a : 0xb0b8c0;
        const gridHelper = new THREE.GridHelper(0.2, 20, gridCol, gridCol);
        gridHelper.material.opacity = darkMode ? 0.4 : 0.5;
        gridHelper.material.transparent = true;
        sceneRef.current.add(gridHelper);

        // Add annotation text
        const fontLoader = new FontLoader();
        fontLoader.load(
            "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
            (font) => {
                const textMaterial = new THREE.MeshBasicMaterial({color: darkMode ? 0x4a4a6a : 0x8090a0});
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

    const exportSVG = () => {
        downloadSVG({
            focalLength,
            apertureDiameter,
            telescopeInnerDiameter,
            filename: `${t("filePrefix")}_Ø${apertureDiameter}mm_f${focalLength}mm.svg`,
        });
    };

    const exportSTL = () => {
        if (!combinedMeshRef.current) return;

        const exporter = new STLExporter();
        const stlString = exporter.parse(combinedMeshRef.current, {
            binary: false,
        });

        const blob = new Blob([stlString], {type: "text/plain"});
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${t("filePrefix")}_Ø${apertureDiameter}mm_f${focalLength}mm.stl`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="App">
            <div ref={containerRef} className="three-container"/>

            <div className={`ui-panel ${panelCollapsed ? "collapsed" : ""}`}>
                <div className="ui-panel-header">
                    <h2>{t("appTitle")}</h2>
                    <div className="header-buttons">
                        <button
                            className="theme-toggle"
                            type="button"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            title={darkMode ? "Light mode" : "Dark mode"}
                        >
                            {darkMode ? "\u2600" : "\u263E"}
                        </button>
                        <button
                            className="panel-toggle"
                            type="button"
                            onClick={togglePanel}
                            aria-label="Toggle panel"
                            aria-expanded={!panelCollapsed}
                            title={panelCollapsed ? "Expand" : "Minimize"}
                        >
                            v
                        </button>
                    </div>
                </div>

                <div className="ui-panel-content">
                    <LanguageSelector/>

                    <div className="input-group">
                        <label htmlFor="focalLength">
                            {t("modelType")} ({isAdvancedModeChecked ? t("attachment") : t("flat")}):
                        </label>
                        <Switch
                            height={25}
                            handleDiameter={23}
                            onChange={handleChange}
                            checked={isAdvancedModeChecked}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            onColor="#00b4d8"
                            offColor={darkMode ? "#3a3a5c" : "#b0b8c0"}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="maskThickness">{t("maskThickness")}</label>
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
                        <label htmlFor="focalLength">{t("focalLength")}</label>
                        <ClampNumberInput value={focalLength} min={25} max={3000} step={1} onUpdate={setFocalLength}/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="telescopeInnerDiameter">
                            {`${isAdvancedModeChecked ? t("outerDiameter") : t("innerDiameter")} ${t("tube")} (${t("mm")})`}:
                        </label>
                        <ClampNumberInput value={telescopeInnerDiameter} min={apertureDiameter + 1} max={400} step={0.1}
                                          onUpdate={setTelescopeInnerDiameter}/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="apertureDiameter">{t("aperture")}</label>
                        <ClampNumberInput value={apertureDiameter} min={50} max={telescopeInnerDiameter - 1} step={1}
                                          onUpdate={setApertureDiameter}/>
                    </div>

                    {isAdvancedModeChecked && (
                        <>
                            <div className="input-group">
                                <label htmlFor="wallHeight">{t("rimHeight")}</label>
                                <ClampNumberInput value={wallHeight} min={0} max={30} step={1}
                                                  onUpdate={setWallHeight}/>
                            </div>

                            <div className="input-group">
                                <label htmlFor="telescopeOutDiameter">{t("rimThickness")}</label>
                                <ClampNumberInput value={wallThickness} min={1} max={5} step={1}
                                                  onUpdate={setWallThickness}/>
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
                        <button onClick={exportSTL}>{t("exportSTL")}</button>
                        <button onClick={exportSVG}>{t("exportSVG")}</button>
                    </div>

                    <div className="status">{status}</div>
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <LanguageProvider>
            <AppContent/>
        </LanguageProvider>
    );
}

export default App;
