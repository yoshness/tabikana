export default function bulletScroll() {
	const $trigger = $('.js-bullet-scroll'),
		  IS_ACTIVE = 'is-active';
		  
	$trigger.click((e) => {
		e.preventDefault();
		
		// setTimeout(() => {
			$trigger.parent().removeClass(IS_ACTIVE);
			$(e.currentTarget).parent().addClass(IS_ACTIVE);
		// }, 3000);

		let $target = $($(e.currentTarget).attr('href'));
	    if($target != '') {
	    	$('html, body').stop().animate({ scrollTop: $target.offset().top }, 1000);
	    }
	}); 
}