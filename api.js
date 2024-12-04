const apiEndpoint = "https://fakestoreapi.com/products"; 
async function fetchProducts() {
try {
  const response = await fetch(apiEndpoint);
  const products = await response.json();

  const productGrid = document.getElementById('product-grid');
  productGrid.innerHTML = '';

  products.forEach(product => {
      // Create product card
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      // Populate product card
      productCard.innerHTML = `
      <div class="borderfeatch">
          <img class="height" src="${product.image}" alt="${product.title}">
          <h3>${product.title.slice(0, 15)}...</h3>
          <p>${product.description.slice(0, 60)}...</p>
          <hr>
          <div class="price">$${product.price}</div>
          <hr>
          <div class="addcartcenter">
          <button class="details">Details</button>
          <button class="cart" id="adding-cart">Add to Cart</button>
            <div>
          </div>
      `;

      // Add event listener for the "Add to Cart" button
      const cartButton = productCard.querySelector('.cart');
      cartButton.addEventListener('click', () => {
          cartCount++; // Increment cart count
          updateCartCounter(); // Update cart counter display
      });

      productGrid.appendChild(productCard);
  });
} catch (error) {
  console.error('Error fetching products:', error);
}
}

// Function to update the cart counter in the navbar
function updateCartCounter() {
const counter = document.getElementById('counter');
counter.textContent = ` ${cartCount}`;
}

// Fetch and display products
fetchProducts();

// try
// await
// catch
// async
// foreach
     