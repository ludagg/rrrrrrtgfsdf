document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.account-nav-item');
    const sections = document.querySelectorAll('.account-section');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (this.classList.contains('logout')) {
                if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
                    alert('Déconnexion réussie !');
                    window.location.href = 'index.html';
                }
                return;
            }

            const sectionName = this.getAttribute('data-section');
            
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === sectionName) {
                    section.classList.add('active');
                }
            });
        });
    });

    const accountForm = document.querySelector('.account-form');
    if (accountForm) {
        accountForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Vos informations ont été mises à jour avec succès !');
        });
    }

    const securityForm = document.querySelector('.security-form');
    if (securityForm) {
        securityForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (newPassword !== confirmPassword) {
                alert('Les mots de passe ne correspondent pas !');
                return;
            }
            
            alert('Votre mot de passe a été modifié avec succès !');
            this.reset();
        });
    }

    const addPaymentBtn = document.querySelector('.add-payment-btn');
    if (addPaymentBtn) {
        addPaymentBtn.addEventListener('click', function() {
            alert('Ajout d\'une nouvelle carte bancaire en cours...');
        });
    }

    const deleteCardButtons = document.querySelectorAll('.btn-card-action');
    deleteCardButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (confirm('Êtes-vous sûr de vouloir supprimer cette carte ?')) {
                this.closest('.payment-card').remove();
            }
        });
    });

    const enable2FABtn = document.querySelector('.btn-enable');
    if (enable2FABtn) {
        enable2FABtn.addEventListener('click', function() {
            alert('L\'authentification à deux facteurs sera activée. Vous recevrez un code par SMS.');
        });
    }

    const deleteAccountBtn = document.querySelector('.btn-danger');
    if (deleteAccountBtn) {
        deleteAccountBtn.addEventListener('click', function() {
            const confirmation = confirm('ATTENTION : Cette action est irréversible. Voulez-vous vraiment supprimer votre compte ?');
            if (confirmation) {
                const doubleConfirmation = confirm('Êtes-vous absolument certain ? Toutes vos données seront perdues.');
                if (doubleConfirmation) {
                    alert('Votre compte a été supprimé.');
                    window.location.href = 'index.html';
                }
            }
        });
    }
});
