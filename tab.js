jQuery(document).ready(function($){
	$('.e-n-tab-title').hover(function(){
		var tabIndex = $(this).attr('data-tab-index');
		$('.e-n-tab-title').attr('aria-selected', 'false');
		$(this).attr('aria-selected', 'true');
		$('.e-n-tabs-content > div').removeClass('e-active')
			.filter('[data-tab-index="' + tabIndex + '"]').addClass('e-active');
	});
});
