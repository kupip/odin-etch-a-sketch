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
    for (let j = 0; j < 16; j++) {
      const rowElm = document.createElement("div");
      rowElm.classList.add("row-elm");
      rowElm.addEventListener("mouseenter", function () {
        rowElm.style.backgroundColor = "black";
      })
      row.appendChild(rowElm);
    }
    container.appendChild(row);
  }
}

createGrids(16);
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  let input = prompt("How many grid do you want to have?\nExample: 16 would result in 16x16");
  while (input > 100) {
    input = prompt("Your input is exceeding the maximum amount (100). Please type again.");
  }
  createGrids(input);
});
