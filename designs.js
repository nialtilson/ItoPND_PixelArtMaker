// Set the chosen color value (in RGB) as variable
const color = document.getElementById('colorPicker');
// Set the table size as a variable
const tableSize = document.getElementById('sizePicker');
// Set the pixelCanvas area as a variable
const pixelCanvas = document.getElementById('pixelCanvas');
// Set the table height value as a variable
const tableHeight = document.getElementById('inputHeight');
// Set the table width value as a variable
const tableWidth = document.getElementById('inputWidth');

// Define the function used to make the grid
function makeGrid(tableHeight, tableWidth) {
  // Get the actual value of tableHeight
  const numRows = tableHeight.value;
  // Get the actual value of tableWidth
  const numCols = tableWidth.value;
  // Set a loop to establish each row up to numRows
  for (let r = 0; r < numRows; r++) {
    // Creates a new element for each row
    const row = document.createElement('tr');
    // Appends the new element (new row) to the pixelCanvas Table
    pixelCanvas.appendChild(row);
    // Set a loop to establish each column up to numCols
    for (let c = 0; c < numCols; c++) {
      // Creates a new cell within the row for each column
      const col = document.createElement('td');
      // Appends the new element (new cell/col) to each row in pixelCanvas table
      row.appendChild(col);
      // Create an event for when a user clicks an individual cell
      col.addEventListener('click', function(event) {
        var clr = color.value;
        // Modify the cell color to the user's desired color 
        event.target.style.backgroundColor = clr;
      })
    }
  }

}


// Add an Event Listner for when user clicks Submit button
tableSize.addEventListener('submit', function (event) {
  // Prevent default reaction of a page refresh once clicked
  event.preventDefault();
  // Clear contents of existing Pixel Grid
  pixelCanvas.innerHTML = "";
  // Run the makeGrid Function with the new values
  makeGrid(tableHeight,tableWidth);
})
