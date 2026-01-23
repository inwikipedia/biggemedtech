$(document).ready(function () {
	// Miniaturansicht Klickwechsel
	$('.thumb-item').on('click', function () {
		const type = $(this).data('type');
		const index = $(this).data('index');

		// Miniaturansicht Status aktualisieren
		$('.thumb-item').removeClass('active');
		$(this).addClass('active');

		// Anzeigeinhalt wechseln
		if (type === 'video') {
			$('.media-video').addClass('active');
			$('.media-image').removeClass('active');
		} else {
			$('.media-video').removeClass('active');
			$('.media-image').addClass('active');

			const src = $(this).find('img').attr('src');
			const alt = $(this).find('img').attr('alt');

			// Hauptbild aktualisieren
			$('#main-image').attr('src', src).attr('alt', alt);
		}
	});

	// Details Tab-Wechsel
	$('.details-tab').on('click', function () {
		const tabId = $(this).data('tab');

		// Tab-Status wechseln
		$('.details-tab').removeClass('active');
		$(this).addClass('active');

		// Inhaltsbereich wechseln
		$('.details-panel').removeClass('active');
		$('#' + tabId).addClass('active');
	});
});

