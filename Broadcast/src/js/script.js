$(function(){
	$('.bottom-tabs-box .tab-nav .tab-item').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.bottom-tabs-box .tab-contents-box .tab-content').eq($(this).index()).addClass('active').siblings().removeClass('active');
	})
})