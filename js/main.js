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

	$(".next").click(function(){
		if(current<=count-1){
			current++;
			if(current==count){current=0};
		}
		listMove();
	});
	$(".prev").click(function(){
		if(current>-1){
			current--;
			if(current==-1){current=count-1};
		}
		listMove();
	});

	function listMove(){
		$(".banner").stop().animate({left:current*width*-1});
	};

	var card = $(".container #section");
	var cardPos = card.offset().top;
	var menu = $("#header")	
	var menuPos = menu.offset().top;	
	var news = $(".news_wrap");
	var newsPos = news.offset().top;

	$(window).scroll(function(){
		var scrollY = window.pageYOffset;

		if(scrollY > menuPos){
			menu.addClass("fixed");
		}else{
			menu.removeClass("fixed");
		}

		if(scrollY>cardPos-1000){
			card.stop().slideDown(300);
		}

		if(scrollY>newsPos-200){
			news.find("div").stop().slideDown();
		}
	});

	var smenu = $("#menu>li");
	var contents = $("#wrap>.scroll");

	smenu.click(function(){
		$("html,body").stop().animate({scrollTop:contents.eq($(this).index()).offset().top-90});
	});

	$(window).scroll(function(){
		var sct = window.pageYOffset;

		contents.each(function(index){
			if(sct>=$(this).offset().top-90){
				smenu.find(".amenu").removeClass("on");
				smenu.find(".amenu").eq(index).addClass("on");
			}
		});
	});

	$("#top").click(function(e){
		e.preventDefault();
		$("html,body").stop().animate({scrollTop:0},300)
	});
	
	var page = $("div.container").offset().top;

	$(window).scroll(function(){
		var scrollYY = window.pageYOffset;

		if(scrollYY>page){
			$("#top").slideDown(300);
		}else{
			$("#top").slideUp(300);
		}
	});	
});