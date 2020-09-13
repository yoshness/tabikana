export default function bulletScroll() {
	const $trigger = $('.js-bullet-scroll'),
		  IS_ACTIVE = 'is-active';
		  
	$trigger.click((e) => {
		e.preventDefault();
		
		$trigger.parent().removeClass(IS_ACTIVE);
		$(e.currentTarget).parent().addClass(IS_ACTIVE);

		let $target = $($(e.currentTarget).attr('href')),
			offset = 0;
	    if($target != '') {

	    	if($(e.currentTarget).data('offset')) {
	    		offset = $(e.currentTarget).data('offset');
	    	}

	    	$('html, body').stop().animate({ scrollTop: $target.offset().top + offset }, 1000);
	    }
	}); 
}