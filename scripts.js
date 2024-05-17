// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const addItemButton = document.getElementById('addItemButton');
    const itemInput = document.getElementById('itemInput');
    const shoppingList = document.getElementById('shoppingList');

    addItemButton.addEventListener('click', addItem);
    itemInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addItem();
    });

    function addItem() {
        const itemText = itemInput.value.trim();
        if (itemText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = itemText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                shoppingList.removeChild(listItem);
            });

            listItem.appendChild(removeButton);
            shoppingList.appendChild(listItem);
            itemInput.value = '';
            itemInput.focus();
        }
    }
});
