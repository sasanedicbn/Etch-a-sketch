const container = document.querySelector(".grid");
const inputColorPicker = document.querySelector(".colorPicker");
const colorMode = document.querySelector(".colorMode");
const randomColor = document.querySelector(".randomColor");
const eraser = document.querySelector(".eraser");
const clear = document.querySelector(".clear");
const rangeValue = document.querySelector(".value");
const inputRange = document.querySelector(".range");
const btnApplyRange = document.querySelector(".apply");
const btnResetRange = document.querySelector(".reset");

inputRange.addEventListener("input", function () {
  const value = inputRange.value;
  rangeValue.innerHTML = `${value}X${value}`;
  createGridTemplate(value);
});
function createGridTemplate(value) {
  let cube = document.querySelectorAll(".newDiv");
  cube.forEach((div) => div.remove());
  console.log(cube);
  container.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${value}, 1fr)`;

  let size = value * value;
  for (let i = 0; i < size; i++) {
    let cube = document.createElement("div");
    cube.classList.add("newDiv");
    cube.style.border = "1px solid grey";
    container.appendChild(cube);
    colorModeFn(cube);
    getRandomColor(cube);
  }
  console.log(size);
}

function colorModeFn(element) {
  const data = colorMode.dataset.mode;
  console.log(data);

  if (data === "colorMode") {
    element.addEventListener("mouseover", function () {
      element.style.backgroundColor = "black";
    });
  }
}
function getRandomColor(element) {
  const randomRed = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);

  const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}
