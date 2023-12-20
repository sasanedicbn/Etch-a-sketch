const container = document.querySelector(".grid");
const inputColorPicker = document.querySelector(".colorPicker");
const colorMode = document.querySelector(".colorMode");
const randomColor = document.querySelector(".randomColor");
const eraser = document.querySelector(".eraser");
const clear = document.querySelector(".clear");
const rangeValue = document.querySelector(".value");
const inputRange = document.querySelector(".range");
const colorPicker = document.querySelector(".colorPicker");

const cube = document.querySelectorAll(".newDiv");
// WITH THIS WE CAN RANGE INPUT DATA

function createDom () {
  let color = 'red'
  const updateColor = (backgroundColor){
    color = backgroundColor
  }
  return{
  updateColor,
  }
}
inputRange.addEventListener("input", function () {
  const value = inputRange.value;
  rangeValue.innerHTML = `${value}X${value}`;
  createGridTemplate(value);
});

function appendChild(el) {
  el.style.border = "1px solid grey";
  container.appendChild(el);
}

// FUNCTION FOR CREATE DIV - FRIST DELETE (CLEAN OLD) AND PUT NEW DIV
function createGridTemplate(value) {
  container.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${value}, 1fr)`;
  container.innerHTML = "";

  let size = value * value;
  for (let i = 0; i < size; i++) {
    let cube = document.createElement("div");
    appendChild(cube);
  for (let m = 0; m < cube; m++) {
      let cube = document.createElement("div");
      appendChild(cube);
    }

    getRandomColor(cube);
    colorModeFn(cube);
    eraserColor(cube);
    clearColors(cube);
    // colorPickerFn(cube);
  }
  console.log(size);
}
// THIS IS DEFAULT COLOR AND WHEN WE USE MOUSEOVER WE GET BLACK COLOUR
function colorModeFn(element) {
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

// function colorPickerFn(element) {
//   const valueColorPicker = colorPicker.value;
//   element.style.backgroundColor = `${valueColorPicker}`;
// }
