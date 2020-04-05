// document.getElementById("folder").innerHTML = '<div class="text-center"><i class=\"icon fas fa-folder\"></i> <p class="annotation">Мои проекты</p></div>';
const quotes = [
    'Если горе от ума - значит счастье от безумия.',
    'Служить бы рад, прислуживаться тошно.',
    'In vino veritas, in aqua sanitas.',
    'Я предлагаю всем нам нажраться в хлам!',
    'Нам чужого не надо, но своё мы возьмём, чьё бы оно ни было!',
    'Я недавно пытался задуматься... Задуматься не получилось.',
    'Exceptio probat regulam.',
    'О времена! О нравы!',
    'Кто боится других, тот раб, хотя он этого не замечает.',
    'Признавшись в своей слабости, человек становится сильным.',
    'Живи как пишешь, и пиши как живешь.',
    'От ума до рассудка гораздо дальше, чем полагают.',
    'Кто скрывает свои ошибки, тот хочет их повторить.'];

function setNewQuote(){
    let quote = $('#quote');
    let annotation = $('#annotation');
    annotation.addClass('fadeOutUp');
    quote.addClass('fadeOutUp');
    setTimeout(function () {
        quote.removeClass('fadeOutUp');
        quote.html(quotes[Math.floor(Math.random() * quotes.length)]);
        quote.addClass('fadeInDown');
    }, 500);
}

$(function () {
    let annotation = $('#annotation');
    let quote = $('#quote');
    let folder = $('#folder');
    let gh = $('#github');
    let contacts = $('#contacts');
    let icons = $('.icons');
    let timer;

    folder.mouseenter(function () {
        annotation.html('Проекты мои проекты');
        annotation.removeClass('fadeOutUp');
        annotation.addClass('fadeInDown');
    });
    folder.mouseleave(function () {
        annotation.removeClass('fadeInDown');
        annotation.addClass('fadeOutUp');
    });

    gh.mouseenter(function () {
        annotation.html('Мой GitHub');
        annotation.removeClass('fadeOutUp');
        annotation.addClass('fadeInDown');
    });
    gh.mouseleave(function () {
        annotation.removeClass('fadeInDown');
        annotation.addClass('fadeOutUp');
    });

    contacts.mouseenter(function () {
        annotation.html('Мои контакты');
        annotation.removeClass('fadeOutUp');
        annotation.addClass('fadeInDown');
    });
    contacts.mouseleave(function () {
        annotation.removeClass('fadeInDown');
        annotation.addClass('fadeOutUp');
    });

    icons.mouseenter(function () {
        quote.css('margin-top', '10px');
        clearTimeout(timer);
    });
    icons.mouseleave(function () {
        timer = setTimeout(function () {
            quote.css('margin-top', '-35px');
        }, 500)
    })
});
(function () {
    setNewQuote()
})();
setInterval(setNewQuote, 5000);