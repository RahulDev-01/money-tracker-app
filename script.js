let expenses = [];
// Variable to track the total of all expenses
let totalAmount = 0;

// Get DOM elements by their IDs
const categorySelect = document.getElementById('catergory-select'); // Dropdown for selecting category
const amountInput = document.getElementById('amount-input'); // Input field for amount
const dateInput = document.getElementById('date-input'); // Input field for date
const addBtn = document.getElementById('add-btn'); // Button to add the expense
const expenseTableBody = document.getElementById('expense-table-body'); // Table body to display expenses
const totalAmountcell = document.getElementById('total-amount'); // Cell to display the total amount

// Add event listener for click event on the "Add" button
addBtn.addEventListener('click', () => {
    // Get input values
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    // Validation checks
    if (category === '') {
        alert("Please Select a Category");
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert("Please Enter a valid amount");
        return;
    }
    if (date === '') {
        alert("Please Select a date");
        return;
    }

    // Create new expense object and push it to the array
    const expense = { category, amount, date };
    expenses.push(expense);

    // Update the total amount and display it
    totalAmount += amount;
    totalAmountcell.textContent = totalAmount;

    // Add a new row to the expense table
    const newRow = expenseTableBody.insertRow();

    // Create and insert cells for category, amount, date, and delete button
    const categoryCell = newRow.insertCell();
    const AmountCell = newRow.insertCell();
    const dataCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    // Create the delete button element
    const deletebtn = document.createElement('button');
    deletebtn.textContent = "Delete";
    deletebtn.classList.add('delete-btn'); // Optional styling class

    // Set content for each cell
    categoryCell.textContent = expense.category;
    AmountCell.textContent = expense.amount;
    dataCell.textContent = expense.date;
    deleteCell.appendChild(deletebtn); // Add button to the last cell

    // Add event listener for deleting a row when the delete button is clicked
    deletebtn.addEventListener('click', () => {
        const index = expenses.indexOf(expense); // Find expense index
        if (index > -1) {
            expenses.splice(index, 1); // Remove item from array
            totalAmount -= expense.amount; // Subtract its amount from total
            totalAmountcell.textContent = totalAmount; // Update the total on screen
            expenseTableBody.removeChild(newRow); // Remove the row from the table
        }
    });
});
