//YHK
$(window).on("load", function(){
	
	$('.loading').delay(260).fadeTo(300,0,function() {$(this).hide();});
	
	//hover function
	$( "[hov]" ).hover(function(){$(this).stop().fadeTo(100,$(this).attr('hov'));},function(){$(this).stop().fadeTo(100,1)});
	$( "[voh]" ).each(function(){
		voh = $(this).attr('voh');
		$(this).css('opacity',voh);
		})
	$( "[voh]" ).hover(function(){$(this).stop().fadeTo(100,1)},function(){$(this).stop().fadeTo(100,$(this).attr('voh'));});
	
	tl = new TimelineLite();
	var tagline = $('.box .kul');

	//Drop the element
	function StartAnimation(){tl.staggerFrom(tagline, 0.7, {top:"-=180px", rotation:"-56deg", alpha:0, scale:1.3, ease:Back.easeOut}, 0.22);}
	
 	// var bike = $('.box.bike .kul_ico');
	// var str = $('.kul_text .mb_t_1').attr('mb_t_1');
	// var ret = str.split(",");
	// var str2 = $('.kul_text .mb_t_2').attr('mb_t_2');
	// var ret2 = str2.split(",");
	// var mb_text;

	// //Random the verb
	// function verb_ran(){
	// 	$('.mb_t_1').html('');
	// 	$('.mb_t_2').html('');
	// 		var verb_random = Math.floor((Math.random() * ret.length) );
	// 		for(var q=0; q<ret[verb_random].length; q++){$('.mb_t_1').append('<span>'+ret[verb_random][q]+'</span>');};
	// 		for(var j=0; j<ret2[verb_random].length; j++){$('.mb_t_2').append('<span>'+ret2[verb_random][j]+'</span>');};
	// 	}
	
	//Element's animation after StartAnimation 
	$.when(StartAnimation()).done(
		function() {
		   
		//    //Bike Animation
		//    $('.bike').hover(
		// 		function(){TweenMax.to(bike, 1.2, {css:{left:"23%"}, repeat:-1, yoyo:true,ease:Quad.easeInOut , repeatDelay:.34});$('.tire_run').fadeTo(0.1,1);$('.tire').fadeTo(0.1,0);},
		// 		function(){TweenMax.to(bike, 0.2, {left:0});$('.tire').fadeTo(0.1,1);$('.tire_run').fadeTo(0.1,0);}
		// 		)
				
		// 	//Macbook Animation
		// 	verb_ran();
		// 	$('.mb').hover(
		// 		function(){
		// 			mb_text = $('.mb .kul_text span');
		// 			TweenMax.staggerTo(mb_text, 0.3, {alpha:1}, 0.08);
		// 			},
		// 		function(){
		// 			mb_text = $('.mb .kul_text span');
		// 			TweenMax.killTweensOf(mb_text);TweenMax.to(mb_text, 0.1, {alpha:0}, 0.1);
		// 			verb_ran();
		// 			}
		// 		)
			
		}
	);
	
	//Portfolio hover
	$('.a_portfolio').hover(
		
		function(){
				$(this).find('.grey_back').stop().fadeTo(180,0);	
				$(this).find('.pf_index').stop().removeClass('bw');
			},
			
		function(){
				$(this).find('.grey_back').stop().fadeTo(180,0.85);
				$(this).find('.pf_index').stop().addClass('bw');
			}
	)
	/*Portfolio link hover
	$('.a_portfolio').hover(
		
		function(){
				
				$(this).find('.pf_detail_ico').stop().animate({'top':'0','opacity':'1'},280,'easeOutCubic');
				$(this).find('.detail').stop().fadeTo(180,0);
			},
			
		function(){
				$(this).find('.pf_detail_ico').stop().animate({'top':'-40px','opacity':'0.3'},280,'easeOutCubic');
				$(this).find('.detail').stop().fadeTo(180,1);
			}
	)
	*/
	
	//Click to Anchor
	$('.main_menu li a').on('click', function() {
		var scrollAnchor = $(this).attr('data-scroll'),scrollPoint = $('.scrollto_sec[data-anchor="' + scrollAnchor + '"]').offset().top;
		$('html,body').animate({
			scrollTop: scrollPoint
		}, 1000,'easeInOutQuart');
		return false;
	})
	
	//Skrollr init
	//skrollr.init({forceHeight: false});
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){}else{skrollr.init({edgeStrategy: 'set',forceHeight: false,});}
	
	/*
	$(window).scroll(function() {
		var height_dec = $(window).scrollTop()+$(window).height();
		var wwa_dec = $('.wwa').position().top+$('.wwa').height();
		$('.tetete').html(height_dec);
		$('.tetete2').html(wwa_dec);
	}).scroll();
	*/					   
});
