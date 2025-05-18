const grid = document.getElementById('grid');
const addBoxBtn = document.getElementById('addBox');
const message = document.getElementById('message');
const closeBtn = document.getElementById('closeBtn');

const colors = ['red', 'orange', 'blue', 'green'];

addBoxBtn.addEventListener('click', () => {
  const box = document.createElement('div');
  box.className = 'box';
  box.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  grid.appendChild(box);
});

closeBtn.addEventListener('click', () => {
  message.style.display = 'none';
});
