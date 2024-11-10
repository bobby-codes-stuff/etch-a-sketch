const resolutionBtn = document.querySelector("body > button.resolutionBtn");
const container = document.querySelector("body > div.container");

// Create 16*16 grid
function createGrid(rows, cols) {

    // removes all child nodes - grid cells. Used when resolution is changed
    container.replaceChildren();

    rows = Math.min(rows, 100);
    cols = Math.min(cols, 100);

    for (let i=0;i < rows*cols; i++) {
        const containerHeight = container.offsetHeight;
        const containerWidth = container.offsetWidth;
        const cellHeight = containerHeight / rows;
        const cellWidth = containerWidth / cols;
        const gridCell = document.createElement("div");
        gridCell.classList.add("gridCell");
        gridCell.style.height = `${cellHeight}px`;
        gridCell.style.width = `${cellWidth}px`;

        gridCell.addEventListener("mouseenter", () => {
            gridCell.style.backgroundColor = "yellow";
        });

        container.appendChild(gridCell);
    }

}

function changeResolution() {
    do {
        grids = Number(prompt("Enter number of grids in square: "));
    } while (!Number.isInteger(grids));

    createGrid(grids, grids);
}

resolutionBtn.addEventListener("click", function () {
    changeResolution();
});

createGrid(16, 16);