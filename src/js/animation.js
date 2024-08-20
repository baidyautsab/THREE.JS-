import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

// Add a scene
const scene = new THREE.Scene();

// Add object
const box = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'red' });

// Add camera
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5; // Position the camera so that it can see the box
scene.add(camera);

const mesh = new THREE.Mesh(box, material);
scene.add(mesh);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const tick = () => {
    renderer.render(scene, camera); // Render the scene
    // mesh.position.x += 0.002;
    // mesh.position.y -= 0.005;
    // mesh.position.z += 0.008;

    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.01;
    window.requestAnimationFrame(tick);
};

tick(); // Start the animation loop
