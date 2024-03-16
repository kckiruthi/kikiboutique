let cart = []; // Array to store cart items
let total = 0; // Variable to store total price

// Function to add item to cart
function addToCart(itemName, itemPrice) {
    const item = {
        name: itemName,
        price: itemPrice
    };
    cart.push(item);
    total += itemPrice;
    updateCart();
}

// Function to update cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
}

// Function to place order
function placeOrder() {
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items to your cart.');
        return;
    }

    // Here you can implement your order placing logic,
    // for example, submitting form data to a server or displaying a confirmation message.
    alert('Your order has been placed! Thank you for shopping with Kiki Boutique.');
    // Clear cart after placing order
    cart = [];
    total = 0;
    updateCart();
}

// Add event listener to the "Place Order" button
document.getElementById('place-order-btn').addEventListener('click', placeOrder);