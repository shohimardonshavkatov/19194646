
// Products Data with Real Images
const products = [
    {
        id: 1,
        name: "Samsung Galaxy A12",
        category: "elektronika",
        price: 2500000,
        description: "Kuchli processsor, 6.5\" displey",
        image: "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=300&h=300&fit=crop",
        rating: 4.5
    },
    {
        id: 2,
        name: "MacBook Pro 14\"",
        category: "elektronika",
        price: 15000000,
        description: "M2 Pro, 16GB RAM, 512GB SSD",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop",
        rating: 5
    },
    {
        id: 3,
        name: "Sony WH-1000XM4",
        category: "elektronika",
        price: 3500000,
        description: "Shumsiz quloqchinalar, 30 soat batareya",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
        rating: 4.8
    },
    {
        id: 4,
        name: "Nike Air Max 90",
        category: "sport",
        price: 800000,
        description: "Klassik sport oyoqqabalar",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
        rating: 4.6
    },
    {
        id: 5,
        name: "Adidas Ultraboost",
        category: "sport",
        price: 1200000,
        description: "Zamonaviy running oyoqqabalar",
        image: "https://images.unsplash.com/photo-1542062407-6cecb6d80f67?w=300&h=300&fit=crop",
        rating: 4.7
    },
    {
        id: 6,
        name: "Winter Jacket",
        category: "kiyim",
        price: 1500000,
        description: "Issiq va nozik qishlоq kiyimi",
        image: "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=300&h=300&fit=crop",
        rating: 4.4
    },
    {
        id: 7,
        name: "Premium Denim Jeans",
        category: "kiyim",
        price: 450000,
        description: "Yuqori sifatli jeans",
        image: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=300&h=300&fit=crop",
        rating: 4.3
    },
    {
        id: 8,
        name: "Cashew Nuts",
        category: "oziqvand",
        price: 180000,
        description: "Organik cashew yanger, 500g",
        image: "https://images.unsplash.com/photo-1585518419759-eed79d5bc3bd?w=300&h=300&fit=crop",
        rating: 4.9
    },
    {
        id: 9,
        name: "Honey Premium",
        category: "oziqvand",
        price: 120000,
        description: "Tabiiy oziq mal asal, 800g",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd64b73?w=300&h=300&fit=crop",
        rating: 4.8
    },
    {
        id: 10,
        name: "Uzbek Novel",
        category: "kitoblar",
        price: 35000,
        description: "O'zbek adabiyoti klassikasi",
        image: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=300&h=300&fit=crop",
        rating: 4.5
    },
    {
        id: 11,
        name: "Programming Guide",
        category: "kitoblar",
        price: 95000,
        description: "JavaScript va Python for beginners",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=300&fit=crop",
        rating: 4.7
    },
    {
        id: 12,
        name: "Yoga Mat",
        category: "sport",
        price: 250000,
        description: "6mm sports yoga mata",
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300&h=300&fit=crop",
        rating: 4.6
    }
];

// Global Variables
let cart = [];
let filteredProducts = [...products];
let currentCategory = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    displayProducts(products);
    setupEventListeners();
    setupReviewModal();
});

// Setup Event Listeners
function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', (e) => {
        searchProducts(e.target.value);
    });

    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Muvaffaqiyatli kirildi!');
        toggleAuth();
    });

    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Ro\'yxatdan muvaffaqiyatli o\'tdingiz!');
        toggleAuth();
    });
}

// Display Products
function displayProducts(productsToDisplay) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    if (productsToDisplay.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #7f8c8d;">Mahsulot topilmadi</p>';
        return;
    }

    productsToDisplay.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/300x200?text=${encodeURIComponent(product.name)}'">
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-rating">
                    <span class="stars">${'⭐'.repeat(Math.floor(product.rating))}</span>
                    <span class="rating-value">${product.rating}</span>
                    <span class="review-count">(${Math.floor(Math.random() * 200) + 5} sharh)</span>
                </div>
                <div class="product-price">${product.price.toLocaleString('uz-UZ')} so'm</div>
                <div class="product-actions">
                    <button class="add-to-cart" onclick="addToCart(${product.id})">Savatchaga qo'sh</button>
                    <button class="review-btn" onclick="openReview(${product.id})">Sharh qoldirish</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filter by Category
function filterCategory(category) {
    currentCategory = category;
    
    // Update active button
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    if (category === 'all') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(p => p.category === category);
    }
    displayProducts(filteredProducts);
}

// Search Products
function searchProducts(query) {
    const searchQuery = query.toLowerCase();
    const results = products.filter(p => 
        p.name.toLowerCase().includes(searchQuery) ||
        p.description.toLowerCase().includes(searchQuery)
    );
    displayProducts(results);
}

// Sort Products
function sortProducts() {
    const sortValue = document.getElementById('sortSelect').value;
    let sorted = [...filteredProducts];

    switch(sortValue) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sorted.sort((a, b) => a.name.localeCompare(b.name, 'uz'));
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        default:
            sorted = [...filteredProducts];
    }
    displayProducts(sorted);
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showNotification(`${product.name} savatchaga qo'shildi!`);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

// Update Quantity
function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, quantity);
        saveCart();
        updateCartUI();
    }
}

// Update Cart UI
function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const totalPrice = document.getElementById('totalPrice');

    cartCount.textContent = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Savatchа bo\'sh</p>';
        totalPrice.textContent = '0 so\'m';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/80'">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price.toLocaleString('uz-UZ')} so'm</div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">Olib tashlash</button>
                </div>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPrice.textContent = total.toLocaleString('uz-UZ') + ' so\'m';
}

// Toggle Cart
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    sidebar.classList.toggle('active');
}

// Toggle Auth Modal
function toggleAuth() {
    const modal = document.getElementById('authModal');
    modal.classList.toggle('active');
    if (modal.classList.contains('active')) {
        switchTab('login');
    }
}

// Switch Auth Tab
function switchTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.auth-form').forEach(form => {
        form.classList.remove('active');
    });

    if (tab === 'login') {
        document.querySelector('.auth-tab:nth-child(1)').classList.add('active');
        document.getElementById('loginForm').classList.add('active');
    } else {
        document.querySelector('.auth-tab:nth-child(2)').classList.add('active');
        document.getElementById('registerForm').classList.add('active');
    }
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        showNotification('Savatchа bo\'sh!', 'error');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    alert(`Buyurtma tasdiqlandi!\n\nJami: ${total.toLocaleString('uz-UZ')} so'm\n\nTashkrent shahar atrofiga bepul yetkazib berish.`);
    
    cart = [];
    saveCart();
    updateCartUI();
    toggleCart();
    showNotification('Buyurtma muvaffaqiyatli qabul qilindi!');
}

// Save Cart to Local Storage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load Cart from Local Storage
function loadCart() {
    const saved = localStorage.getItem('cart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartUI();
    }
}

 
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}


function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Payment Modal Functions
function openPaymentModal() {
    if (cart.length === 0) {
        showNotification('Savatchа bo\'sh!', 'error');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('paymentAmount').textContent = total.toLocaleString('uz-UZ') + ' so\'m';
    document.getElementById('paymentModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePayment() {
    document.getElementById('paymentModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function selectPayment(method) {
    document.querySelectorAll('.payment-method').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.payment-option').forEach(opt => {
        opt.classList.remove('active');
    });

    event.target.classList.add('active');
    
    if (method === 'card') {
        document.getElementById('cardPayment').classList.add('active');
    } else if (method === 'mobile') {
        document.getElementById('mobilePayment').classList.add('active');
    } else if (method === 'transfer') {
        document.getElementById('transferPayment').classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const paymentForm = document.getElementById('paymentForm');
    if (paymentForm) {
        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const method = document.querySelector('.payment-method.active').textContent.split('\n')[0];
            
            alert(`✅ To'lov muvaffaqiyatli amalga oshirildi!\n\nMi'yod: ${method}\nJami: ${total.toLocaleString('uz-UZ')} so'm\n\nRahmat, ShohMarket dan xarid qilganingiz uchun!`);
            
            cart = [];
            saveCart();
            updateCartUI();
            closePayment();
            toggleCart();
            showNotification('Buyurtma tayyorlanmoqda - 1-2 kun ichida yetkazib beriladi!');
        });
    }
});

// Review Functions
function openReview(productId) {
    const product = products.find(p => p.id === productId);
    document.getElementById('reviewModal').classList.add('active');
    document.getElementById('reviewModal').dataset.productId = productId;
    document.body.style.overflow = 'hidden';
}

function closeReview() {
    document.getElementById('reviewModal').classList.remove('active');
    document.body.style.overflow = 'auto';
    document.getElementById('reviewForm').reset();
}

function setRating(value) {
    const stars = document.querySelectorAll('.star-rating .star');
    stars.forEach((star, index) => {
        if (index < value) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
    document.getElementById('ratingValue').value = value;
}

function setupReviewModal() {
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const productId = document.getElementById('reviewModal').dataset.productId;
            const rating = document.getElementById('ratingValue').value;
            const text = document.getElementById('reviewText').value;
            const author = e.target.querySelector('input[type="text"]').value;
            
            showNotification(`✅ "${author}" ning sharhi qabul qilindi! Rahmat!`);
            closeReview();
        });
    }
}