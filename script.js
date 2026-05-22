
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
    },
    // Yangi kategoriyalar
    {
        id: 13,
        name: "Samsung 4K TV",
        category: "savdo",
        price: 8500000,
        description: "55 inch 4K QLED TV, smart o'yinlari",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300&h=300&fit=crop",
        rating: 4.7
    },
    {
        id: 14,
        name: "Refrigerator LG",
        category: "savdo",
        price: 4200000,
        description: "Side-by-side, 650L hajmi, energy efficient",
        image: "https://images.unsplash.com/photo-1584622281191-c5433f60d4f0?w=300&h=300&fit=crop",
        rating: 4.8
    },
    {
        id: 15,
        name: "Washing Machine",
        category: "savdo",
        price: 2800000,
        description: "Avtomatik, 8kg, turbo wash",
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop",
        rating: 4.5
    },
    {
        id: 16,
        name: "Sumka Dior",
        category: "fashion",
        price: 3500000,
        description: "Asliy Dior sumi, premium qora",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=300&fit=crop",
        rating: 4.9
    },
    {
        id: 17,
        name: "Adidas Bag",
        category: "fashion",
        price: 450000,
        description: "Ruksak, oq rangi, sport uchun",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
        rating: 4.4
    },
    {
        id: 18,
        name: "Chiroyli Soat",
        category: "aksessuarlar",
        price: 1200000,
        description: "Erkaklar uchun klassik soat",
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=300&h=300&fit=crop",
        rating: 4.8
    },
    {
        id: 19,
        name: "Gold Halka",
        category: "aksessuarlar",
        price: 2500000,
        description: "18 karat, elliptik shakli",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop",
        rating: 5
    },
    {
        id: 20,
        name: "Paqetsi Shampun",
        category: "kosmetika",
        price: 89000,
        description: "Tabiiy buyumlar bilan, 500ml",
        image: "https://images.unsplash.com/photo-1585538326733-dfe971a1c063?w=300&h=300&fit=crop",
        rating: 4.6
    },
    {
        id: 21,
        name: "Skin Cream",
        category: "kosmetika",
        price: 250000,
        description: "Anti-aging, hydrating cream",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop",
        rating: 4.7
    }
];

// Global Variables
let cart = [];
let filteredProducts = [...products];
let currentCategory = 'all';
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

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
        currentUser.isLoggedIn = true;
        showNotification('✅ Muvaffaqiyatli kirildi!');
        toggleAuth();
        updateProfileInfo();
    });

    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = e.target.querySelector('input[type="text"]').value;
        const email = e.target.querySelector('input[type="email"]').value;
        currentUser.name = name;
        currentUser.email = email;
        currentUser.isLoggedIn = true;
        showNotification('✅ Ro\'yxatdan muvaffaqiyatli o\'tdingiz!');
        toggleAuth();
        updateProfileInfo();
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
                    <button class="wishlist-btn ${wishlist.includes(product.id) ? 'active' : ''}" onclick="toggleWishlist(${product.id})" title="Sevimlilar">♥</button>
                    <button class="share-btn" onclick="shareProduct(${product.id})">📤 Ulashish</button>
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
    const finalTotal = Math.max(0, total - discountAmount);
    
    if (discountAmount > 0) {
        const discountDisplay = document.getElementById('discountDisplay');
        discountDisplay.innerHTML = `
            <div style="color: var(--accent-color); font-weight: 600; margin-bottom: 10px; text-align: center;">
                -${discountAmount.toLocaleString('uz-UZ')} so'm chegirma ✅
            </div>
        `;
    }
    
    totalPrice.textContent = finalTotal.toLocaleString('uz-UZ') + ' so\'m';
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

// Profile Functions
let currentUser = {
    name: 'Abdullayev Ali',
    email: 'ali@example.com',
    isLoggedIn: false
};

function toggleProfile() {
    if (!currentUser.isLoggedIn) {
        toggleAuth();
        return;
    }
    document.getElementById('profileModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    updateProfileInfo();
}

function closeProfile() {
    document.getElementById('profileModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function updateProfileInfo() {
    document.getElementById('profileName').textContent = currentUser.name;
    document.getElementById('profileEmail').textContent = currentUser.email;
}

function switchProfileTab(tab) {
    document.querySelectorAll('.profile-tab').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.profile-section').forEach(section => {
        section.classList.remove('active');
    });

    event.target.classList.add('active');
    document.getElementById(tab + 'Tab').classList.add('active');
}

function addAddress() {
    showNotification('Manzil qo\'shish formasi tez orada!');
}

function logout() {
    currentUser.isLoggedIn = false;
    closeProfile();
    showNotification('Xayr, shunga o\'tkazdik!');
}

// Admin Functions (Demo password: admin123)
function toggleAdmin(password) {
    const pwd = prompt('Admin parolini kiriting:');
    if (pwd === 'admin123') {
        document.getElementById('adminModal').classList.add('active');
        document.body.style.overflow = 'hidden';
    } else if (pwd !== null) {
        showNotification('Parol noto\'g\'ri!', 'error');
    }
}

function closeAdmin() {
    document.getElementById('adminModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function switchAdmin(tab) {
    document.querySelectorAll('.admin-nav-item').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.admin-tab').forEach(section => {
        section.classList.remove('active');
    });

    event.target.classList.add('active');
    document.getElementById(tab + 'Tab').classList.add('active');
}

function addProduct() {
    showNotification('Yangi mahsulot qo\'shish formasi tez orada!');
}

// Performance Optimization
const imageCache = new Map();
let scrollTimeout;

function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Debounce scroll events
function optimizeScrolling() {
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(() => {
            // Performance-critical scroll code here
        });
    }, { passive: true });
}

// Cache products locally
function cacheProducts() {
    localStorage.setItem('productsCache', JSON.stringify({
        data: products,
        timestamp: Date.now()
    }));
}

function getCachedProducts() {
    const cached = localStorage.getItem('productsCache');
    if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        // Cache valid for 1 hour
        if (Date.now() - timestamp < 3600000) {
            return data;
        }
    }
    return null;
}

// Minify animations
document.addEventListener('DOMContentLoaded', () => {
    if (!getCachedProducts()) {
        cacheProducts();
    }
    lazyLoadImages();
    optimizeScrolling();
});

// Dark Mode
let isDarkMode = localStorage.getItem('darkMode') === 'true';

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    applyDarkMode();
}

function applyDarkMode() {
    const root = document.documentElement;
    const btn = document.querySelector('.theme-btn');
    
    if (isDarkMode) {
        root.style.setProperty('--light-bg', '#1a1a1a');
        root.style.setProperty('--text-dark', '#ffffff');
        root.style.setProperty('--text-light', '#b0b0b0');
        root.style.setProperty('--border-color', '#333333');
        document.body.style.background = '#0d0d0d';
        btn.textContent = '☀️';
        btn.style.background = 'rgba(255, 255, 255, 0.2)';
    } else {
        root.style.setProperty('--light-bg', '#f0f4ff');
        root.style.setProperty('--text-dark', '#1a2332');
        root.style.setProperty('--text-light', '#687588');
        root.style.setProperty('--border-color', '#d0d9f7');
        document.body.style.background = '#ffffff';
        btn.textContent = '🌙';
        btn.style.background = '';
    }
    
    showNotification(isDarkMode ? '🌙 Dark mode yondi' : '☀️ Light mode yondi');
}

// Apply dark mode on load
window.addEventListener('load', () => {
    if (isDarkMode) applyDarkMode();
});

// Multilingual Translations
const translations = {
    uz: {
        'search-placeholder': 'Mahsulot qidirish...',
        'hero-title': 'Xush kelibsiz ShohMarket ga!',
        'hero-subtitle': 'Eng yaxshi narxlarda sifatli mahsulotlar',
        'shop-btn': 'Xarid boshlash',
        'categories': 'Kategoriyalar',
        'products': 'Bizning Mahsulotlar',
        'sort': 'Saralash:',
        'cart': 'Xarid Savatchasi',
        'checkout': 'Buyurtma berish',
        'about': 'Biz haqida',
        'contact': 'Aloqa',
        'add-to-cart': 'Savatchaga qo\'sh'
    },
    ru: {
        'search-placeholder': 'Поиск товаров...',
        'hero-title': 'Добро пожаловать на ShohMarket!',
        'hero-subtitle': 'Качественные товары по лучшим ценам',
        'shop-btn': 'Начать покупки',
        'categories': 'Категории',
        'products': 'Наши товары',
        'sort': 'Сортировка:',
        'cart': 'Корзина',
        'checkout': 'Оформить заказ',
        'about': 'О нас',
        'contact': 'Контакты',
        'add-to-cart': 'В корзину'
    },
    en: {
        'search-placeholder': 'Search products...',
        'hero-title': 'Welcome to ShohMarket!',
        'hero-subtitle': 'Quality products at the best prices',
        'shop-btn': 'Start Shopping',
        'categories': 'Categories',
        'products': 'Our Products',
        'sort': 'Sort:',
        'cart': 'Shopping Cart',
        'checkout': 'Checkout',
        'about': 'About Us',
        'contact': 'Contact',
        'add-to-cart': 'Add to Cart'
    }
};

let currentLanguage = localStorage.getItem('language') || 'uz';

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateLanguage();
    showNotification(`🌍 Til o'zgartirildi: ${lang.toUpperCase()}`);
}

function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        const translation = translations[currentLanguage];
        if (translation && translation[key]) {
            if (element.tagName === 'INPUT') {
                element.placeholder = translation[key];
            } else {
                element.textContent = translation[key];
            }
        }
    });
}

// Apply language on load
window.addEventListener('load', () => {
    document.getElementById('languageSelect').value = currentLanguage;
    updateLanguage();
});

// Wishlist Functions
function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showNotification('❌ Sevimlilardan olib tashlandi');
    } else {
        wishlist.push(productId);
        showNotification('❤️ Sevimlilarni qo\'shildi!');
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    displayProducts(filteredProducts);
}

function showWishlist() {
    const wishlistProducts = products.filter(p => wishlist.includes(p.id));
    if (wishlistProducts.length === 0) {
        showNotification('Sevimli mahsulotlar yo\'q', 'error');
        return;
    }
    displayProducts(wishlistProducts);
    showNotification(`❤️ ${wishlistProducts.length} ta sevimli mahsulot ko'rsatildi`);
}

// Coupon System
const coupons = {
    'FIRST50': { discount: 50000, type: 'fixed', desc: '50,000 so\'m chegirma' },
    'SALE20': { discount: 20, type: 'percent', desc: '20% chegirma' },
    'SUMMER10': { discount: 10, type: 'percent', desc: '10% chegirma' },
    'VIP100': { discount: 100000, type: 'fixed', desc: '100,000 so\'m chegirma' }
};

let appliedCoupon = null;
let discountAmount = 0;

function applyCoupon() {
    const couponCode = document.getElementById('couponInput').value.toUpperCase().trim();
    
    if (!couponCode) {
        showNotification('Kupon kodini kiriting!', 'error');
        return;
    }
    
    if (coupons[couponCode]) {
        appliedCoupon = couponCode;
        const coupon = coupons[couponCode];
        
        if (coupon.type === 'percent') {
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            discountAmount = Math.floor(total * (coupon.discount / 100));
        } else {
            discountAmount = coupon.discount;
        }
        
        showNotification(`✅ "${couponCode}" qo'llandi! ${coupon.desc}`);
        updateCartUI();
    } else {
        showNotification('Kupon kodi noto\'g\'ri!', 'error');
        appliedCoupon = null;
        discountAmount = 0;
    }
}

// Newsletter Subscription
let subscribers = JSON.parse(localStorage.getItem('subscribers')) || [];

function subscribeNewsletter() {
    const email = document.getElementById('newsletterEmail').value.trim();
    
    if (!email || !email.includes('@')) {
        showNotification('To\'g\'ri email kiriting!', 'error');
        return;
    }
    
    if (subscribers.includes(email)) {
        showNotification('✓ Siz allaqachon obuna bo\'lgansiz!');
        return;
    }
    
    subscribers.push(email);
    localStorage.setItem('subscribers', JSON.stringify(subscribers));
    document.getElementById('newsletterEmail').value = '';
    showNotification('✅ Yangiliklarga obuna bo\'ldingiz! Email orqali yangiliklar olasiz.');
}

// Advanced Price Filter
function filterByPrice() {
    const priceRange = document.getElementById('priceRange').value;
    const priceValue = document.getElementById('priceValue');
    priceValue.textContent = `0 - ${parseInt(priceRange).toLocaleString('uz-UZ')} so'm`;
    
    filteredProducts = products.filter(p => p.price <= priceRange);
    if (currentCategory !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === currentCategory);
    }
    displayProducts(filteredProducts);
}

// Social Sharing
function shareProduct(productId) {
    const product = products.find(p => p.id === productId);
    const text = `${product.name} - ${product.price.toLocaleString('uz-UZ')} so'm | ShohMarket`;
    const url = window.location.href;
    
    const shareOptions = {
        'telegram': `https://t.me/share/url?url=${url}&text=${text}`,
        'facebook': `https://facebook.com/sharer/sharer.php?u=${url}`,
        'whatsapp': `https://wa.me/?text=${text}`,
        'twitter': `https://twitter.com/intent/tweet?url=${url}&text=${text}`
    };
    
    showNotification('📤 Ulashish linklar nusxalandi!');
    console.log('Share links:', shareOptions);
}

// Product Comparison
let compareList = [];

function addToCompare(productId) {
    if (compareList.length >= 3) {
        showNotification('Maksimum 3 ta mahsulot solishtirish mumkin!', 'error');
        return;
    }
    if (!compareList.includes(productId)) {
        compareList.push(productId);
        showNotification('✅ Solishtirishga qo\'shildi!');
    }
}

function compareProducts() {
    if (compareList.length === 0) {
        showNotification('Solishtirishga mahsulot qo\'shing!', 'error');
        return;
    }
    const comparedProducts = products.filter(p => compareList.includes(p.id));
    console.log('Comparing products:', comparedProducts);
    showNotification(`📊 ${compareList.length} ta mahsulot solishtirish uchun tayyoq!`);
}