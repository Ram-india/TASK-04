let transactionList = JSON.parse(localStorage.getItem("transactionList")) || [];
let filterCategory = "All";
let editIndex = null;

function addItem() {
  const amount = document.getElementById("amount").value;
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;

  if (amount && description && category) {
    if (editIndex != null) {
      transactionList[editIndex] = {
        amount,
        description,
        category,
      };
      editIndex = null;
    } else {
      //Add transaction
      transactionList.push({ amount, description, category });
    }
    localStorage.setItem("transactionList", JSON.stringify(transactionList));
    clearInputFeilds();
    updateUI();
  }
}
function clearInputFeilds() {
  document.getElementById("amount").value = "";
  document.getElementById("description").value = "";
  document.getElementById("category").value = "";
}

function updateUI() {
  const transactionListContainer = document.getElementById("transaction-list");
  transactionListContainer.innerHTML = "";

  const filterdList =
    filterCategory === "All"
      ? transactionList
      : transactionList.filter(function (item) {
          return item.category === filterCategory;
        });

  filterdList.forEach(function (item, index) {
    const itemElement = document.createElement("li");
    itemElement.classList =
      "p-2 border border-gray-200 rounded flex justify-between items-center bg-gradient-to-r from-blue-50 to-indigo-50 ";
    itemElement.innerHTML = `<div class="w-1/2">
      <p class="font-semibold">${item.description}</p>
      <p>${item.category}</p>
    </div>
    <div class="w-1/4">
      <p class="text-lg font-bold ${
        item.category == "income" ? `text-green-600` : `text-red-500`
      }" > &#x20B9;  ${item.amount}</p>
    </div>
    <div class ="flex justify-center items-center gap-1 w-1/4">
      <button onclick="editItem(${index})" class=" px-2 py-1 bg-yellow-500 text-white rounded" >  
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
     </button> 
      <button onclick="deleteItem(${index})" class="px-2 py-1 bg-red-500 text-white rounded" > 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
      </button> 
    </div>`;

    transactionListContainer.appendChild(itemElement);
  });
}
// FORM RESET
function resetForm() {
  document.getElementById("inExCalc").reset();
}
// FOR DELETE
function deleteItem(index) {
  transactionList.splice(index, 1);
  localStorage.setItem("transactionList", JSON.stringify(transactionList));
  updateUI();
  displayData();
}
function filterItems(category) {
  filterCategory = category;
  updateUI();
  displayData();
}
//EDIT
function editItem(index) {
  document.getElementById("amount").value = transactionList[index].amount;
  document.getElementById("description").value =
    transactionList[index].description;
  document.getElementById("category").value = transactionList[index].category;
  editIndex = index;
}

// TOTAL INCOME

function getTotalIncome() {
  let transactionList = JSON.parse(localStorage.getItem("transactionList"));

  return transactionList
    .filter((transactionList) => transactionList.category === "income")
    .reduce((total, income) => total + +income.amount, 0);
}
// TOTAL Expense

function getTotalExpense() {
  let transactionList = JSON.parse(localStorage.getItem("transactionList"));
  return transactionList
    .filter((transactionList) => transactionList.category === "expense")
    .reduce((total, expense) => total + +expense.amount, 0);
}
//Net Balence
function netBalence() {
  return getTotalIncome() - getTotalExpense();
}

//Display data
function displayData() {
  document.getElementById("total-income-display").innerText = getTotalIncome();
  document.getElementById("total-expense-display").innerText = getTotalExpense();
  document.getElementById("net-balence-display").innerText = netBalence();
}

updateUI();
displayData();
