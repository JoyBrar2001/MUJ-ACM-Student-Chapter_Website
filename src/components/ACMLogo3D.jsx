import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';

const SimpleScene = () => {
  const containerRef = useRef(null);

  const calledOnce = useRef(false);

  useEffect(() => {
    if (calledOnce.current) {
      return;
    }

    const container = containerRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;
    controls.enableRotate = true;
    controls.enablePan = false;
    controls.update();

    const loader = new GLTFLoader();
    loader.load('../src/assets/3DModel/ACM-Logo.gltf', (gltf) => {
      const logo = gltf.scene;
      scene.add(logo);
      logo.scale.set(0.15, 0.15, 0.15);
      logo.rotation.x = Math.PI / 2 - 0.1;
      // logo.rotation.y = 0.1;
      
      const animate = () => {
        logo.rotation.z -= 0.002;
        
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      
      animate();
      
      return () => {
        container.removeChild(renderer.domElement);
      };
    });
    calledOnce.current = true;
  }, []);

  return <div ref={containerRef} className='w-full h-full' />;
};

function App() {
  return (
    <div className='App'>
      <SimpleScene />
    </div>
  );
}

export default App;
