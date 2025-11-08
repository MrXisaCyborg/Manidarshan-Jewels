// Home Page Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Render Collections
    const collectionsGrid = document.getElementById('collectionsGrid');
    if (collectionsGrid) {
        collectionsGrid.innerHTML = collections.map(collection => `
            <div class="collection-card">
                <img src="${collection.image}" alt="${collection.name}">
                <div class="collection-overlay">
                    <h3>${collection.name}</h3>
                    <p>${collection.description}</p>
                </div>
            </div>
        `).join('');
    }

    // Render Featured Products
    const featuredProducts = document.getElementById('featuredProducts');
    if (featuredProducts) {
        const featured = appData.products.filter(p => p.featured).slice(0, 6);
        featuredProducts.innerHTML = featured.map(product => `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.imageUrl}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">${formatPrice(product.price)}</div>
                    <button class="btn btn-primary" onclick="addToCart('${product.id}')">Add to Cart</button>
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
});
