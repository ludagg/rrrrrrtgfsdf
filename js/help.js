document.addEventListener('DOMContentLoaded', function() {
    const faqCategories = document.querySelectorAll('.faq-category');
    const faqCategoryContents = document.querySelectorAll('.faq-category-content');
    
    faqCategories.forEach(category => {
        category.addEventListener('click', function() {
            const categoryName = this.getAttribute('data-category');
            
            faqCategories.forEach(cat => cat.classList.remove('active'));
            this.classList.add('active');
            
            faqCategoryContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === categoryName) {
                    content.classList.add('active');
                }
            });
        });
    });

    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });

    const chatButton = document.querySelector('.btn-chat');
    if (chatButton) {
        chatButton.addEventListener('click', function() {
            alert('Le chat en direct sera bientôt disponible. Pour le moment, contactez-nous par téléphone ou email.');
        });
    }
});
