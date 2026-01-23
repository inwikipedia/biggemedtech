$(document).ready(function () {
	// Schimbare clic miniatură
	$('.thumb-item').on('click', function () {
		const type = $(this).data('type');
		const index = $(this).data('index');

		// Actualizare stare miniatură
		$('.thumb-item').removeClass('active');
		$(this).addClass('active');

		// Schimbare conținut afișat
		if (type === 'video') {
			$('.media-video').addClass('active');
			$('.media-image').removeClass('active');
		} else {
			$('.media-video').removeClass('active');
			$('.media-image').addClass('active');

			const src = $(this).find('img').attr('src');
			const alt = $(this).find('img').attr('alt');

			// Actualizare imagine principală
			$('#main-image').attr('src', src).attr('alt', alt);
		}
	});

	// Schimbare tab detalii
	$('.details-tab').on('click', function () {
		const tabId = $(this).data('tab');

		// Schimbare stare tab
		$('.details-tab').removeClass('active');
		$(this).addClass('active');

		// Schimbare panou conținut
		$('.details-panel').removeClass('active');
		$('#' + tabId).addClass('active');
	});
});

