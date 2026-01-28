document.addEventListener('DOMContentLoaded', function() {
    const countryTabs = document.querySelectorAll('.country-tab');
    const countryContents = document.querySelectorAll('.country-content');

    countryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const country = this.getAttribute('data-country');
            
            countryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            countryContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === country) {
                    content.classList.add('active');
                }
            });
        });
    });

    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            const searchTerm = searchInput.value.toLowerCase();
            if (searchTerm) {
                console.log('Recherche:', searchTerm);
            }
        });

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }
});
