document.addEventListener('DOMContentLoaded', function() {
    const swapButton = document.querySelector('.btn-swap');
    if (swapButton) {
        swapButton.addEventListener('click', function() {
            const departureInput = document.getElementById('departure');
            const arrivalInput = document.getElementById('arrival');
            
            if (departureInput && arrivalInput) {
                const temp = departureInput.value;
                departureInput.value = arrivalInput.value;
                arrivalInput.value = temp;
            }
        });
    }

    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const departure = document.getElementById('departure').value;
            const arrival = document.getElementById('arrival').value;
            const date = document.getElementById('date-departure').value;
            
            if (!departure || !arrival || !date) {
                alert('Veuillez remplir tous les champs obligatoires');
                return;
            }
            
            window.location.href = 'search-results.html';
        });
    }

    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert('Merci ! Vous êtes maintenant inscrit à notre newsletter avec l\'email : ' + email);
            this.reset();
        });
    }

    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            if (navLinks) {
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            }
        });
    }

    const today = new Date().toISOString().split('T')[0];
    const departureDateInput = document.getElementById('date-departure');
    const returnDateInput = document.getElementById('date-return');
    
    if (departureDateInput) {
        departureDateInput.setAttribute('min', today);
        departureDateInput.value = today;
    }
    
    if (returnDateInput) {
        returnDateInput.setAttribute('min', today);
    }

    if (departureDateInput && returnDateInput) {
        departureDateInput.addEventListener('change', function() {
            returnDateInput.setAttribute('min', this.value);
            if (returnDateInput.value && returnDateInput.value < this.value) {
                returnDateInput.value = this.value;
            }
        });
    }
});
