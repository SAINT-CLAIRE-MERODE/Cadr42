const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.1) rotate(2deg)';
    card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.5)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1) rotate(0deg)';
    card.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.5)';
  });

  card.addEventListener('click', () => {
    card.style.transform = 'scale(1.2) rotate(-2deg)';
    setTimeout(() => {
      card.style.transform = 'scale(1) rotate(0deg)';
    }, 200);
  });
});
