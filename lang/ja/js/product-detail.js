$(document).ready(function () {
	// サムネイルクリック切替
	$('.thumb-item').on('click', function () {
		const type = $(this).data('type');
		const index = $(this).data('index');

		// サムネイル状態更新
		$('.thumb-item').removeClass('active');
		$(this).addClass('active');

		// 表示内容切替
		if (type === 'video') {
			$('.media-video').addClass('active');
			$('.media-image').removeClass('active');
		} else {
			$('.media-video').removeClass('active');
			$('.media-image').addClass('active');

			const src = $(this).find('img').attr('src');
			const alt = $(this).find('img').attr('alt');

			// メイン画像更新
			$('#main-image').attr('src', src).attr('alt', alt);
		}
	});

	// 詳細タブ切替
	$('.details-tab').on('click', function () {
		const tabId = $(this).data('tab');

		// タグ状態切替
		$('.details-tab').removeClass('active');
		$(this).addClass('active');

		// コンテンツパネル切替
		$('.details-panel').removeClass('active');
		$('#' + tabId).addClass('active');
	});
});

