document.getElementById('clickMe').addEventListener('click', () => {
    const message = document.getElementById('message');
    message.textContent = 'Você clicou no botão!';
    message.style.color = '#6200ea';
  });