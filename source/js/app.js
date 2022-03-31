// Кнопка Подробнее в секции "Принцип работы"
$(".principle__more").on("click", function(event) {
  $(this).toggleClass("active");
  $(this).siblings('.principle__desc').toggleClass("active"); // siblings - соседний элемент
})

// Кнопки в FAQ
$(".faq__title").on("click", function() {
  $(this).toggleClass("active");
  $(this).siblings('.faq__panel').toggleClass("active"); // siblings - соседний элемент
})

// Маска для набора номера телефона
$("#feedbacktel").mask("+7(999) 999-9999");



// // Табы в секции clinic (кнопки абакан-красноярск)
// function openPage(pageName, elmnt) {

//   var i, allClinicCityContent, elmnt;
//   allClinicCityContent = document.getElementsByClassName("clinic__inner");

//   for (i = 0; i < allClinicCityContent.length; i++) {
//     allClinicCityContent[i].style.display = "none";
//   }

//   document.getElementById(pageName).style.display = "block";

//   //Получаем все кнопки и удаляем класс "Эктив"
//   let allClinicCityButtons = document.getElementsByClassName("clinic__tab");
//   for (i = 0; i < allClinicCityButtons.length; i++) {
//     allClinicCityButtons[i].className = allClinicCityButtons[i].className.replace(" active", "");
//   }
//   // даем класс эктив нажатой кнопке
//   elmnt.className += " active";
// }
// // Делаем активной вкладку "Красноярск"
// document.getElementById("tab--krasnoyarsk").click();


// Табы в секции clinic (кнопки абакан-красноярск)
function openPage(pageName, elmnt) {

  var i, allClinicCityContent, elmnt;
  allClinicCityContent = document.getElementsByClassName("clinic__inner");

  for (i = 0; i < allClinicCityContent.length; i++) {
    allClinicCityContent[i].style.visibility = "hidden";
    allClinicCityContent[i].style.height = "0";
  }

  document.getElementById(pageName).style.visibility = "visible";
  document.getElementById(pageName).style.height = "auto";

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



// Кнопка выбора опции (тело-лицо)
let operationButton = document.querySelector(".operation__select");
let operationButtonText = document.querySelector(".operation__select-label");
let operationSorter = document.querySelector(".operation__sorter");

const NODES = ["BUTTON", "LABEL"];

window.addEventListener("click", e => {
  if (NODES.includes(e.target.nodeName)) return;
  operationButton.classList.remove("active");
});

operationButton.addEventListener("click", e => {
  operationButton.classList.toggle("active");
});

operationSorter.addEventListener("click", e => {
  operationButtonText.innerText = e.target.innerText;
  operationButton.classList.add("selected");
  operationButton.classList.remove("active");
});


$(document).ready(function(){
  $(".operation__sorter-item").click(function(){
    var value = $(this).attr("data-filter");
    var elem = $(".operations__slide");
    if(value == "all"){
      $(elem).show("500");
    }
    else{
      $(elem).not("."+value).hide("500");
      $(elem).filter("."+value).show("500");
    }
  });
})


// Плавная прокрутка до элемента
$("[data-scroll]").on("click", function(event) {
  event.preventDefault();

  var $this = $(this),
    blockId = $this.data('scroll'),
    blockOffset = $(blockId).offset().top;

  $("#nav a").removeClass("active");
  $this.addClass("active");


  $("html, body").animate({
    scrollTop: blockOffset -30 // отступ
  }, 500);
});
