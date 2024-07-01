let items = [];
let categories = [];

function addItem() {

    const itemInput = document.getElementById('item')
    const categoryInput = document.getElementById('category')
    const itemList = document.getElementById('itemList')

    let item = itemInput.value.trim();
    let category = Number(categoryInput.value.trim());

    if (item !== '' && !isNaN(category) && category >= 1 && category <= 3) {
        items.push(item)
        categories.push(category)

        const li = document.createElement('li');
        li.textContent = item;

        switch (category) {
            case 1: li.classList.add('category-Groceries');
                break;
            case 2: li.classList.add('category-Electronics');
                break;
            case 3: li.classList.add('category-Clothing');
                break;
        }

        const boughtButton = document.createElement('button')
        boughtButton.textContent = 'Mark as Bought'
        boughtButton.onclick = function () {
            li.classList.toggle('bought')
        }
        li.appendChild(boughtButton);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function () {
            const newItem = prompt('Edit item: ', item);
            if (newItem !== null && newItem.trim() !== '') {
                const itemIndex = items.indexOf(item);
                items[itemIndex] = newItem;
                li.firstChild.textContent = newItem;
                item = newItem;
            }

        }
        li.appendChild(editButton);


        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function () {
            itemList.removeChild(li);
            const itemIndex = items.indexOf(item);
            items.splice(itemIndex, 1);
            categories.splice(itemIndex, 1);
        };
        li.appendChild(removeButton);


        itemList.appendChild(li);
        itemInput.value = '';
        categoryInput.value = '';


    }
}