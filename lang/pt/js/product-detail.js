$(document).ready(function () {
	// Alteração ao clicar na miniatura
	$('.thumb-item').on('click', function () {
		const type = $(this).data('type');
		const index = $(this).data('index');

		// Atualizar status da miniatura
		$('.thumb-item').removeClass('active');
		$(this).addClass('active');

		// Alterar conteúdo exibido
		if (type === 'video') {
			$('.media-video').addClass('active');
			$('.media-image').removeClass('active');
		} else {
			$('.media-video').removeClass('active');
			$('.media-image').addClass('active');

			const src = $(this).find('img').attr('src');
			const alt = $(this).find('img').attr('alt');

			// Atualizar imagem principal
			$('#main-image').attr('src', src).attr('alt', alt);
		}
	});

	// Alteração de guia de detalhes
	$('.details-tab').on('click', function () {
		const tabId = $(this).data('tab');

		// Alterar status do guia
		$('.details-tab').removeClass('active');
		$(this).addClass('active');

		// Alterar painel de conteúdo
		$('.details-panel').removeClass('active');
		$('#' + tabId).addClass('active');
	});
});

