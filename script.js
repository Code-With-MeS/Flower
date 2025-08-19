function createFallingPetal() {
  const petal = document.createElement('div');
  petal.classList.add('falling-petal');

  const size = Math.random() * 10 + 20;
  petal.style.width = `${size}px`;
  petal.style.height = `${size}px`;

  petal.style.left = `${Math.random() * 100}%`;
  petal.style.animationDuration = `${Math.random() * 3 + 4}s`;
  petal.style.animationDelay = `${Math.random() * 2}s`;

  document.querySelector('.falling-container').appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 7000);
}

setInterval(createFallingPetal, 250);
