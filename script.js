let cart = []; 
let total = 0; 

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

    let orderDetails = '';
    cart.forEach(item => {
        orderDetails += `${item.name} - $${item.price}\n`;
    });

    const confirmationMessage = `Your order has been placed!\n\nOrder Details:\n${orderDetails}\nTotal: $${total.toFixed(2)}`;

    alert(confirmationMessage);

    // Clear cart after placing order
    cart = [];
    total = 0;
    updateCart();
}


document.getElementById('place-order-btn').addEventListener('click', placeOrder);

function contactsubmit(){
    alert('Submitted');
}


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const formData = new FormData(event.target);
    const firstName = formData.get('first-name');
    const lastName = formData.get('last-name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Display confirmation message
    const confirmationMessage = `Thank you, ${firstName} ${lastName}, for your message. We have received your message with the following details:\n\nEmail: ${email}\nMessage: ${message}`;
    alert(confirmationMessage);

    // Clear form fields
    event.target.reset();
});
