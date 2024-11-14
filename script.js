let gridAmt = 16;
function createGrids(gridNum) {
  const container = document.querySelector(".container");

  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
  for (let i = 0; i < gridNum; i++) {
    const row = document.createElement("div")
    row.classList.add("row");
    row.style.height = 100 / gridNum + "%";
    console.log(row.style.height);
    for (let j = 0; j < gridNum; j++) {
      const rowElm = document.createElement("div");
      rowElm.classList.add("row-elm");
      rowElm.style.width = 100 / gridNum + "%";
      rowElm.addEventListener("mouseenter", function () {
        rowElm.style.backgroundColor = "black";
      })
      row.appendChild(rowElm);
    }
    container.appendChild(row);
  }
}

createGrids(gridAmt);
const btn = document.querySelector("#newGrid");
btn.addEventListener("click", function () {
  gridAmt = prompt("How many grid do you want to have?\nExample: 16 would result in 16x16");
  while (gridAmt > 100) {
    gridAmt = prompt("Your input is exceeding the maximum amount (100). Please type again.");
  }
  createGrids(gridAmt);
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", function () {
  createGrids(gridAmt);
  const container = document.querySelector(".container");
});
