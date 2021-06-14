// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
   e.preventDefault();
   const product = form.elements.product;
   const qty = form.elements.qty;
   
   newItem(product.value, qty.value);
   product.value = "";
   qty.value = "";
   
});

const newItem = (product, qty) => {
    const itemList = document.querySelector('#list');
    var newItem = document.createElement('li');
    newItem.innerHTML = `${qty} ${product}`;
    itemList.appendChild(newItem);
};