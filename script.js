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
    // applayMode(cube);
  }
  console.log(size);
}

function colorModeFn(element) {
  // const colorMode = document.querySelector(".colorMode");
  const data = colorMode.dataset.mode;
  console.log(data);

  if (data === "colorMode") {
    element.addEventListener("mouseover", function () {
      element.style.backgroundColor = "black";
    });
  }
}
function RandomColor() {
  console.log("radi");
}

// function applayMode(element) {
//   console.log(element);
//   switch (element) {
//     case "colorMode":
//       colorModeFn(element);
//       break;
//     case "RandomColor":
//       RandomColor();
//       break;
//   }
// }
