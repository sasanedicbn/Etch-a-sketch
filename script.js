const container = document.querySelector(".grid");
const inputColorPicker = document.querySelector(".colorPicker");
const colorMode = document.querySelector(".colorMode");
const randomColor = document.querySelector(".randomColor");
const eraser = document.querySelector(".eraser");
const clear = document.querySelector(".clear");
const rangeValue = document.querySelector(".value");
const inputRange = document.querySelector(".range");

// WITH THIS WE CAN RANGE INPUT DATA
inputRange.addEventListener("input", function () {
  const value = inputRange.value;
  rangeValue.innerHTML = `${value}X${value}`;
  createGridTemplate(value);
});
// FUNCTION FOR CREATE DIV - FRIST DELETE (CLEAN OLD) AND PUT NEW DIV
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
    getRandomColor(cube);
    colorModeFn(cube);
    eraserColor(cube);
    clearColors(cube);
  }
  console.log(size);
}
// THIS IS DEFAULT COLOR AND WHEN WE USE MOUSEOVER WE GET BLACK COLOUR
function colorModeFn(element) {
  // const data = colorMode.dataset.mode;
  // console.log(data);

  // if (data === "colorMode") {
  colorMode.addEventListener("click", function () {
    element.addEventListener("mouseover", function () {
      element.style.backgroundColor = "black";
    });
  });
}
// }
// THIS FUNCTION GIVE US RANDOM COLOR
function getRandomColor(element) {
  randomColor.addEventListener("click", function () {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    element.addEventListener("mouseover", function () {
      element.style.backgroundColor = randomColor;
    });
  });
}
// THIS FUNCTION ERASER ONE BY ONE DIV
function eraserColor(element) {
  eraser.addEventListener("click", function () {
    element.addEventListener("mouseover", function () {
      element.style.backgroundColor = "white";
    });
  });
}
// THIS FUNCTION CLEAR ALL DIV ON CLICK
function clearColors(element) {
  clear.addEventListener("click", function () {
    element.style.backgroundColor = "white";
  });
}
