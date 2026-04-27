export const particlesConfig = {
  particles: {
    number: { value: 70, density: { enable: true, value_area: 900 } },
    color: { value: '#64FFDA' },
    shape: { type: 'circle' },
    opacity: { value: 0.45, random: true },
    size: { value: 3, random: true },
    move: {
      enable: true,
      speed: 1.6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#64FFDA',
      opacity: 0.35,
      width: 1,
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'grab' },
      onclick: { enable: true, mode: 'push' },
      resize: true,
    },
    modes: {
      grab: { distance: 180, line_linked: { opacity: 0.6 } },
      push: { particles_nb: 3 },
    },
  },
  retina_detect: true,
};

export function initParticles(targetId = 'particles-js') {
  if (typeof window.particlesJS !== 'function') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  window.particlesJS(targetId, particlesConfig);
}
