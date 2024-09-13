document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElem = document.getElementById('total-price');
    let totalPrice = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productElement = this.parentElement;
            const productName = productElement.dataset.name;
            const productPrice = parseFloat(productElement.dataset.price);
            
            // Add item to cart
            const listItem = document.createElement('li');
            listItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;
            cartItems.appendChild(listItem);
            
            
            // Update total price
            totalPrice += productPrice;
            totalPriceElem.textContent = totalPrice.toFixed(2);

           
        });
    });
});

// script.js

// Function to filter products based on the search query
function filterProducts(query) {
    // Get all product elements
    const products = document.querySelectorAll('#products .product');
    
    // Convert query to lowercase for case-insensitive comparison
    const queryLower = query.toLowerCase();

    // Loop through all products and check if they match the query
    products.forEach(product => {
        // Get the name of the product and convert it to lowercase
        const productName = product.getAttribute('data-name').toLowerCase();

        // Check if the product name includes the search query
        if (productName.includes(queryLower)) {
            product.style.display = 'block'; // Show the product
        } else {
            product.style.display = 'none'; // Hide the product
        }
    });
}

// Add an event listener to the search button
document.getElementById('searchButton').addEventListener('click', () => {
    // Get the search input value
    const searchInput = document.getElementById('searchinput').value;
    // Filter the products based on the search input
    filterProducts(searchInput);
});

// Optional: Add an event listener to the search input field to filter products on input change
document.getElementById('searchinput').addEventListener('input', () => {
    // Get the search input value
    const searchInput = document.getElementById('searchinput').value;
    // Filter the products based on the search input
    filterProducts(searchInput);
});
