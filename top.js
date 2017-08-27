$(function(){
	//change image
	var index =0;
	var timer =null;
	var size = $('.normal').length-1;
	function changeImg(){
		$('.normal:eq('+index+')').addClass('active').siblings().removeClass('active');
		$('.dot:eq('+index+')').addClass('dotac').siblings().removeClass('dotac');
	}
	//向前切换
	$('.prev').on('click',function(event){
		index--;
		if(index<0){index=size;}
			changeImg();
	})
	//向后切换
	$('.next').on('click',function(event){
		index++;
		if(index>size){index=0;}
		   changeImg();
	})
	//小圆点切换
	$('#dots').on('click',function(event){
		index = $(event.target).index();
		changeImg();
	})
	//自动切换
	function autoPlay(){
		timer = setInterval(function(){
		    if(index<size){index++;}
			else{index=0}
			changeImg();
		},2500);
	}
	autoPlay();
	// 停止自动切换
	function stopPlay(){
		if(timer!=null){clearInterval(timer);}
	}
	// 鼠标在轮播图上触发停止自动
	$('#main').mouseover(function(){
		stopPlay();
	});	
	// 鼠标离开轮播图恢复
	$('#main').mouseout(function(){
		autoPlay();
	});
});