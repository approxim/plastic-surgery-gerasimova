// Кнопки в FAQ
const faqButtons = document.querySelectorAll(".faq__title");

for (i = 0; i < faqButtons.length; i++) {
    faqButtons[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let faqPanel = this.nextElementSibling;
        if (faqPanel.style.display === "block") {
            faqPanel.style.display = "none";
        } else {
            faqPanel.style.display = "block";
        }
    });
}

// Маска для набора номера телефона
$("#feedbacktel").mask("+7(999) 999-9999");
