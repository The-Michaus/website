import './style.css';
import { initIcons } from './modules/icons.js';
import { initNavbar } from './modules/navbar.js';
import { initScrollspy } from './modules/scrollspy.js';

initIcons();

window.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollspy();
});
