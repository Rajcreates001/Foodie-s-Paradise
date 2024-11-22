// Array to store cart items
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add an item to the cart
function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);
  
  if (existingItem) {
    existingItem.quantity += 1; // Increase quantity if the item already exists
  } else {
    cart.push({ name, price: parseFloat(price), quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
  alert(`${name} has been added to the cart!`);
}

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = button.getAttribute('data-price');
    addToCart(name, price);
  });
});
