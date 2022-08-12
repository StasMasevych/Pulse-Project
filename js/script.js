//JS BASICS

/* let name = "Stas";
let age = 32;
let profession = "IT project manager";
const pi = 3.14; */

//type of data:

//number
//string - " ",' ',` `
//true/false
//null
//undefined
//object
/* let obj = {
    name: "apple",
    color: "green",
    weight: 200

} */
//symbol

//commands

//alert (1111)
//console.log (age);
/* let answer = confirm("are you IT developer?");
console.log(answer); */
/* let answer = prompt("are you IT developer?");
console.log(answer);
 */

//console.log (4 + "tttt");

/* let isChecked = true;
    isClose = true;
    console.log (isChecked && isClose);
    console.log (isChecked || isClose); */

/* if (2*6 == 4*1) {
    console.log ("true")
} else {
    console.log ("error")
} */

/* let answer = prompt("are you IT developer?");
if (answer) {
    console.log("great!")
}
/* else {
    console.log("learn code!")
} */ 

/* let num = 101;

if (num < 49) {
    console.log(" not true")
} else if (num > 100) {
    console.log ("close")
} else {
    console.log ("true")
} */

/* for (let i = 1; i < 8; i++) {
    console.log (i);
} */

/* function logging (a,b) {
    console.log(a*b)
}

logging (3,2); */

/* let answer = confirm("are you IT developer?");
if (answer) {
    console.log("great!")
} else {
    console.log("learn code!")
} */


//SLIDER SLICK - CONNECTION//

/* $(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: `<button type="button" class="slick-prev"><img src = "icons/section_carousel/chevron_left_solid.png"></button>`,
        nextArrow: `<button type="button" class="slick-next"><img src = "icons/section_carousel/chevron_right_solid.png"></button>`,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
                
              
            }
               
            
        ]
      });
  }); */


  //SLIDER TINY - CONNECTION
  

  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
    
    
  });

  document.querySelector('.prev').addEventListener(`click`, function () {
    slider.goTo(`prev`);
  });

  document.querySelector('.next').addEventListener(`click`, function () {
    slider.goTo(`next`);
  });


/*   $(document).ready(function(){ */



    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });


    //JQUERY functions


    /* $('.catalog-item__link').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            
        })
    })

    $('.catalog-item__back').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            
        })
    })
 */

/* }); */

//Vanilla JS function

function toggleSlide(item) {
    $(item).each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
         });    
    });
};

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');


//Modal

$('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
});
/* звертаємся до ід, при методі - клік, буде функція - що ? оверлей + модальне вікно  що зробити ? показати */

$('.modal__close').on('click', function (){
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
});

$('.button_mini').on('click', function () {
    $('.overlay, #order').fadeIn('slow');
});

$('.button_mini').each(function(i) {
    $(this).on('click', function(){
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    });
});
/* звертаємся до кнопок */
/* метод each - виокнання операцій до кожного елемента */
/*(i) аргумент що відповідає за номер елемента по порядку*/
/* this - та кнопка на яку нажав */
/* на цю кнопку буде клік */
/* функція - всередині модального вікна є клас model__descr - описання мого модального вікна тобто заголовок який я хочу поміняти*/
/* всередину загаловку я хочу поммістити якись текст */
/* поміщаю в текст заголовок з айтіма каталога */
/* команда eq - позволяє получати елемент по порядку */
/* находимо заголовок під відповідним номером і з нього ми витаскуєм текст*/



// Validate Form 

//Option 1 - for each form seperately

/* кожна команда стосується окремої форми, тому скілкьи форм - скілкьи буде команд */
/* $('#consultation-form').validate(); *//* звертаємся напряму на форму */
/* $('#consultation form').validate({
    rules: {
        name: 
            { */
                /* required: true, */
                /* maxlength: 5 */ /* задаємо в обєкті макс к-ть букв, а потім в меседжес - який текст буде випадати */
              /* }, */
        
        /* phone: 'required', */
        /* email: { *//* новий обєкт */
            /* required: true, */ /* обозякове */
            /* email: true *//* чи дійсно я ввів емейл */
        /* }

    }, */
    /* якщо треба на іншу мову повіжомлення про валідність, то юзаєм таку функцію */
   /*  messages: {
        name: 
        {
            required: "Please, enter your name",
            maxlength: jQuery.validator.format("Enter no more than {0} characters!")
          },
        phone: "Please, enter your phone",
        email: {
          required: "Please, enter your email",
          email: "Invalid email"
        }
      }
});
$('#order form').validate(); */

//Option 2 - by functions for all forms

function validForms (form) { /* робимо через фугкцію настройки для всіх форм! Мінімузуємо код! Копіємо те що вище в тіло функції */

    $(form).validate({
        rules: {
            name: 
                {
                    required: true,
                    maxlength: 70
                  },
            
            phone: 'required',
            email: {
                required: true, 
                email: true
            }
    
        },
        messages: {
            name: 
            {
                required: "Please, enter your name",
                maxlength: jQuery.validator.format("Enter no more than {0} characters!")
              },
            phone: "Please, enter your phone",
            email: {
              required: "Please, enter your email",
              email: "Invalid email"
            }
          }
    });
}

validForms('#consultation-form');
validForms('#consultation form');
validForms('#order form');

//Musk input plugin 

$('input[name =phone]').mask("+38(999) 999-9999");

//Sending data from forms to server

/* задача - відправити форму без перезагрузки сторінки, через ajax */
$('form').submit(function(e){
    e.preventDefault();

    /* пишем функцію валідатор щоб можна було відправляти не пусту форму */
    /* якщо наша форма не пройшла валідацію, то ми її зупинемо */
    if (!$(this).valid()) {
        return;
    }

    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function(){
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();/* пісдя відправки цих  форм хай вони зникнуть */
        $('.overlay, #thanks').fadeIn('slow');/* ці едементи хай покажуться */


        $('form').trigger('reset');

    });
    return false;
});
/* звертаємся до елементу - всі форми */
/* метод і подія - після всіх валідацій форм, форма відправляється  */
/* після подання, буде дія. функція - відминити стандартну поведінку браузера тобто перезагрузку сторінки*/
/* далі - відправка даних на сервер через метод  ajax, відкривваємо обєкт - ({})*/
/* я віддаю дані серверу через метод ПОСТ */
/* далі - вказуємо через url куди відправляємо дані на сервер */
/* далі - вказуємо які дані відправляємо через data - this, те з чим уже працюємо, тобто дант 1 форми - то ці дані, дані 2 форми - то ці дані а тд*/
/* підготувати дані для відправки на сервер через serialize */

/* далі - налаштовуємо відповідь сервера */
/* done ми виконали цю операцію і виконаєм ще одну дію, робим функцію */
/* всередни форми this ми находимо (find) inputs з їх value - просто пусту строку*/
/* звертаємся до forms і кажем що вони мають обновитися/очиститися (trigger- ресет)  */
/* return false для відправки на сервер*/ 

//smooth scroll and pageup
$(window).scroll(function(){
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

/* window - звертаємся до всього вікна браузера */
/* scroll - при скролі вікна, метод */
/* буде функція  */
/* якщо наша сторінка (this) буде мати відтуп при скролінгу більше 1600 пікслів*/
/* то я буду брати мій елемент pageup і буду її показувати*/

//scroll up bu clicking pageup

$("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});
/* звертаємся до всіх ссилок які мають #*/
/* при кліку на ці ссилки */
/* буде функція */
/* ми створюємо змінну в яку поміщаємо те значення що було в атрибуті
href - this (ссилка на яку нажали), її атрибут який в href - */
/* далі йде анімація - і ми долистуємо сторінку до елементу що нам потрібно */

//Animation - Wow CSS

new WOW().init();