export default function activateOnScroll() {
    const IS_SHOWN = 'is-shown',
          IS_ACTIVE = 'is-active',
          BREAKPOINT_MOBILE = 768;

    $(window).on('load, scroll', () => {
        let scroll_position = $(window).scrollTop();

        $('.js-activate-on-scroll').each((i, e) => {
            let target = e, offset = 450;
            let target_id = $(e).attr('id');
            let top_of_object = $(target).offset().top + offset;
            let bottom_of_window = scroll_position + $(window).height();

            if(bottom_of_window > top_of_object){
                $(target).addClass(IS_ACTIVE);

                $(`.js-bullet-scroll`).parent().removeClass(IS_ACTIVE);
                $(`.js-bullet-scroll[href="#${target_id}"]`).parent().addClass('is-active');
            }

            // show bullet nav if entering first section and hide when exiting last section
            if(bottom_of_window > $('#js-section-intro').offset().top + 600) {
                $('.js-bullet-nav').addClass(IS_SHOWN);
            }
        }); 
    });
}