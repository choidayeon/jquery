$(function(){
	// $("#menu>li").mouseenter(function(){
	// 	$("#menu ul").slideUp();
	// 	$("#menu ul").eq($(this).index()).slideDown();
	// });
	// $("#menu>li").mouseleave(function(){
	// 	$("#menu ul").slideUp();
	// });

	$("#menu>li").hover(function(){
		var i = $(this).index();
		$("#menu ul").eq(i).stop().slideDown();
	},function(){
		$("#menu .sub").hide();
	});

	var current = 0;
	var count = $(".banner>li").length;
	var width = $(window).outerWidth();

	$(".banner li").css("width",width);
	$(".banner").css("width",width*count);

	$(window).resize(function(){
		width = $(window).outerWidth();
		$(".banner li").css("width",width);
		$(".banner").css("width",width*count);
		$(".banner").css({left:current*width*-1});
	});

	$("#next_btn").click(function(){
		if(current<=count-1){
			current++;
			if(current==count){current=0};
		}
		listMove();
	});
	$("#prev_btn").click(function(){
		if(current>-1){
			current--;
			if(current==-1){current=count-1};
		}
		listMove();
	});

	function listMove(){
		$(".banner").stop().animate({left:current*width*-1});
	};
});