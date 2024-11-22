// Initialize cart as an array
let cart = [];

// Add item to cart
function addToCart(itemName, itemPrice) {
  const item = { name: itemName, price: itemPrice, quantity: 1 };
  const existingItem = cart.find((cartItem) => cartItem.name === itemName);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push(item);
  }

  updateCartUI();
  alert(`${itemName} added to the cart!`);
}

// Remove item from cart
function removeFromCart(itemName) {
  cart = cart.filter((item) => item.name !== itemName);
  updateCartUI();
  alert(`${itemName} removed from the cart!`);
}

// Update cart UI
function updateCartUI() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = ""; // Clear existing items

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <p>${item.name} x ${item.quantity}</p>
      <p>$${item.price * item.quantity}</p>
      <button onclick="removeFromCart('${item.name}')">Remove</button>
    `;
    cartContainer.appendChild(cartItem);
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalElement = document.createElement("p");
  totalElement.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
  cartContainer.appendChild(totalElement);
}

// Proceed to billing
function proceedToBilling() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  window.location.href = "billing.html";
}

// Example: Filter menu items by category
function filterMenu(category) {
  const allDishes = document.querySelectorAll(".dish-card");
  allDishes.forEach((dish) => {
    if (dish.dataset.category === category || category === "all") {
      dish.style.display = "block";
    } else {
      dish.style.display = "none";
    }
  });
}
