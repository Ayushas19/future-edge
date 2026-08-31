import * as THREE from 'three';

let treeGroup, trunkMesh, branchGroup, leafParticles, nodeMeshes = [];
let scene, camera, renderer;
let targetProgress = 0;
let currentProgress = 0;

export function initHero3D() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const container = canvas.parentElement;
  let width = container.clientWidth;
  let height = container.clientHeight || window.innerHeight;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(0, 2, 22);

  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Lighting System (Warm Gold & Cream Theme)
  const ambientLight = new THREE.AmbientLight(0xFFFDF9, 1.4);
  scene.add(ambientLight);

  const sunLight = new THREE.DirectionalLight(0xFBBF24, 3);
  sunLight.position.set(12, 18, 10);
  scene.add(sunLight);

  const fillLight = new THREE.PointLight(0xD97706, 4, 60);
  fillLight.position.set(-10, -5, 5);
  scene.add(fillLight);

  // Main 3D Digital Growth Tree Group
  treeGroup = new THREE.Group();
  scene.add(treeGroup);

  // 1. Trunk (Procedural Metallic Cylinder)
  const trunkGeo = new THREE.CylinderGeometry(0.35, 1.1, 8.5, 16);
  const trunkMat = new THREE.MeshStandardMaterial({
    color: 0xD97706,
    metalness: 0.75,
    roughness: 0.25,
    wireframe: false
  });
  trunkMesh = new THREE.Mesh(trunkGeo, trunkMat);
  trunkMesh.position.y = 0;
  treeGroup.add(trunkMesh);

  // 2. Branches & Widget Node Tip Group
  branchGroup = new THREE.Group();
  treeGroup.add(branchGroup);

  const branchAngles = [0, (Math.PI * 2) / 5, ((Math.PI * 2) / 5) * 2, ((Math.PI * 2) / 5) * 3, ((Math.PI * 2) / 5) * 4];
  const nodeGeometries = [
    new THREE.IcosahedronGeometry(0.85, 1),
    new THREE.BoxGeometry(1.2, 1.2, 1.2),
    new THREE.OctahedronGeometry(0.9),
    new THREE.TorusKnotGeometry(0.65, 0.22, 64, 8),
    new THREE.DodecahedronGeometry(0.85)
  ];

  branchAngles.forEach((angle, idx) => {
    const branchHolder = new THREE.Group();
    branchHolder.rotation.y = angle;

    // Curved Branch Mesh
    const bGeo = new THREE.CylinderGeometry(0.14, 0.32, 5.2, 12);
    bGeo.translate(0, 2.6, 0);
    const bMat = new THREE.MeshStandardMaterial({
      color: 0xB45309,
      metalness: 0.8,
      roughness: 0.2
    });
    const bMesh = new THREE.Mesh(bGeo, bMat);
    bMesh.rotation.z = -Math.PI / 4;
    branchHolder.add(bMesh);

    // Tip 3D Widget Node
    const nGeo = nodeGeometries[idx];
    const nMat = new THREE.MeshStandardMaterial({
      color: 0xFBBF24,
      metalness: 0.85,
      roughness: 0.15,
      emissive: 0xD97706,
      emissiveIntensity: 0.25
    });
    const nMesh = new THREE.Mesh(nGeo, nMat);
    nMesh.position.set(3.6, 4.3, 0);
    branchHolder.add(nMesh);

    nodeMeshes.push(nMesh);
    branchGroup.add(branchHolder);
  });

  // 3. Tech Web / Constellation (Replacing Leaf Particles)
  const particleCount = 200;
  const webGeo = new THREE.BufferGeometry();
  const webPos = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    const r = 2.5 + Math.random() * 7.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = (Math.random() - 0.2) * Math.PI;

    webPos[i] = r * Math.cos(theta) * Math.cos(phi);
    webPos[i + 1] = 2.2 + r * Math.sin(phi);
    webPos[i + 2] = r * Math.sin(theta) * Math.cos(phi);
  }

  webGeo.setAttribute('position', new THREE.BufferAttribute(webPos, 3));
  const webMat = new THREE.PointsMaterial({
    color: 0xFBBF24,
    size: 0.18,
    transparent: true,
    opacity: 0.9
  });
  leafParticles = new THREE.Points(webGeo, webMat);

  // Add Lines for Tech Web Connectivity
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0xF59E0B,
    transparent: true,
    opacity: 0.3
  });

  const lineIndices = [];
  // Connect particles that are close to each other
  for (let i = 0; i < particleCount; i++) {
    for (let j = i + 1; j < particleCount; j++) {
      const dx = webPos[i * 3] - webPos[j * 3];
      const dy = webPos[i * 3 + 1] - webPos[j * 3 + 1];
      const dz = webPos[i * 3 + 2] - webPos[j * 3 + 2];
      const distSq = dx*dx + dy*dy + dz*dz;
      if (distSq < 6.5) { // threshold for connecting nodes
        lineIndices.push(i, j);
      }
    }
  }
  webGeo.setIndex(lineIndices);
  const webLines = new THREE.LineSegments(webGeo, lineMaterial);
  leafParticles.add(webLines);

  treeGroup.add(leafParticles);

  // Initial Tree Scale & Position
  function updateTreeLayout() {
    if (window.innerWidth <= 768) {
      treeGroup.position.set(0, 1.8, 0); // Position 3D tree in top half on mobile
    } else if (window.innerWidth <= 992) {
      treeGroup.position.set(0, -1.8, 0);
    } else {
      treeGroup.position.set(3.2, -2, 0);
    }
  }
  updateTreeLayout();
  treeGroup.scale.set(0.55, 0.55, 0.55);

  // Mouse & Touch Parallax Interaction
  let mouseX = 0;
  let mouseY = 0;
  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      mouseX = (e.touches[0].clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.touches[0].clientY / window.innerHeight - 0.5) * 2;
    }
  }, { passive: true });

  // Animation Loop
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getElapsedTime();

    // Smooth scroll progress interpolation
    currentProgress += (targetProgress - currentProgress) * 0.08;

    // Scale & grow 3D Tree based on currentProgress (0.0 to 1.0)
    const baseScale = window.innerWidth <= 768 ? 0.38 : 0.55;
    const growthAmount = window.innerWidth <= 768 ? 0.35 : 0.7;
    const growthScale = baseScale + currentProgress * growthAmount;
    treeGroup.scale.set(growthScale, growthScale, growthScale);

    // Continuous 3D rotation + scroll-driven rotation
    treeGroup.rotation.y = delta * 0.15 + currentProgress * Math.PI * 1.6;
    treeGroup.rotation.x = Math.sin(delta * 0.5) * 0.05 + Math.sin(currentProgress * Math.PI) * 0.15;

    // Node individual rotation & glow pulsating
    nodeMeshes.forEach((mesh, index) => {
      mesh.rotation.x = delta * (0.4 + index * 0.1);
      mesh.rotation.y = delta * (0.5 - index * 0.05);
      mesh.material.emissiveIntensity = 0.25 + Math.sin(delta * 2.5 + index) * 0.3;
    });

    // Leaves oscillation
    leafParticles.rotation.y = -delta * 0.08;

    // Camera dynamic position tracking scroll
    camera.position.z = window.innerWidth <= 768 ? 18 - currentProgress * 3 : 22 - currentProgress * 5;
    camera.position.y = 2 + Math.sin(currentProgress * Math.PI) * 1.5 + mouseY * 0.5;
    camera.position.x = mouseX * 0.8;
    
    const lookY = window.innerWidth <= 768 ? 1.8 : 1;
    camera.lookAt(0, lookY, 0);

    renderer.render(scene, camera);
  }

  animate();

  // Resize Handling
  window.addEventListener('resize', () => {
    width = container.clientWidth;
    height = container.clientHeight || window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    updateTreeLayout();
  });
}

export function updateHeroScrollProgress(progress) {
  targetProgress = Math.min(Math.max(progress, 0), 1);
}
