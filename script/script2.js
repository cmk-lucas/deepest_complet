function updateQuantity(button, change) {
    const cartItem = button.closest('.cart-item');
    const quantityElement = cartItem.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);

    // Update quantity
    quantity = Math.max(1, quantity + change);
    quantityElement.textContent = quantity;

    // Recalculate totals
    calculateTotals();
}

function calculateTotals() {
    const cartItems = document.querySelectorAll('.cart-item');
    let subtotal = 0;

    cartItems.forEach(item => {
        const price = parseFloat(item.getAttribute('data-price'));
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        subtotal += price * quantity;
    });

    const shippingFee = 5;
    const discount = 10;
    const total = subtotal + shippingFee - discount;

    // Update the DOM
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
}

// Initialize totals on page load
calculateTotals();