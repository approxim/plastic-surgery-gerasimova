// Кнопка Подробнее в секции "Принцип работы"
$('.principle__more').on('click', function (event) {
  $(this).toggleClass('active');
  $(this).siblings('.principle__desc').toggleClass('active'); // siblings - соседний элемент
});

// Кнопки в FAQ
$('.faq__title').on('click', function () {
  $(this).toggleClass('active');
  $(this).siblings('.faq__panel').toggleClass('active'); // siblings - соседний элемент
});
// let faqTabs = document.querySelectorAll('.faq__title');

// faqTabs.forEach((el) => {
//   el.addEventListener('click', () => {
//     if (el.style.height === '0px') {
//       el.style.height = `${el.scrollHeight}px`;
//     } else {
//       el.style.height = `${el.scrollHeight}px`;
//       window.getComputedStyle(el, null).getPropertyValue('height');
//       el.style.height = '0';
//     }
//   });

//     el.addEventListener('transitioned', () => {
//       if (el.style.height !== '0px') {
//           el.style.height = 'auto'
//       }
//     })
// });

// Маска для набора номера телефона
$('#feedbacktel').mask('+7(999) 999-9999');
$('#feedbacktel-modal').mask('+7(999) 999-9999');

// Плавная прокрутка до элемента
$('[data-scroll]').on('click', function (event) {
  event.preventDefault();

  var $this = $(this),
    blockId = $this.data('scroll'),
    blockOffset = $(blockId).offset().top;

  $('#nav a').removeClass('active');
  $this.addClass('active');

  $('html, body').animate(
    {
      scrollTop: blockOffset - 30, // отступ
    },
    500
  );
});

// // Запуск модалки "Запись на консультацию"
$('.to-appointment').on('click', function () {
  document.body.style.overflowY = 'hidden';
  $('#modal__form').addClass('active');
  // .hide().fadeIn('fast'); //плавно присваивает FLEX
  // Закрытие модалки "Запись на консультацию"
  $(document).mouseup(function (e) {
    // событие клика по веб-документу
    var modalForm = $('#modal-feedback__form'); // сама форма
    var modalWindow = $('#modal__form'); // окно, в которой находится форма

    $('#modal-form__close').on('click', function () {
      document.body.style.overflowY = 'scroll';
      document.body.style.webkitOverflowScrolling = 'touch';
      $('#modal__form').removeClass('active');
      // .hide('fast');//скрывает див модалки при клике на кнопку закрытия
    });

    if (
      !modalForm.is(e.target) && // если клик был не по нашему блоку
      modalForm.has(e.target).length === 0
    ) {
      // и не по его дочерним элементам
      modalWindow.removeClass('active');
      // .hide('fast'); // скрываем его
      document.body.style.overflowY = 'scroll';
      document.body.style.webkitOverflowScrolling = 'touch';
    }
  });
});

// Открытие модального окна статьи по клику
function openWindow(evt, modalArticleId, articleItemId) {
  var flag = 0;
  var elements = document.querySelectorAll('.' + articleItemId);

  elements.forEach(el => {
    el.addEventListener(
      'mousedown', function () {
        flag = 0;
      },
      false
  )})
  ;

  elements.forEach(el => {
    el.addEventListener(
      'mousemove',
      function () {
        flag = 1;
      },
      false
    );
  })
  elements.forEach(el => {
    el.addEventListener(
      'mouseup',
      function () {
        if (flag === 0) {
          document.getElementById(modalArticleId).className += ' active';
          document.body.style.overflowY = 'hidden';

          $('#' + modalArticleId + ' .modal-result__tab:first-child').trigger(
            'click'
          );

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
                  slidesToShow: 5,
                  arrows: false,
                },
              },
            ],
          });

          // модальное окно Result
          $('#' + modalArticleId + ' .modal-result__slides').slick({
            // lazyLoad: 'ondemand',
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
                  nextArrow: '<div class="next"></div>',
                },
              },
            ],
          });
        }
      },
      false
  )})
  ;
}

// Закрытие модальных окон
function closeWindow(event, formID, closeButtonID) {
  var modalForm = $('#' + formID); // сама форма
  var closeButton = $('#' + closeButtonID);
  if (closeButton.is(event.target)) {
    document.body.style.overflowY = 'scroll';
    document.body.style.webkitOverflowScrolling = 'touch';
    document.getElementById(formID).classList.remove('active');
  }
  if (modalForm.is(event.target)) {
    // если клик был не по нашему блоку
    document.body.style.overflowY = 'scroll';
    document.body.style.webkitOverflowScrolling = 'touch';
    document.getElementById(formID).classList.remove('active');
  }
}

// проверка чекбокса перед отправкой формы
// форма обратной связи в конце документа
// let feedbackForm = document.querySelector('#feedback');
// const feedbackInput = feedbackForm.querySelector('.feedback__privacy input');
// const feedbackFormButton = feedbackForm.querySelector('button');

// // форма обратной связи в модальном окне
// let modalFeedbackForm = document.querySelector('#modal-feedback__form');
// const modalInput = modalFeedbackForm.querySelector('.feedback__privacy input');

// const modalFormButton = modalFeedbackForm.querySelector('.feedback__button');

// feedbackInput.addEventListener('change', function () {
//   if (feedbackInput.checked) {
//     feedbackFormButton.disabled = false;
//   } else {
//     feedbackFormButton.disabled = true;
//   }
// });

// modalInput.addEventListener('change', function () {
//   if (modalInput.checked) {
//     modalFormButton.disabled = false;
//   } else {
//     modalFormButton.disabled = true;
//   }
// });

const clickImage = function (event) {
  event.target.parentNode.querySelector('button:last-child').click();
};

// всплывающее поп-ап окно через 15 сек
setTimeout(function () {
  document.getElementById('aboutme__button').click();
}, 15000);
