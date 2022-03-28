// Кнопка Подробнее в секции "Принцип работы"
function openText(textNumber, elmnt) {
  document.getElementById(textNumber).style.display = "block";
  elmnt.style.display = "none";
}  


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




// Табы в секции clinic (кнопки абакан-красноярск)
function openPage(pageName, elmnt) {

  var i, allClinicCityContent, elmnt;

  allClinicCityContent = document.getElementsByClassName("clinic__inner");

  for (i = 0; i < allClinicCityContent.length; i++) {
    allClinicCityContent[i].style.display = "none";
  }

  document.getElementById(pageName).style.display = "block";

  //Получаем все кнопки и удаляем класс "Эктив"
  let allClinicCityButtons = document.getElementsByClassName("clinic__tab");
  for (i = 0; i < allClinicCityButtons.length; i++) {
    allClinicCityButtons[i].className = allClinicCityButtons[i].className.replace(" active", "");
  }
  // даем класс эктив нажатой кнопке
  elmnt.className += " active";
}  
// Делаем активной вкладку "Красноярск"
document.getElementById("tab--krasnoyarsk").click();







