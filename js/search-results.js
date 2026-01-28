document.addEventListener('DOMContentLoaded', function() {
    const priceRange = document.querySelector('.price-range');
    const maxPriceDisplay = document.getElementById('max-price');
    
    if (priceRange && maxPriceDisplay) {
        priceRange.addEventListener('input', function() {
            maxPriceDisplay.textContent = this.value;
        });
    }

    const selectButtons = document.querySelectorAll('.btn-select');
    selectButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'booking.html';
        });
    });

    const resetFiltersBtn = document.querySelector('.btn-reset-filters');
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', function() {
            const checkboxes = document.querySelectorAll('.filters-sidebar input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
            if (priceRange) {
                priceRange.value = 50;
                maxPriceDisplay.textContent = '50';
            }
        });
    }

    const sortSelect = document.querySelector('.sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            console.log('Tri par:', this.value);
        });
    }
});
