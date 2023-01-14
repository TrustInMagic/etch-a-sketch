// calculates the square size needed to fill up the container given square number and container side
function getBoxSize(squareNumber, containerSide) {
  let iSquare = Math.round(Math.sqrt(squareNumber) + 0.49);
  let squareSize = containerSide / iSquare;
  return squareSize
}

function drawBoxes(boxNumber, boxSide) {
  for (let i = 1; i <= boxNumber; i++) {
    let cloneBox = box.cloneNode(true);
    sketchingBoard.appendChild(cloneBox);
    cloneBox.addEventListener("mouseover", () => changeColor(cloneBox));
    box.style.cssText = `box-sizing: border-box; float: left; margin: 0; padding: 0; background-color: pink`;
  }
}

function changeColor(element) {
  element.classList.add("hovered")
}

const CONTAINER_SIDE = 500;
let sketchingBoard = document.querySelector(".sketching-board");
let boxNumberInput = document.querySelector(".slider input");
let boxNumberInputValue = document.querySelector("#rangeValue");
let boxNumber = boxNumberInput.value * boxNumberInput.value;
let box = document.createElement("div");
let boxSide = getBoxSize(boxNumber, CONTAINER_SIDE);

drawBoxes(boxNumber, boxSide);

boxNumberInput.addEventListener("input", (e) => {
  boxNumber = boxNumberInput.value * boxNumberInput.value;
  boxSide = getBoxSize(boxNumber, CONTAINER_SIDE);
  sketchingBoard.innerHTML = ""
  drawBoxes(boxNumber, boxSide)
})

