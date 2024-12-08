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





// const apiEndpoint = "https://fakestoreapi.com/products";
// let cartCount = 0;

// // Fetch and display products based on category
// async function fetchProducts(category = "all") {
//     try {
//         const response = await fetch(apiEndpoint);
//         const products = await response.json();
        
//         let filteredProducts = products;

//         // Filter products by category
//         if (category !== "all") {
//             filteredProducts = products.filter(product => product.category === category);
//         }

//         const productGrid = document.getElementById('product-grid');
//         productGrid.innerHTML = ''; // Clear previous products

//         // Display filtered products
//         filteredProducts.forEach(product => {
//             const productCard = document.createElement('div');
//             productCard.classList.add('product-card');

//             productCard.innerHTML = `
//             <div class="borderfeatch">
//                 <img class="height" src="${product.image}" alt="${product.title}">
//                 <h3>${product.title.slice(0, 15)}...</h3>
//                 <p>${product.description.slice(0, 60)}...</p>
//                 <hr>
//                 <div class="price">$${product.price}</div>
//                 <hr>
//                 <div class="addcartcenter">
//                     <button class="details">Details</button>
//                     <button class="cart">Add to Cart</button>
//                 </div>
//             </div>
//             `;

//             const cartButton = productCard.querySelector('.cart');
//             cartButton.addEventListener('click', () => {
//                 cartCount++;
//                 updateCartCounter();
//             });

//             productGrid.appendChild(productCard);
//         });
//     } catch (error) {
//         console.error('Error fetching products:', error);
//     }
// }

// // Update cart counter
// function updateCartCounter() {
//     const counter = document.querySelector('.bi-cart3 + a');
//     counter.innerHTML = `cart(${cartCount})`;
// }

// // Add event listeners for category filtering
// document.querySelectorAll('.latestpro').forEach(button => {
//     button.addEventListener('click', (event) => {
//         const categoryText = event.target.textContent.trim().toLowerCase();
//         let category = "all"; // Default to all products

//         // Map button text to category
//         if (categoryText === "mens clothing") {
//             category = "men's clothing";
//         } else if (categoryText === "womens clothing") {
//             category = "women's clothing";
//         } else if (categoryText === "jewelery") {
//             category = "jewelery";
//         } else if (categoryText === "electronics") {
//             category = "electronics";
//         }

//         // Fetch products for the selected category
//         fetchProducts(category);
//     });
// });

// // Fetch all products on page load
// fetchProducts();






// const apiEndpoint = "https://fakestoreapi.com/products";

// async function fetchElectronics() {
//     try {
//         const response = await fetch(apiEndpoint);
//         const products = await response.json();
        
//         // Filter electronics category
//         const electronicsProducts = products.filter(product => product.category === "electronics");

//         const productGrid = document.getElementById('product-grid');
//         productGrid.innerHTML = ''; // Clear previous products

//         // Display only electronics products
//         electronicsProducts.forEach(product => {
//             const productCard = document.createElement('div');
//             productCard.classList.add('product-card');

//             productCard.innerHTML = `
//             <div class="borderfeatch">
//                 <img class="height" src="${product.image}" alt="${product.title}">
//                 <h3>${product.title.slice(0, 15)}...</h3>
//                 <p>${product.description.slice(0, 60)}...</p>
//                 <hr>
//                 <div class="price">$${product.price}</div>
//                 <hr>
//                 <div class="addcartcenter">
//                     <button class="details">Details</button>
//                     <button class="cart">Add to Cart</button>
//                 </div>
//             </div>
//             `;

//             productGrid.appendChild(productCard);
//         });
//     } catch (error) {
//         console.error('Error fetching electronics:', error);
//     }
// }

// // Fetch and display electronics products on page load
// fetchElectronics();


// const apiEndpoint = "https://fakestoreapi.com/products";
// let cartCount = 0;
// let cartItems = new Set(); // Track unique products by their ID

// // Fetch and display products based on category
// async function fetchProducts(category = "all") {
//     try {
//         const response = await fetch(apiEndpoint);
//         const products = await response.json();
        
//         let filteredProducts = products;

//         // Filter products by category
//         if (category !== "all") {
//             filteredProducts = products.filter(product => product.category === category);
//         }

//         const productGrid = document.getElementById('product-grid');
//         productGrid.innerHTML = ''; // Clear previous products

//         // Display filtered products
//         filteredProducts.forEach(product => {
//             const productCard = document.createElement('div');
//             productCard.classList.add('product-card');

//             productCard.innerHTML = `
//             <div class="borderfeatch">
//                 <img class="height" src="${product.image}" alt="${product.title}">
//                 <h3>${product.title.slice(0, 15)}...</h3>
//                 <p>${product.description.slice(0, 60)}...</p>
//                 <hr>
//                 <div class="price">$${product.price}</div>
//                 <hr>
//                 <div class="addcartcenter">
//                     <button class="details">Details</button>
//                     <button class="cart">Add to Cart</button>
//                 </div>
//             </div>
//             `;

//             const cartButton = productCard.querySelector('.cart');
//             cartButton.addEventListener('click', () => {
//                 addToCart(product);
//             });

//             productGrid.appendChild(productCard);
//         });
//     } catch (error) {
//         console.error('Error fetching products:', error);
//     }
// }

// // Add product to cart
// function addToCart(product) {
//     if (cartItems.has(product.id)) {
//         alert("This product is already in your cart!");
//     } else {
//         cartItems.add(product.id);
//         cartCount++;
//         updateCartCounter();
//         alert(`${product.title} has been added to your cart.`);
//     }
// }

// // Update cart counter
// function updateCartCounter() {
//     const counter = document.querySelector('.bi-cart3 + a');
//     counter.innerHTML = `cart(${cartCount})`;
// }

// // Add event listeners for category filtering
// document.querySelectorAll('.latestpro').forEach(button => {
//     button.addEventListener('click', (event) => {
//         const categoryText = event.target.textContent.trim().toLowerCase();
//         let category = "all"; // Default to all products

//         // Map button text to category
//         if (categoryText === "mens clothing") {
//             category = "men's clothing";
//         } else if (categoryText === "womens clothing") {
//             category = "women's clothing";
//         } else if (categoryText === "jewelery") {
//             category = "jewelery";
//         } else if (categoryText === "electronics") {
//             category = "electronics";
//         }

//         // Fetch products for the selected category
//         fetchProducts(category);
//     });
// });

// // Fetch all products on page load
// fetchProducts();



const apiEndpoint = "https://fakestoreapi.com/products";
let cartCount = 0;
let cartItems = new Set(); // Track unique products by their ID

// Fetch and display products based on category
async function fetchProducts(category = "all") {
    try {
        const response = await fetch(apiEndpoint);
        const products = await response.json();
        
        let filteredProducts = products;

        // Filter products by category
        if (category !== "all") {
            filteredProducts = products.filter(product => product.category === category);
        }

        const productGrid = document.getElementById('product-grid');
        productGrid.innerHTML = ''; // Clear previous products

        // Display filtered products
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

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
                    <button class="cart">Add to Cart</button>
                </div>
            </div>
            `;

            const cartButton = productCard.querySelector('.cart');
            cartButton.addEventListener('click', () => {
                addToCart(product);
            });

            productGrid.appendChild(productCard);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Add product to cart
function addToCart(product) {
    if (cartItems.has(product.id)) {
        ("This product is already in your cart!");
    } else {
        cartItems.add(product.id);
        cartCount++;
        updateCartCounter();
        saveCartToLocalStorage(product);
        (`${product.title} has been added to your cart.`);
    }
}

// Save cart items to localStorage
function saveCartToLocalStorage(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update cart counter
function updateCartCounter() {
    const counter = document.querySelector('.bi-cart3 + a');
    counter.innerHTML = `cart(${cartCount})`;
}

// Add event listeners for category filtering
document.querySelectorAll('.latestpro').forEach(button => {
    button.addEventListener('click', (event) => {
        const categoryText = event.target.textContent.trim().toLowerCase();
        let category = "all"; // Default to all products

        // Map button text to category
        if (categoryText === "mens clothing") {
            category = "men's clothing";
        } else if (categoryText === "womens clothing") {
            category = "women's clothing";
        } else if (categoryText === "jewelery") {
            category = "jewelery";
        } else if (categoryText === "electronics") {
            category = "electronics";
        }

        // Fetch products for the selected category
        fetchProducts(category);
    });
});

// Fetch all products on page load
fetchProducts();

