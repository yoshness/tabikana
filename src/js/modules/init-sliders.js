import 'slick-carousel';

export default function initSliders() {
	$('#js-flow-primary').slick({
		speed: 500,
		slidesToShow: 2.5,
		slidesToScroll: 1,
		cssEase: 'ease-out',
		dots: false,
		infinite: false,
		variableWidth: true,
		prevArrow: $('#js-flow-primary').next().find('.js-slider-prev'),
		nextArrow: $('#js-flow-primary').next().find('.js-slider-next'),
		mobileFirst: true, 
		responsive: [
	    	{
	            breakpoint: 768,
	            settings: 'unslick'
	    	}
	    ]
	});

	$('#js-flow-primary').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	    $('#js-flow-marker').css('left', `${nextSlide}0%`);
	});

	$('#js-flow-doctor').slick({
		speed: 500,
		slidesToShow: 2.5,
		slidesToScroll: 1,
		cssEase: 'ease-out',
		dots: false,
		infinite: false,
		variableWidth: true,
		prevArrow: $('#js-flow-doctor').next().find('.js-slider-prev'),
		nextArrow: $('#js-flow-doctor').next().find('.js-slider-next'),
		mobileFirst: true, 
		responsive: [
	    	{
	            breakpoint: 768,
	            settings: 'unslick'
	    	}
	    ]
	});

	$('#js-flow-doctor').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	    $('#js-flow-marker-2').css('left', `${nextSlide * 2.7.toString().replace('.', '')}%`);
	});
}