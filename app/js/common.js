$(document).ready(function() {
    
    $('.animated-fadeIn').animated('fadeIn');

    // Инициализайия FancyBox
    $("a.fancybox").fancybox();

    // Маска для телефона
    $("#phone-form").mask("+375 (99) 999-99-99");

    // Кнопка показать ещё
    $('.more-button').on('click', function (e) {
        e.preventDefault();
        $("#portfolio-2").collapse('show');
        $(this).hide();
    });

    // Открыть модальное окно меню по клику на иконку
    openModal('.nav-button');

    // Открыть модальное окно меню по клику на текст
    openModal('.menu-text');

    function openModal (elem) {
        $(elem).on('click', function () {
            $('#top-menu').addClass('active');
            $('body').addClass('modal-open');
        });
    }

    // Закрыть меню
    closeModal('.closed-menu');

    // Закрыть модальное окно
    closeModal('.closed-modal');

    function closeModal (elem) {
        $(elem).on('click', function () {
            $('.top-menu-box').removeClass('active');
            setTimeout(function() {
                $('body').removeClass('modal-open');
            }, 200);
        });
    }

    // Скрол к якорю
    $('.menu-to').on("click", function(e){
        e.preventDefault();
        var anchor = $(this);
        setTimeout(function() {
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 777);
        }, 500);

        setTimeout(function() {
            $('body').removeClass('modal-open');
        }, 1000);

        $('#top-menu').removeClass('active');
        return false;
    });

    // Открыть модальное окно заказ
    $('.order-button').on('click', function (e) {
        e.preventDefault();
        $('#top-order').addClass('active');
        $('body').addClass('modal-open');
    });

    // Тригер на кнопку отправить
    $('.order-submit').on('click', function (e) {
        e.preventDefault();
        $('#but-hide').trigger('click');
    });

    // Отправка формы заказа
    $(".order-form").each(function() {
        $(this).validate({
            errorPlacement: function(error,element) {
                return true;
            },
            submitHandler: function(form) {
                var th = $(form);
                $.ajax({
                    type: "POST",
                    url: "send/mail.php", //Change
                    data: th.serialize()

                }).done(function() {
                    // alert("Спасибо за заявку!");
                    $('.order-text').hide(500);
                    $('.order-text-done').show(700);
                    setTimeout(function() {
                        th.trigger("reset");
                    }, 1000);
                });
                return false;
            }
        });
    });
});

$(window).on('load', function(){
  $('.preloader').delay(1500).fadeOut('slow');
});