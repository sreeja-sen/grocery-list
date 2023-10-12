document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('item');
    const categoryInput = document.getElementById('category');
    const priceInput = document.getElementById('price');
    const quantityInput = document.getElementById('quantity');
    const addBtn = document.getElementById('addBtn');
  
    addBtn.addEventListener('click', addItem);
  
    populateList();
  
    function addItem() {
      const item = itemInput.value.trim();
      const category = categoryInput.value.trim();
      const price = priceInput.value.trim();
      const quantity = quantityInput.value.trim();
  
      if (item === '' || category === '' || price === '' || quantity === '') {
        return;
      }
  
      const groceryItem = {
        item,
        category,
        price,
        quantity
      };
  
      saveItem(groceryItem);
      appendItemToList(groceryItem);
      clearInputs();
    }
  
    function saveItem(item) {
      let groceryList = JSON.parse(localStorage.getItem('groceryList')) || [];
      groceryList.push(item);
      localStorage.setItem('groceryList', JSON.stringify(groceryList));
    }
  
    function populateList() {
      const groceryList = JSON.parse(localStorage.getItem('groceryList'));
      if (groceryList) {
        groceryList.forEach(item => {
          appendItemToList(item);
        });
      }
    }
  
    function appendItemToList(item) {
      const categoryList = document.getElementById(`${item.category.toLowerCase()}List`);
      const listItem = document.createElement('li');
      listItem.textContent = `${item.item} - $${item.price} - quantity: ${item.quantity}`;
      categoryList.appendChild(listItem);
    }
  
    function clearInputs() {
      itemInput.value = '';
      categoryInput.value = '';
      priceInput.value = '';
      quantityInput.value = '';
    }
  });
      
