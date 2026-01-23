$(document).ready(function () {
	// Cambio clic miniatura
	$('.thumb-item').on('click', function () {
		const type = $(this).data('type');
		const index = $(this).data('index');

		// Aggiorna stato miniatura
		$('.thumb-item').removeClass('active');
		$(this).addClass('active');

		// Cambia contenuto visualizzato
		if (type === 'video') {
			$('.media-video').addClass('active');
			$('.media-image').removeClass('active');
		} else {
			$('.media-video').removeClass('active');
			$('.media-image').addClass('active');

			const src = $(this).find('img').attr('src');
			const alt = $(this).find('img').attr('alt');

			// Aggiorna immagine principale
			$('#main-image').attr('src', src).attr('alt', alt);
		}
	});

	// Cambio scheda dettagli
	$('.details-tab').on('click', function () {
		const tabId = $(this).data('tab');

		// Cambia stato scheda
		$('.details-tab').removeClass('active');
		$(this).addClass('active');

		// Cambia pannello contenuti
		$('.details-panel').removeClass('active');
		$('#' + tabId).addClass('active');
	});
});

