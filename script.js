function createTable() {
    // Prompt for number of rows
    const numRows = parseInt(prompt("Input number of rows"));
    if (isNaN(numRows) || numRows <= 0) {
        alert("Please enter a valid number of rows.");
        return;
    }

    // Prompt for number of columns
    const numCols = parseInt(prompt("Input number of columns"));
    if (isNaN(numCols) || numCols <= 0) {
        alert("Please enter a valid number of columns.");
        return;
    }

    // Get the table element
    const table = document.getElementById('myTable');
    
    // Clear existing table contents
    table.innerHTML = '';

    // Create rows and cells
    for (let i = 0; i < numRows; i++) {
        // Create a new row
        const row = table.insertRow();
        
        for (let j = 0; j < numCols; j++) {
            // Create a new cell
            const cell = row.insertCell();
            
            // Set the text of the cell
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}