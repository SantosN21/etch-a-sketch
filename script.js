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
const resetGrid = () => {
  const resetButton = document.querySelector("resetButton");
  const grids = document.querySelector("grid");
  resetButton.addEventListener("click", () => {
    grids.style.backgroundColor = "white";
  })
}
//Function that allows you to create a new grid
const newGrid = () => {
  const container = document.querySelectorAll(".range-slider");
  let slider;
  let z;
  //Slider
  for (let i = 0; i < container.length; i++) {
  slider = container[i].querySelector(".slider");
  const thumb = container[i].querySelector(".slider-thumb");
  const tooltip = container[i].querySelector(".tooltip");
  const progress = container[i].querySelector(".progress");
  const customSlider = () => {
    const maxVal = slider.getAttribute("max");
    const val = (slider.value / maxVal) * 100 + "%";
    tooltip.innerHTML = slider.value + "x" + slider.value;
    progress.style.width = val;
    thumb.style.left = val;
    z = parseInt(slider.value)
    clearGrid();
    createGrid(z);
  }
  customSlider();
  slider.addEventListener("input", () => {
    customSlider();
  })
}
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
const gridOutline = () => {
  const outlineButton = document.getElementById("outlineButton");
  outlineButton.addEventListener("click", () => {
    let grid = document.querySelectorAll("#grid")
    grid.forEach(grid => grid.style.outline="1px solid #000000");
  });
}