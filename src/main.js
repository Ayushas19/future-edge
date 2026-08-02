import { initHero3D } from './hero3d.js';
import { initInteractive3D } from './interactive3d.js';
import { initUI } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize 3D Hero Stage
  initHero3D();

  // Initialize Interactive 3D Canvas
  initInteractive3D();

  // Initialize UI Logic & Animations
  initUI();

  // Initialize Lucide SVG Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});
