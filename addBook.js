// Get the table element by ID
const table = document.getElementById("bookTable");

// Loop through the array and create a row for each book
myLibrary.forEach((book) => {
  // Create a new row element
  const row = document.createElement("tr");

  // Loop through the book properties and create a cell for each one
  book.forEach((property) => {
    // Create a new cell element
    const cell = document.createElement("td");

    // Set the cell's text content to the book property
    cell.textContent = property;

    // Add the cell to the row
    row.appendChild(cell);
  });

  // Add the row to the table
  table.appendChild(row);
});
