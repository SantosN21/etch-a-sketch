let randomColors = false;
let eraser = false;
const gridContainer = document.getElementById("container");
//Allows the user to click hold and draw on the grid
let isDrawing = false;
window.addEventListener("mousedown", () => {
    isDrawing = true;
});
window.addEventListener("mouseup", () => {
    isDrawing = false;
});


/* Remove the not-allowed cursor when trying to draw
Had issues when I first added this that broke the slider,
if statement inside the code block fixes that.
*/
document.body.onmousedown = (e) => {
  if (e.target.id === "grid") {
  e.preventDefault();
  }
  isDrawing = true; 
};

//Creates all grids.
const createGrid = (x) => {
  // Set the new width and height as style properties of the grid
  const newWidth = 660 / x;
  const newHeight = 660 / x;
  
  for (let rows = 0; rows < x; rows++) {
    for (let columns = 0; columns < x; columns++) {
      const grid = document.createElement("div");
      grid.id = "grid";
      grid.classList.add("grid-outline")
      //Set the new width and height as style properties of the grid
      grid.style.width = `${newWidth}px`;
      grid.style.height = `${newHeight}px`;
      gridContainer.appendChild(grid);
      //Colors grid items whenever clicked
      grid.addEventListener("mouseover", () => {
        if (isDrawing) {
        if (randomColors) {
          grid.style.backgroundColor = getRandomColor();
        } 
        else if (eraser) {
          grid.style.backgroundColor = getEraser();
        }
        else {
          grid.style.backgroundColor = "black"; //Default color 
        };
      }
      });
    }
  }
};

//Function to generate random colors
const getRandomColor = () => {
  color = `hsl(${Math.random() * 360}, 100%, 50%)`
  return color;
}

//Eraser
  const getEraser = () => { 
    const color = "white"
    return color;
  }

//Resets the grid
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
    resetGridOnSizeChange();
    createGrid(z);
  }
  customSlider();
  slider.addEventListener("input", () => {
    customSlider();
  })
}
};
//Function to reset the grid when a new size is selected
const resetGridOnSizeChange = () => {
  document.getElementById("container").textContent = "";
};

//Function that initializes the grid to 16x16
const createInitialGrid = () => {
  createGrid(16);
  newGrid();
  //Random color
  const randomColorButton = document.getElementById("randomColorButton");
  randomColorButton.addEventListener("click", () => {
    randomColors = !randomColors;
  });
  //Eraser
  const eraserButton = document.getElementById("eraserButton");
  eraserButton.addEventListener ("click", () => {
    eraser = !eraser;
  })
};
createInitialGrid();

//Button function to toggle grid outlines
const gridOutline = () => {
  const outlineButton = document.getElementById("outlineButton");
  outlineButton.addEventListener("click", () => {
    let grid = document.querySelectorAll("#grid")
    grid.forEach(grid => grid.classList.toggle("grid-outline"));
  });
}

//Button function that clears the current grid 
const clearGrid = () => {
  const clearGridButton = document.getElementById("clearGridButton");
  clearGridButton.addEventListener("click", () => {
    let grid = document.querySelectorAll("#grid")
    grid.forEach(grid => grid.style.backgroundColor = "#ffffff");
  });
}

