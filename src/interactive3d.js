import * as THREE from 'three';

export function initInteractive3D() {
  const canvas = document.getElementById('interactiveCanvas');
  if (!canvas) return;

  const container = canvas.parentElement;
  let width = container.clientWidth;
  let height = container.clientHeight || 260;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(0, 0, 8);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Lights
  const light1 = new THREE.DirectionalLight(0xFBBF24, 2);
  light1.position.set(5, 5, 5);
  scene.add(light1);

  const light2 = new THREE.PointLight(0xD97706, 2, 20);
  light2.position.set(-5, -5, 2);
  scene.add(light2);

  

  // Animation Loop
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getElapsedTime();

    knotMesh.rotation.x = delta * 0.5;
    knotMesh.rotation.y = delta * 0.7;

    ringMesh.rotation.z = -delta * 0.4;
    ringMesh.rotation.y = delta * 0.2;

    renderer.render(scene, camera);
  }

  animate();

  // Resize Listener
  window.addEventListener('resize', () => {
    width = container.clientWidth;
    height = container.clientHeight || 260;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });
}
