const container = document.querySelector(".sketch-container");
const clearBtn = document.querySelector("#clear");
const gridSize = document.querySelector("#gridSize");
let gridCellNr = 16;


clearBtn.addEventListener("click", clearGrid);
gridSize.addEventListener("change", changeGrid)

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeColor(e) {
  if(e.type === "mouseover" && !mouseDown) return
  else {
    e.target.classList.add("colored")
  }
}

function clearGrid() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.classList.remove("colored")
  })
}

function changeGrid(e) {
  gridCellNr = e.target.value;
  for (let i = 1; i <= gridCellNr; i++) {
    let gridCell = document.createElement("div");
    gridCell.classList.add("cell");
    gridCell.addEventListener("mouseover", changeColor);
    gridCell.addEventListener("mousedown", changeColor);
    container.append(gridCell);
  }
}

// for (let i = 1; i <= gridCellNr; i++) {
//   let gridCell = document.createElement('div');
//   gridCell.classList.add("cell");
//   gridCell.addEventListener("mouseover", changeColor)
//   gridCell.addEventListener("mousedown", changeColor)
//   container.append(gridCell);
// }