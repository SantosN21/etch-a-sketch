//Creates all grids.
const createGrid = (x) => {
  let gridContainer = document.getElementById("container");
  let grid = document.createElement("div");
  grid.id = "grid";
  // Set the new width and height as style properties of the grid
  let newWidth = 660 / x;
  let newHeight = 660 / x;
  grid.style.width = `${newWidth}px`;
  grid.style.width = `${newHeight}px`;
  for (let rows = 0; rows < x; rows++) {
    for (let columns = 0; columns < x; columns++) {
      let grid = document.createElement("div");
      grid.id = "grid";
      //Set the new width and height as style properties of the grid
      grid.style.width = `${newWidth}px`;
      grid.style.height = `${newHeight}px`;
      gridContainer.appendChild(grid);
      //Colors grid items whenever clicked
      grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = "black";
      });
    }
  }
};

//Function that allows you to create a new grid
const newGrid = () => {
  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    let z = prompt(
      "Please enter the size of the grid \nNOTE: Grid is capped to 60x60"
    );
    z = parseInt(z);
    if (z > 60) {
      z = 60;
    }
    clearGrid();
    createGrid(z);
  });
};
//Function to clear the grid
const clearGrid = () => {
  document.getElementById("container").textContent = "";
};

//Function that initializes the grid to 16x16
const createInitialGrid = () => {
  createGrid(16);
  newGrid();
};
createInitialGrid();

//Make a button to toggle grid outlines
