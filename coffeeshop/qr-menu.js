// QR Menu JavaScript
document.addEventListener('DOMContentLoaded', () => {
    loadQRMenu();
    generateQRCode();
});

function loadQRMenu() {
    const categories = getMenuCategories();
    const items = getMenuItems();
    const container = document.getElementById('qrMenuContainer');
    
    container.innerHTML = '';
    
    categories.forEach(category => {
        const categoryItems = items.filter(item => item.category === category.id);
        
        if (categoryItems.length === 0) return;
        
        const categorySection = document.createElement('div');
        categorySection.className = 'menu-category';
        
        const itemsHTML = categoryItems.map(item => `
            <div class="menu-item-card ${!item.available ? 'menu-item-unavailable' : ''}">
                <div class="menu-item-details">
                    <div class="menu-item-title">${item.name}</div>
                    ${item.description ? `<div class="menu-item-description">${item.description}</div>` : ''}
                </div>
                <div class="menu-item-price-tag">${formatCurrency(item.price)}</div>
            </div>
        `).join('');
        
        categorySection.innerHTML = `
            <div class="category-header">
                <div class="category-icon">${category.icon}</div>
                <div class="category-title">${category.name}</div>
            </div>
            <div class="menu-items-list">
                ${itemsHTML}
            </div>
        `;
        
        container.appendChild(categorySection);
    });
}

function generateQRCode() {
    const qrContainer = document.getElementById('qrCode');
    const qrUrlEl = document.getElementById('qrCodeUrl');
    if (!qrContainer || typeof QRCode === 'undefined') return;

    const menuUrl = window.location.href;
    qrContainer.innerHTML = '';

    new QRCode(qrContainer, {
        text: menuUrl,
        width: 180,
        height: 180,
        colorDark: '#3E2723',
        colorLight: '#FFFFFF',
        correctLevel: QRCode.CorrectLevel.H
    });

    if (qrUrlEl) {
        qrUrlEl.textContent = menuUrl;
    }
}
