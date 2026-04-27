export function initProjectGalleries(root = document) {
  const containers = root.querySelectorAll('.image-container');

  containers.forEach((container) => {
    const images = container.querySelectorAll('.project-image');
    if (images.length < 2) return;

    let activeIndex = 0;
    const cycle = () => {
      images[activeIndex].classList.remove('active');
      activeIndex = (activeIndex + 1) % images.length;
      images[activeIndex].classList.add('active');
    };

    container.addEventListener('click', cycle);
    container.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        cycle();
      }
    });

    let touchStartX = null;
    container.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    container.addEventListener('touchmove', (e) => {
      if (touchStartX === null) return;
      const diff = touchStartX - e.touches[0].clientX;
      if (Math.abs(diff) > 30) {
        cycle();
        touchStartX = null;
      }
    }, { passive: true });
  });
}
