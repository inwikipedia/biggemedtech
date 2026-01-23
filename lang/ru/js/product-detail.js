$(document).ready(function () {
	// Переключение при клике на миниатюру
	$('.thumb-item').on('click', function () {
		const type = $(this).data('type');
		const index = $(this).data('index');

		// Обновить статус миниатюры
		$('.thumb-item').removeClass('active');
		$(this).addClass('active');

		// Переключить отображаемый контент
		if (type === 'video') {
			$('.media-video').addClass('active');
			$('.media-image').removeClass('active');
		} else {
			$('.media-video').removeClass('active');
			$('.media-image').addClass('active');

			const src = $(this).find('img').attr('src');
			const alt = $(this).find('img').attr('alt');

			// Обновить основное изображение
			$('#main-image').attr('src', src).attr('alt', alt);
		}
	});

	// Переключение вкладки деталей
	$('.details-tab').on('click', function () {
		const tabId = $(this).data('tab');

		// Переключить статус вкладки
		$('.details-tab').removeClass('active');
		$(this).addClass('active');

		// Переключить панель контента
		$('.details-panel').removeClass('active');
		$('#' + tabId).addClass('active');
	});
});

