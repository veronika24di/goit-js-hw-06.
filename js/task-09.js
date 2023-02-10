function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const chageColorBtn = document.querySelector('button.change-color');
const spanColor = document.querySelector('span.color')

chageColorBtn.addEventListener('click', (element) => {
  let color = getRandomHexColor();

  body.style.backgroundColor = color;

  spanColor.textContent = color
})