let expenses = [];
let Amount = [];
let categories = [];

function addExpense() {
    const expenseInput = document.getElementById('expense');
    const amountInput = document.getElementById('amount');
    const categoryInput = document.getElementById('category');
    const List = document.getElementById('expenseList');

    let expense = expenseInput.value.trim();
    let amount = Number(amountInput.value.trim());
    let category = Number(categoryInput.value.trim());

    if (expense !== '' && !isNaN(category) && category >= 1 && category <= 3 && !isNaN(amount)) {
        expenses.push(expense);
        Amount.push(amount);
        categories.push(category);

        const li = document.createElement('li');
        li.textContent = expense;

        switch (category) {
            case 1:
                li.classList.add('category-Food');
                break;
            case 2:
                li.classList.add('category-Transport');
                break;
            case 3:
                li.classList.add('category-Entertainment');
                break;
        }

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Completed';
        completeButton.onclick = function () {
            li.classList.toggle('completed');
        };
        li.appendChild(completeButton);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function () {
            const newExpense = prompt('Edit Expense Details ', expense);
            if (newExpense !== null && newExpense.trim() !== '') {
                const Index = expenses.indexOf(expense);
                expenses[Index] = newExpense;
                li.firstChild.textContent = newExpense;
                expense = newExpense;
            }
        };
        li.appendChild(editButton);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function () {
            List.removeChild(li);
            const Index = expenses.indexOf(expense);
            expenses.splice(Index, 1);
            Amount.splice(Index, 1);
            categories.splice(Index, 1);
        };
        li.appendChild(removeButton);

        List.appendChild(li);
        expenseInput.value = '';
        categoryInput.value = '';
        amountInput.value = '';

    } else {
        alert('Please enter a valid item and a category between 1 and 3');
    }
}
