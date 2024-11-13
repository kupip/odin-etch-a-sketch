function createGrids() {
  const container = document.querySelector(".container");
  for (let i = 0; i < 16; i++) {
    const row = document.createElement("div")
    row.classList.add("row");
    for (let i = 0; i < 16; i++) {
      const rowElm = document.createElement("div");
      rowElm.classList.add("row-elm");
      row.appendChild(rowElm);
    }
    container.appendChild(row);
  }
}

createGrids();
