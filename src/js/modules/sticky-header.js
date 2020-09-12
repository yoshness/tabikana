export default function stickyHeader() {
	const header = document.getElementById('js-header');
	let sticky = header.offsetTop;
	
	function init() {
		if (window.pageYOffset > sticky) {
			header.classList.add('is-sticky');
		} else {
			header.classList.remove('is-sticky');
		}
	}

	window.onscroll = function() {
		init()
	};
}