$(document).ready(function () {
	// Miniatuurklik wisselen
	$('.thumb-item').on('click', function () {
		const type = $(this).data('type');
		const index = $(this).data('index');

		// Miniatuurstatus bijwerken
		$('.thumb-item').removeClass('active');
		$(this).addClass('active');

		// Weergegeven inhoud wisselen
		if (type === 'video') {
			$('.media-video').addClass('active');
			$('.media-image').removeClass('active');
		} else {
			$('.media-video').removeClass('active');
			$('.media-image').addClass('active');

			const src = $(this).find('img').attr('src');
			const alt = $(this).find('img').attr('alt');

			// Hoofdafbeelding bijwerken
			$('#main-image').attr('src', src).attr('alt', alt);
		}
	});

	// Detailtabblad wisselen
	$('.details-tab').on('click', function () {
		const tabId = $(this).data('tab');

		// Tabbladstatus wisselen
		$('.details-tab').removeClass('active');
		$(this).addClass('active');

		// Inhoudspaneel wisselen
		$('.details-panel').removeClass('active');
		$('#' + tabId).addClass('active');
	});
});

