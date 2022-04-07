// Кнопка Подробнее в секции "Принцип работы"
$(".principle__more").on("click", function (event) {
    $(this).toggleClass("active");
    $(this).siblings('.principle__desc').toggleClass("active"); // siblings - соседний элемент
})

// Кнопки в FAQ
$(".faq__title").on("click", function () {
    $(this).toggleClass("active");
    $(this).siblings('.faq__panel').toggleClass("active"); // siblings - соседний элемент
})

// Маска для набора номера телефона
$("#feedbacktel").mask("+7(999) 999-9999");
$("#feedbacktel-modal").mask("+7(999) 999-9999");


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

// Плавная прокрутка до элемента
$("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");


    $("html, body").animate({
        scrollTop: blockOffset - 30 // отступ
    }, 500);
});


// Запуск модалки "Запись на консультацию"
$(".to-appointment").on("click", function () {
    document.body.style.overflow = 'hidden';
    $("#modal__form").css("display", "flex").hide().fadeIn('fast'); //плавно присваивает FLEX
    // Закрытие модалки "Запись на консультацию"
    $(document).mouseup(function (e) { // событие клика по веб-документу
        var modalForm = $("#modal-feedback__form"); // сама форма
        var modalWindow = $('#modal__form'); // окно, в которой находится форма

        $("#modal-form__close").on("click", function () {
            document.body.style.overflow = 'scroll';
            $("#modal__form").hide('fast');//скрывает див модалки при клике на кнопку закрытия
        });

        if (!modalForm.is(e.target) // если клик был не по нашему блоку
            && modalForm.has(e.target).length === 0) { // и не по его дочерним элементам
            modalWindow.hide('fast'); // скрываем его
            document.body.style.overflow = 'scroll';
        }
    });
});

// Открытие модального окна статьи по клику
function openWindow(evt, modalArticleId, articleItemId) {
    var flag = 0
    var element = document.getElementById(articleItemId)

    element.addEventListener("mousedown", function () {
        flag = 0;
    }, false);
    element.addEventListener("mousemove", function () {
        flag = 1;
    }, false);
    element.addEventListener("mouseup", function () {
        if (flag === 0) {            
            document.getElementById(modalArticleId).className += " active";
            document.body.style.overflow = 'hidden';

            $('#' + modalArticleId + ' .modal-result__tab:first-child').trigger('click');
            
            $('#' + modalArticleId + ' .modal-result__control').slick({
                mobileFirst: true,
                infinite: false,
                dots: false,
                arrows: false,
                fade: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                focusOnSelect: true,
                prevArrow: '<div class="prev"></div>',
                nextArrow: '<div class="next"></div>',
            
                responsive: [
                  {
                    breakpoint: 768,
                    settings: {
                      // focusOnSelect: false,
                      slidesToShow: 5,
                      arrows: false
                    }
                  }
                ]
            });
            
            // модальное окно Result
            $('#' + modalArticleId + ' .modal-result__slides').slick({
            lazyLoad: 'ondemand',
            mobileFirst: true,
            dots: true,
            infinite: false,
            arrows: false,
            fade: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    dots: false,
                    prevArrow: '<div class="prev"></div>',
                    nextArrow: '<div class="next"></div>'
                }
                }
            ]
            });
        }
    }, false);
}

// Закрытие модальных окон
function closeWindow(event, formID, closeButtonID) {
    var modalForm = $("#" + formID); // сама форма
    var closeButton = $('#' + closeButtonID)
    if (closeButton.is(event.target)) {
        document.body.style.overflow = 'scroll'
        document.getElementById(formID).classList.remove('active')
    }
    if (modalForm.is(event.target)) { // если клик был не по нашему блоку
        document.body.style.overflow = 'scroll'
        document.getElementById(formID).classList.remove('active')
    }
}




        