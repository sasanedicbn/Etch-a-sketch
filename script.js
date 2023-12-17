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
function createGridTemplate(el) {
  container.style.gridTemplateColumns = `repeat(${el}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${el}, 1fr)`;

  let size = el * el;
  for (let i = 0; i < size; i++) {
    let cube = document.createElement("div");
    cube.style.backgroundColor = "red";
    container.appendChild(cube);
  }
}
