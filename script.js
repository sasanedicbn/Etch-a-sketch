const container = document.querySelector(".grid");
const inputColorPicker = document.querySelector(".colorPicker");
const colorMode = document.querySelector(".colorMode");
const randomColorBtn = document.querySelector(".randomColor");
const eraser = document.querySelector(".eraser");
const clear = document.querySelector(".clear");
const rangeValue = document.querySelector(".value");
const inputRange = document.querySelector(".range");
const colorPicker = document.querySelector(".colorPicker");

const cube = document.querySelectorAll(".newDiv");
function logicGame() {
  let currentColor = "red";
  const getCurrentColor = () => currentColor;
  const setCurrentColor = (color) => {
    currentColor = color;
  };
  return {
    getCurrentColor,
    setCurrentColor,
  };
}
const logic = logicGame();

cube.innerHTML = logic.getCurrentColor();
// getter i setter
function createDom() {
  function updateColor(element, backgroundColors) {
    element.style.backgroundColor = backgroundColors;
  }
  return {
    updateColor,
  };
}
const DOM = createDom();
// DEFAULT START
createGridTemplate(2, 2);

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
    cube.classList.add("sasa");
    appendChild(cube);
    for (let m = 0; m < cube; m++) {
      let cube = document.createElement("div");
      cube.classList.add("sasa");
      appendChild(cube);
    }
    function attachedMouseover() {
      const newClass = document.querySelectorAll(".sasa");
      newClass.forEach((el) => {
        el.addEventListener("mouseover", function () {
          el.style.backgroundColor = logic.getCurrentColor();
        });
      });
    }
  }
  attachedMouseover();
}
// THIS IS DEFAULT COLOR AND WHEN WE USE MOUSEOVER WE GET BLACK COLOUR

colorMode.addEventListener("click", function () {
  logic.setCurrentColor("black");
});

// THIS FUNCTION GIVE US RANDOM COLOR
function getRandomColor() {
  randomColorBtn.addEventListener("click", function () {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    logic.setCurrentColor(randomColor);
  });
}
getRandomColor();
// THIS FUNCTION ERASER ONE BY ONE DIV

eraser.addEventListener("click", function () {
  logic.setCurrentColor("white");
});
// THIS FUNCTION CLEAR ALL DIV ON CLICK
function clearColors(element) {
  clear.addEventListener("click", function () {
    DOM.updateColor(element, "white");
  });
}
