export default function toggleMenu() {
    const $toggle = $('#js-toggle-menu');

    $toggle.on('click', (e) => {
    	e.preventDefault();

        $('html, body').toggleClass('is-locked');
        $(e.currentTarget).toggleClass('is-open');

        $('#js-menu').toggleClass('is-shown');
        $('#js-overlay').toggleClass('is-shown');
        $('#js-header').toggleClass('is-open');
    });
}