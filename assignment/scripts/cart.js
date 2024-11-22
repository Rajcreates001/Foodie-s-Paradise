// Function to update the cart display
function updateCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  // Clear current cart items
  cartItemsContainer.innerHTML = '';

  // If the cart is empty, show a message
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty. Add some items!</p>';
    totalPriceElement.textContent = '₹0.00';
    return;
  }

  // Add each cart item to the display
  let total = 0;
  cart.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');
    itemElement.innerHTML = `
      <h3>${item.name}</h3>
      <p>Quantity: ${item.quantity}</p>
      <p>Price: ₹${item.price * item.quantity}</p>
      <button onclick="removeFromCart('${item.name}')">Remove</button>
    `;

    cartItemsContainer.appendChild(itemElement);
    total += item.price * item.quantity;
  });

  totalPriceElement.textContent = `₹${total.toFixed(2)}`;
}

// Function to remove an item from the cart
function removeFromCart(itemName) {
  cart = cart.filter(item => item.name !== itemName);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}

// Function to proceed to billing
function proceedToBilling() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
  } else {
    alert('Proceeding to billing...');
    window.location.href = 'billing.html'; // Redirect to billing page
  }
}

// Update the cart display on page load
updateCart();
