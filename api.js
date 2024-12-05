// const apiEndpoint = "https://fakestoreapi.com/products"; 
// async function fetchProducts() {
// try {
//   const response = await fetch(apiEndpoint);
//   const products = await response.json();
//   const productGrid = document.getElementById('product-grid');
//   productGrid.innerHTML = '';
//   products.forEach(product => {
//       const productCard = document.createElement('div');
//       productCard.classList.add('product-card');

//       productCard.innerHTML = `
//       <div class="borderfeatch">
//           <img class="height" src="${product.image}" alt="${product.title}">
//           <h3>${product.title.slice(0, 15)}...</h3>
//           <p>${product.description.slice(0, 60)}...</p>
//           <hr>
//           <div class="price">$${product.price}</div>
//           <hr>
//           <div class="addcartcenter">
//           <button class="details">Details</button>
//           <button class="cart" id="adding-cart">Add to Cart</button>
//             <div>
//           </div>
//       `;

//           const cartButton = productCard.querySelector('.cart');
//       cartButton.addEventListener('click', () => {
//           cartCount++;
//           updateCartCounter(); 
//       });

//       productGrid.appendChild(productCard);
//   });
// } catch (error) {
//   console.error('Error fetching products:', error);
// }
// }
// function updateCartCounter() {
// const counter = document.getElementById('counter');
// counter.textContent = ` ${cartCount}`;
// }
// fetchProducts();




// 222222222222222222222222

const apiEndpoint = "https://fakestoreapi.com/products";
let cartCount = 0; // Keeps track of the number of items in the cart
let cartItems = []; // Stores added cart items

// Fetch products by category
async function fetchProductsByCategory(category) {
    try {
        const response = await fetch(apiEndpoint);
        const products = await response.json();

        // Filter products based on the selected category
        const filteredProducts = products.filter(product =>
            category === 'all' || product.category.toLowerCase().includes(category)
        );

        displayProducts(filteredProducts);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

// Display products dynamically
function displayProducts(products) {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = ''; // Clear existing products

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

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
                    <button class="cart" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}">Add to Cart</button>
                </div>
            </div>
        `;

        productGrid.appendChild(productCard);
    });

    // Add event listeners for "Add to Cart" buttons
    const cartButtons = document.querySelectorAll(".cart");
    cartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const productId = button.getAttribute("data-id");
            const productTitle = button.getAttribute("data-title");
            const productPrice = button.getAttribute("data-price");

            addToCart({ id: productId, title: productTitle, price: parseFloat(productPrice) });
        });
    });
}

// Add product to the cart
function addToCart(product) {
    // Check if the product is already in the cart
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
        alert(`${product.title} is already in the cart!`);
        return;
    }

    // Add product to cart and update counter
    cartItems.push(product);
    cartCount++;
    updateCartCounter();
    (`${product.title} has been added to the cart!`);
}

// Update cart counter in the header
function updateCartCounter() {
    const cartCounter = document.getElementById("caradding");
    cartCounter.textContent = `(${cartCount})`;
}
fetchProductsByCategory("all");

// 22222222222222222222222



