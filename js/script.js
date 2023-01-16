function drawBoxes(boxNumberOnSide){
  sketchingBoard.style.cssText = `--grid-rows: ${boxNumberOnSide}; --grid-columns: ${boxNumberOnSide};`
  for (i = 0; i < (boxNumberOnSide ** 2); i++){
    let box = document.createElement("div");
    sketchingBoard.appendChild(box).className = "box";
  }
}

function reset () {
  boxNumberOnSide = boxNumberInput.value;
  sketchingBoard.innerHTML = "";
  drawBoxes(boxNumberOnSide);
  let boxes = document.querySelectorAll(".box");

  for (let box of boxes) {
    box.addEventListener("mouseover", () => changeColor(box));
  }
}

function changeColor(element) {
  element.classList.add("hovered")
}

let sketchingBoard = document.querySelector(".sketching-board");
let boxNumberInput = document.querySelector(".slider input");
let boxNumberOnSide = boxNumberInput.value;

drawBoxes(boxNumberOnSide);
let boxes = document.querySelectorAll(".box");

boxNumberInput.addEventListener("input", () => reset())

for (let box of boxes) {
  box.addEventListener("mouseover", () => changeColor(box));
}