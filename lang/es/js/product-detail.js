$(document).ready(function () {
	// Cambio al hacer clic en miniatura
	$('.thumb-item').on('click', function () {
		const type = $(this).data('type');
		const index = $(this).data('index');

		// Actualizar estado de miniatura
		$('.thumb-item').removeClass('active');
		$(this).addClass('active');

		// Cambiar contenido mostrado
		if (type === 'video') {
			$('.media-video').addClass('active');
			$('.media-image').removeClass('active');
		} else {
			$('.media-video').removeClass('active');
			$('.media-image').addClass('active');

			const src = $(this).find('img').attr('src');
			const alt = $(this).find('img').attr('alt');

			// Actualizar imagen principal
			$('#main-image').attr('src', src).attr('alt', alt);
		}
	});

	// Cambio de pestaña de detalles
	$('.details-tab').on('click', function () {
		const tabId = $(this).data('tab');

		// Cambiar estado de pestaña
		$('.details-tab').removeClass('active');
		$(this).addClass('active');

		// Cambiar panel de contenido
		$('.details-panel').removeClass('active');
		$('#' + tabId).addClass('active');
	});
});

