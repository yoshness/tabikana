export default function truncateText() {

	$.each($('.js-truncate-text'), (index, value) => {
		$(value).text($(value).text().substring(0, 90) + '...');
	});
	
}