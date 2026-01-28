document.addEventListener('DOMContentLoaded', function() {
    let currentStep = 1;
    const totalSteps = 3;

    const steps = document.querySelectorAll('.booking-step');
    const progressSteps = document.querySelectorAll('.progress-step');
    const progressLines = document.querySelectorAll('.progress-line');

    const nextButtons = document.querySelectorAll('.btn-next');
    const backButtons = document.querySelectorAll('.btn-back');
    const payButton = document.querySelector('.btn-pay');

    function updateProgress() {
        steps.forEach((step, index) => {
            step.classList.remove('active');
            if (index === currentStep - 1) {
                step.classList.add('active');
            }
        });

        progressSteps.forEach((step, index) => {
            step.classList.remove('active');
            if (index < currentStep) {
                step.classList.add('active');
            }
        });

        progressLines.forEach((line, index) => {
            line.classList.remove('active');
            if (index < currentStep - 1) {
                line.classList.add('active');
            }
        });
    }

    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (currentStep < totalSteps) {
                currentStep++;
                updateProgress();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (currentStep > 1) {
                currentStep--;
                updateProgress();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    if (payButton) {
        payButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            const termsCheckbox = document.querySelector('.terms-agreement input[type="checkbox"]');
            if (!termsCheckbox.checked) {
                alert('Veuillez accepter les conditions générales de vente pour continuer.');
                return;
            }

            alert('Paiement en cours de traitement...\n\nVotre réservation a été confirmée ! Vous recevrez un email de confirmation dans quelques instants.');
            
            setTimeout(() => {
                window.location.href = 'my-bookings.html';
            }, 2000);
        });
    }

    const optionCheckboxes = document.querySelectorAll('.option-card input[type="checkbox"]');
    const totalAmountElement = document.querySelector('.total-amount');
    const optionsContainer = document.querySelector('.summary-details .options');
    
    let basePrice = 14.99;
    const optionPrices = {
        'flexible': 5.00,
        'premium-seat': 8.00,
        'extra-bag': 10.00,
        'meal': 12.00
    };

    const optionLabels = {
        'flexible': 'Billet flexible',
        'premium-seat': 'Siège premium',
        'extra-bag': 'Bagage supplémentaire',
        'meal': 'Menu à bord'
    };

    function updateTotal() {
        let total = basePrice;
        optionsContainer.innerHTML = '';

        optionCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const optionName = checkbox.name;
                const optionPrice = optionPrices[optionName];
                total += optionPrice;

                const optionElement = document.createElement('div');
                optionElement.className = 'detail-item';
                optionElement.innerHTML = `
                    <span>${optionLabels[optionName]}</span>
                    <strong>+${optionPrice.toFixed(2)}€</strong>
                `;
                optionsContainer.appendChild(optionElement);
            }
        });

        totalAmountElement.textContent = total.toFixed(2) + '€';
        
        if (payButton) {
            payButton.innerHTML = `
                <i class="fas fa-lock"></i>
                Payer ${total.toFixed(2)}€
            `;
        }
    }

    optionCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateTotal);
    });

    const cardNumberInput = document.querySelector('input[placeholder="1234 5678 9012 3456"]');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        });
    }

    const expiryInput = document.querySelector('input[placeholder="MM/AA"]');
    if (expiryInput) {
        expiryInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }
});
