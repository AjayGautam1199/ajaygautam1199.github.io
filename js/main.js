import { initNavigation } from './modules/navigation.js';
import { initScrollReveal } from './modules/scroll-reveal.js';
import { initParticles } from './modules/particles-config.js';
import { initProjectGalleries } from './modules/project-gallery.js';
import {
  renderSkills,
  renderProjects,
  renderEducation,
  renderExperience,
} from './modules/render.js';

function setCurrentYear() {
  const target = document.querySelector('[data-current-year]');
  if (target) target.textContent = String(new Date().getFullYear());
}

function bootstrap() {
  renderEducation(document.getElementById('education-list'));
  renderExperience(document.getElementById('experience-list'));
  renderSkills(document.getElementById('skills-list'));
  renderProjects(document.getElementById('projects-list'));

  initNavigation();
  initScrollReveal();
  initParticles('particles-js');
  initProjectGalleries();
  setCurrentYear();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
