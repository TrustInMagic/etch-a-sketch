function drawBoxes(boxNumberOnSide){
  sketchingBoard.style.cssText = `--grid-rows: ${boxNumberOnSide}; --grid-columns: ${boxNumberOnSide};`
  for (i = 0; i < (boxNumberOnSide ** 2); i++){
    let box = document.createElement("div");
    sketchingBoard.appendChild(box).className = "box";
  }
}

function start() {
  boxNumberOnSide = boxNumberInput.value;
  sketchingBoard.innerHTML = "";
  drawBoxes(boxNumberOnSide);
  let boxes = document.querySelectorAll(".box");

  for (let box of boxes) {
    box.addEventListener("mouseenter", () => changeColor(box));
    box.style.cssText = `--color: ${colorInput.value}`;
  }

  boxNumberInput.addEventListener("input", () => start())

  colorInput.addEventListener("input", () => {
    boxes.forEach((box) => {
      if (box.className !== "box hovered") {
        box.style.cssText = `--color: ${colorInput.value}`
      }
    })
  })

  clear.addEventListener("click", () => {
    boxes.forEach((box) => removeColor(box));
  }); 

}

function changeColor(element) {
  element.classList.add("hovered");
}

function removeColor(element) {
  element.classList.remove("hovered");
}

let sketchingBoard = document.querySelector(".sketching-board");
let boxNumberInput = document.querySelector(".slider input");
let colorInput = document.querySelector(".color");
let clear = document.querySelector(".clear");

start();
