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
document.querySelector(".clinic__sorter-item").click();


// Табы в модальном окне Operations (Result)
function openResult(pageName, elmnt) {

    var i, modalSliderResult, elmnt;
    modalSliderResult = document.getElementsByClassName("modal-result__slides");

    for (i = 0; i < modalSliderResult.length; i++) {
        modalSliderResult[i].style.visibility = "hidden";
        modalSliderResult[i].style.height = "0";
    }

    document.getElementById(pageName).style.visibility = "visible";
    document.getElementById(pageName).style.height = "auto";

    //Получаем все кнопки и удаляем класс "Эктив"
    let allResultButtons = document.getElementsByClassName("modal-result__tab");
    for (i = 0; i < allResultButtons.length; i++) {
        allResultButtons[i].className = allResultButtons[i].className.replace(" active", "");
    }
    // даем класс эктив нажатой кнопке
    elmnt.className += " active";


    // Кастомная реализация lazy load
    let imageSet = document.querySelectorAll("#" + pageName + " img");
    $(imageSet).each(function () {
        $(this).attr('srcset', $(this).data('lazy-srcset'));
    });
}
// Кликаем по кнопке слайдера Result
document.querySelector("modal-result__tab")



// отображение элементов Операции (тело-лицо)
$(document).ready(function () {
    $('.operation__sorter-item').on('click', function () {
        var value = $(this).attr("data-filter");

        if (window.innerWidth > 767) {
            var value = $(this).attr("data-filter");
            var elem = $(".operations__slide");
            if (value == "all") {
                $(elem).show("500");
            } else {
                $(elem).not("." + value).hide("500");
                $(elem).filter("." + value).show("500");
            }
        } else {
            if (value === 'all') {
                $('.operations__wrapper').slick('slickUnfilter');
                $('.operations__wrapper').slick('slickFilter', '.all');

            } else {
                if (value === 'body') {
                    $('.operations__wrapper').slick('slickUnfilter');
                    $('.operations__wrapper').slick('slickFilter', '.body');
                } else {
                    $('.operations__wrapper').slick('slickUnfilter');
                    $('.operations__wrapper').slick('slickFilter', '.face');
                }
            }
        }
    });
})

// Кнопка выбора города
let clinicButton = document.querySelector(".clinic__select");
let clinicButtonText = document.querySelector(".clinic__select-label");
let clinicSorter = document.querySelector(".clinic__sorter");
let clinicFirstButton = document.querySelector(".clinic__sorter-item"); // первый попавшийся таб

const CLINICNODES = ["BUTTON", "LABEL"];

clinicButtonText.innerText = clinicFirstButton.innerText;

window.addEventListener("click", e => {
    if (CLINICNODES.includes(e.target.nodeName)) return;
    clinicButton.classList.remove("active");
});

clinicButton.addEventListener("click", e => {
    clinicButton.classList.toggle("active");
});

clinicSorter.addEventListener("click", e => {
    clinicButtonText.innerText = e.target.innerText;
    clinicButton.classList.add("selected");
    clinicButton.classList.remove("active");
});