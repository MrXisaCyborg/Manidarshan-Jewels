// WhatsApp Configuration
const WHATSAPP_NUMBER = '918452957597';
const WHATSAPP_BASE_URL = 'https://wa.me/';

function createWhatsAppLink(message) {
    return `${WHATSAPP_BASE_URL}${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function inquireProduct(productName) {
    const message = `Hi, I'm interested in ${productName}. Could you provide more details?`;
    window.open(createWhatsAppLink(message), '_blank');
}

function inquireCollection(collectionName) {
    const message = `Hi, I'm interested in your ${collectionName} collection`;
    window.open(createWhatsAppLink(message), '_blank');
}

// Data Storage
const appData = {
    products: [
        {
            id: "1",
            name: "Diamond Necklace",
            category: "necklaces",
            price: 85000,
            description: "Exquisite diamond necklace with 18k gold setting",
            imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
            stock: 10,
            featured: true
        },
        {
            id: "2",
            name: "Gold Earrings",
            category: "earrings",
            price: 45000,
            description: "Beautiful 22k gold earrings with intricate design",
            imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
            stock: 15,
            featured: true
        },
        {
            id: "3",
            name: "Ruby Bracelet",
            category: "bracelets",
            price: 62000,
            description: "Stunning ruby bracelet with diamond accents",
            imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
            stock: 8,
            featured: true
        },
        {
            id: "4",
            name: "Platinum Ring",
            category: "rings",
            price: 95000,
            description: "Elegant platinum ring with solitaire diamond",
            imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
            stock: 12,
            featured: true
        },
        {
            id: "5",
            name: "Pearl Necklace",
            category: "necklaces",
            price: 38000,
            description: "Classic pearl necklace with gold clasp",
            imageUrl: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400",
            stock: 20,
            featured: true
        },
        {
            id: "6",
            name: "Emerald Pendant",
            category: "necklaces",
            price: 72000,
            description: "Gorgeous emerald pendant with gold chain",
            imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
            stock: 6,
            featured: true
        },
        {
            id: "7",
            name: "Sapphire Earrings",
            category: "earrings",
            price: 55000,
            description: "Elegant sapphire earrings with white gold",
            imageUrl: "https://images.unsplash.com/photo-1535556116002-6281ff3e9f99?w=400",
            stock: 10,
            featured: false
        },
        {
            id: "8",
            name: "Gold Bangle",
            category: "bracelets",
            price: 48000,
            description: "Traditional 22k gold bangle with engraving",
            imageUrl: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400",
            stock: 18,
            featured: false
        },
        {
            id: "9",
            name: "Rose Gold Ring",
            category: "rings",
            price: 42000,
            description: "Modern rose gold ring with diamond cluster",
            imageUrl: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400",
            stock: 14,
            featured: false
        },
        {
            id: "10",
            name: "Traditional Gold Kada",
            category: "kadas",
            price: 52000,
            description: "Handcrafted traditional 22k gold kada with intricate patterns",
            imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
            stock: 10,
            featured: true
        },
        {
            id: "11",
            name: "Diamond-studded Kada",
            category: "kadas",
            price: 88000,
            description: "Luxury kada adorned with premium diamonds and gold",
            imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
            stock: 8,
            featured: true
        },
        {
            id: "12",
            name: "Kundan Kada",
            category: "kadas",
            price: 76000,
            description: "Traditional kundan work kada with precious gemstones",
            imageUrl: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400",
            stock: 6,
            featured: false
        },
        {
            id: "13",
            name: "Pearl Kada",
            category: "kadas",
            price: 48000,
            description: "Elegant kada with lustrous pearls and gold setting",
            imageUrl: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400",
            stock: 12,
            featured: false
        },
        {
            id: "14",
            name: "Contemporary Kada",
            category: "kadas",
            price: 65000,
            description: "Modern kada design blending tradition with contemporary style",
            imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
            stock: 15,
            featured: false
        },
        {
            id: "15",
            name: "Bridal Gold Set",
            category: "sets",
            price: 185000,
            description: "Complete bridal jewelry set with necklace, earrings, and bangles",
            imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
            stock: 5,
            featured: true
        },
        {
            id: "16",
            name: "Diamond Ensemble",
            category: "sets",
            price: 225000,
            description: "Luxurious diamond set including necklace, earrings, and ring",
            imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
            stock: 3,
            featured: true
        },
        {
            id: "17",
            name: "Kundan Set",
            category: "sets",
            price: 165000,
            description: "Traditional kundan jewelry set with intricate craftsmanship",
            imageUrl: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400",
            stock: 6,
            featured: false
        },
        {
            id: "18",
            name: "Pearl & Gold Set",
            category: "sets",
            price: 95000,
            description: "Elegant pearl and gold jewelry set for special occasions",
            imageUrl: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400",
            stock: 8,
            featured: false
        },
        {
            id: "19",
            name: "Contemporary Trio",
            category: "sets",
            price: 135000,
            description: "Modern jewelry set combining contemporary and traditional elements",
            imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
            stock: 7,
            featured: false
        }
    ],
};

// Collections with Kadas
const allCollections = [
    { name: 'All', category: 'all' },
    { name: 'Necklaces', category: 'necklaces' },
    { name: 'Earrings', category: 'earrings' },
    { name: 'Bracelets', category: 'bracelets' },
    { name: 'Rings', category: 'rings' },
    { name: 'Kadas', category: 'kadas' },
    { name: 'Sets', category: 'sets' }
];

// Collections Data
const collections = [
    {
        name: "Necklaces",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600",
        description: "Elegant necklaces for every occasion"
    },
    {
        name: "Earrings",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600",
        description: "Stunning earrings to complement your style"
    },
    {
        name: "Bracelets",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600",
        description: "Exquisite bracelets and bangles"
    },
    {
        name: "Rings",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600",
        description: "Beautiful rings for special moments"
    },
    {
        name: "Kadas",
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600",
        description: "Traditional Indian kadas and bangles"
    },
    {
        name: "Sets",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600",
        description: "Complete jewelry sets for every occasion"
    }
];

// Testimonials Data
const testimonials = [
    {
        name: "Priya Sharma",
        rating: 5,
        text: "The craftsmanship is absolutely stunning. Each piece tells a story of elegance and tradition."
    },
    {
        name: "Aisha Khan",
        rating: 5,
        text: "Exceptional quality and service. My wedding jewelry was beyond my expectations."
    },
    {
        name: "Kavya Reddy",
        rating: 5,
        text: "A treasure trove of exquisite designs. Mani Darshan never disappoints."
    }
];

// Utility Functions
function formatPrice(price) {
    return '₹' + price.toLocaleString('en-IN');
}

function showAlert(message, type = 'success') {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Render Collections
    const collectionsGrid = document.getElementById('collectionsGrid');
    if (collectionsGrid) {
        collectionsGrid.innerHTML = collections.map(collection => `
            <div class="collection-card" onclick="window.location.href='products.html?collection=${collection.name.toLowerCase()}'">
                <img src="${collection.image}" alt="${collection.name}">
                <div class="collection-overlay">
                    <h3>${collection.name}</h3>
                    <p>${collection.description}</p>
                    <button class="btn btn-primary" onclick="event.stopPropagation(); window.location.href='products.html?collection=${collection.name.toLowerCase()}'" style="margin-top: 15px;">DISCOVER MORE</button>
                </div>
            </div>
        `).join('');
    }

    // Render Featured Products
    const featuredProducts = document.getElementById('featuredProducts');
    if (featuredProducts) {
        const featured = appData.products.filter(p => p.featured).slice(0, 8);
        featuredProducts.innerHTML = featured.map(product => `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.imageUrl}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">${formatPrice(product.price)}</div>
                    <button class="btn btn-primary" onclick="inquireProduct('${product.name}')">INQUIRE ON WHATSAPP</button>
                </div>
            </div>
        `).join('');
    }

    // Render Testimonials
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    if (testimonialsGrid) {
        testimonialsGrid.innerHTML = testimonials.map(testimonial => `
            <div class="testimonial-card">
                <div class="stars">
                    ${'★'.repeat(testimonial.rating)}
                </div>
                <p class="testimonial-text">"${testimonial.text}"</p>
                <div class="testimonial-author">${testimonial.name}</div>
            </div>
        `).join('');
    }
    
    // Contact form handler - Opens WhatsApp
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const name = formData.get('name') || contactForm.querySelector('input[type="text"]').value;
            const message = formData.get('message') || contactForm.querySelector('textarea').value;
            const whatsappMessage = `Customer inquiry from ${name}: ${message}`;
            window.open(createWhatsAppLink(whatsappMessage), '_blank');
            contactForm.reset();
            showAlert('Opening WhatsApp...', 'success');
        });
    }

    // Products page functionality
    const productsGrid = document.getElementById('productsGrid');
    const categoryFilter = document.getElementById('categoryFilter');
    
    if (productsGrid) {
        let currentFilter = 'all';
        
        // Get filter from URL if present
        const urlParams = new URLSearchParams(window.location.search);
        const collectionParam = urlParams.get('collection');
        if (collectionParam) {
            currentFilter = collectionParam;
            if (categoryFilter) {
                categoryFilter.value = collectionParam;
            }
        }
        
        function renderProducts(filter = 'all') {
            const filtered = filter === 'all' 
                ? appData.products 
                : appData.products.filter(p => p.category === filter);
            
            productsGrid.innerHTML = filtered.map(product => `
                <div class="product-card">
                    <div class="product-image">
                        <img src="${product.imageUrl}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <div class="product-category">${product.category}</div>
                        <h3 class="product-name">${product.name}</h3>
                        <p style="font-size: 14px; color: #666; margin-bottom: 10px;">${product.description}</p>
                        <div class="product-price">${formatPrice(product.price)}</div>
                        <button class="btn btn-primary" onclick="inquireProduct('${product.name}')">INQUIRE ON WHATSAPP</button>
                    </div>
                </div>
            `).join('');
        }
        
        renderProducts(currentFilter);
        
        if (categoryFilter) {
            categoryFilter.addEventListener('change', (e) => {
                renderProducts(e.target.value);
            });
        }
    }
});
