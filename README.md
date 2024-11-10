# Income - Expense Calculator

This project is a fully functional **Income-Expense Calculator** built using HTML, CSS, and JavaScript. It allows you to track income and expenses, calculate totals, and view your balance. All data is stored in your browser, so it stays saved even if you refresh the page.

## What This Project Does
- **Add Income & Expenses**: Enter income (like a salary) or expenses (like groceries) with a description and amount.
- **Calculate Totals**: Automatically shows total income, total expenses, and net balance (income - expenses).
- **Save Data**: Uses `localStorage` in your browser to save entries, so your data is there next time.

## Project Overview

### HTML

The HTML file (`index.html`) contains the structure of the app, including:
- Input fields for description, amount, and type (income or expense).
- Buttons for adding transactions and reset the input feilds.
  
### JavaScript

The JavaScript file handles:
- **Adding Transactions**: Saves each transaction as income or expense and stores it in `localStorage`.
- **Calculating Totals**: Adds up all income and expenses, then shows the netbalance.
- **Form Resetting**: Clears form fields when you click the "Clear Form" button.

### Local Storage

`localStorage` is a way to save data in your browser. We save each transaction in `localStorage`, so it will still be there after you refresh the page.
