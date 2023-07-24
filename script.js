const moreButton = document.querySelector('.more-button');

moreButton.addEventListener('click', () => {
  const contentSection = document.querySelector('.content');
  const contentSectionPosition = contentSection.getBoundingClientRect().top;
  window.scrollBy({
    top: contentSectionPosition,
    behavior: 'smooth'
  });
});
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
    if (particles[i].size <= 0.3) {
      particles.splice(i, 1);
      i--;
    }
  }
  requestAnimationFrame(animateParticles);
}

canvas.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  createParticles(x, y);
});

canvas.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  createParticles(x, y);
});

animateParticles();