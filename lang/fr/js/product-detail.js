$(document).ready(function () {
	// Changement au clic sur la vignette
	$('.thumb-item').on('click', function () {
		const type = $(this).data('type');
		const index = $(this).data('index');

		// Mettre à jour l'état de la vignette
		$('.thumb-item').removeClass('active');
		$(this).addClass('active');

		// Changer le contenu affiché
		if (type === 'video') {
			$('.media-video').addClass('active');
			$('.media-image').removeClass('active');
		} else {
			$('.media-video').removeClass('active');
			$('.media-image').addClass('active');

			const src = $(this).find('img').attr('src');
			const alt = $(this).find('img').attr('alt');

			// Mettre à jour l'image principale
			$('#main-image').attr('src', src).attr('alt', alt);
		}
	});

	// Changement d'onglet de détails
	$('.details-tab').on('click', function () {
		const tabId = $(this).data('tab');

		// Changer l'état de l'onglet
		$('.details-tab').removeClass('active');
		$(this).addClass('active');

		// Changer le panneau de contenu
		$('.details-panel').removeClass('active');
		$('#' + tabId).addClass('active');
	});
});

