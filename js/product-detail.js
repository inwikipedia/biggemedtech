$(document).ready(function () {
	// 缩略图点击切换
	$('.thumb-item').on('click', function () {
		const type = $(this).data('type');
		const index = $(this).data('index');

		// 更新缩略图状态
		$('.thumb-item').removeClass('active');
		$(this).addClass('active');

		// 切换显示内容
		if (type === 'video') {
			$('.media-video').addClass('active');
			$('.media-image').removeClass('active');
		} else {
			$('.media-video').removeClass('active');
			$('.media-image').addClass('active');

			const src = $(this).find('img').attr('src');
			const alt = $(this).find('img').attr('alt');

			// 更新主图
			$('#main-image').attr('src', src).attr('alt', alt);
		}
	});

	// 详情Tab切换
	$('.details-tab').on('click', function () {
		const tabId = $(this).data('tab');

		// 切换标签状态
		$('.details-tab').removeClass('active');
		$(this).addClass('active');

		// 切换内容面板
		$('.details-panel').removeClass('active');
		$('#' + tabId).addClass('active');
	});
});

