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
  console.log(value);
});
function createGridTemplate() {
  container.style.gridTemplateColumns = `repeat(16, 1fr)`;
  container.style.gridTemplateRows = `repeat(16, 1fr)`;
}
createGridTemplate(5);
