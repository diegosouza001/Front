document.getElementById('clickMe').addEventListener('click', () => {
    const message = document.getElementById('message');
    message.textContent = 'You clicked the button!';
    message.style.color = '#6200ea';
  });