import $ from 'jquery';
window.jQuery = $;
window.$ = $;

const $trigger = $('.js-scroll'),
      BREAKPOINT_MOBILE = 768;

let duration;          

if($(window).width() > BREAKPOINT_MOBILE) {
    duration = 1000;
}
else {
    duration = 1800;
}

$trigger.on('click', (e) => {
    e.preventDefault();

    // if menu item is clicked, close menu first
    if($(e.currentTarget).closest('li').hasClass('menu__item')) {
        $('#js-toggle-menu').click();
    }

    let $target = $($(e.currentTarget).attr('href').replace('/', '')),
        offset = -150;

    if($(e.currentTarget).data('offset') != undefined) {
        offset = $(e.currentTarget).data('offset');
    }

    if($target != '') {
        $('html, body').stop().animate({ scrollTop: $target.offset().top + offset }, duration);
    }
});