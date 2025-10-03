# Expense Tracker 💸

A simple **Expense Tracker** web application that allows users to manage their expenses by selecting a category, entering an amount, and picking a date. Expenses are displayed in a table, and the total spent is automatically updated. You can also delete individual entries.

## Features

- Add expenses with category, amount, and date
- View expenses in a formatted table
- See automatic updates to the total amount spent
- Delete individual expense entries

## Technologies Used

- HTML
- CSS (optional styling)
- JavaScript (vanilla)

## Getting Started

Follow these steps to run the project on your local machine.

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Edge)

### Installation

1. Clone the repository

2. Navigate to the project folder:

   ```
   cd expense-tracker
   ```

3. Open `index.html` in your web browser:

   ```
   start index.html     # Windows
   open index.html      # macOS
   ```

   Or just double-click `index.html` to open it.

## Folder Structure

```
expense-tracker/
├── index.html      # Main HTML file
├── style.css       # Optional CSS styling
└── script.js       # Expense tracking logic
```

## How to Use

1. Select a category from the dropdown.
2. Enter a valid amount (greater than 0).
3. Pick a date.
4. Click **"Add"** to insert the expense into the table.
5. Use the **"Delete"** button to remove any expense and update the total.

### Sample Table Output

| Category | Amount | Date       | Action   |
|----------|--------|------------|----------|
| Food     | 200    | 2025-07-18 | Delete   |

### Total Amount Displayed

```
Total: ₹200
```



## License

This project is open-source and available under the [MIT License](LICENSE).


