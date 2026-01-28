document.addEventListener('DOMContentLoaded', function() {
    const bookingTabs = document.querySelectorAll('.booking-tab');
    const tabContents = document.querySelectorAll('.tab-content');

    bookingTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            bookingTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabName) {
                    content.classList.add('active');
                }
            });
        });
    });

    const viewTicketButtons = document.querySelectorAll('.btn-action.primary');
    viewTicketButtons.forEach(button => {
        if (button.textContent.includes('Voir le billet')) {
            button.addEventListener('click', function() {
                alert('Votre billet électronique sera affiché ici avec un QR code pour l\'embarquement.');
            });
        }
    });

    const downloadButtons = document.querySelectorAll('.btn-action.secondary');
    downloadButtons.forEach(button => {
        if (button.textContent.includes('Télécharger')) {
            button.addEventListener('click', function() {
                alert('Téléchargement du billet/facture en cours...');
            });
        }
    });

    const modifyButtons = document.querySelectorAll('.btn-action.secondary');
    modifyButtons.forEach(button => {
        if (button.textContent.includes('Modifier')) {
            button.addEventListener('click', function() {
                if (confirm('Voulez-vous modifier cette réservation ?')) {
                    window.location.href = 'search-results.html';
                }
            });
        }
    });

    const cancelButtons = document.querySelectorAll('.btn-action.danger');
    cancelButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (confirm('Êtes-vous sûr de vouloir annuler cette réservation ? Cette action est irréversible.')) {
                alert('Votre réservation a été annulée. Un remboursement sera effectué selon nos conditions générales.');
            }
        });
    });
});
