$(document).ready(function () {
	// Tukar Klik Thumbnail
	$('.thumb-item').on('click', function () {
		const type = $(this).data('type');
		const index = $(this).data('index');

		// Kemas Kini Status Thumbnail
		$('.thumb-item').removeClass('active');
		$(this).addClass('active');

		// Tukar Kandungan Paparan
		if (type === 'video') {
			$('.media-video').addClass('active');
			$('.media-image').removeClass('active');
		} else {
			$('.media-video').removeClass('active');
			$('.media-image').addClass('active');

			const src = $(this).find('img').attr('src');
			const alt = $(this).find('img').attr('alt');

			// Kemas Kini Gambar Utama
			$('#main-image').attr('src', src).attr('alt', alt);
		}
	});

	// Tukar Tab Butiran
	$('.details-tab').on('click', function () {
		const tabId = $(this).data('tab');

		// Tukar Status Tag
		$('.details-tab').removeClass('active');
		$(this).addClass('active');

		// Tukar Panel Kandungan
		$('.details-panel').removeClass('active');
		$('#' + tabId).addClass('active');
	});
});

