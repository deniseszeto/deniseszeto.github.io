$(document).ready(function() {

	//function to be able to scroll left and right with the mouse
	$(function() {
  		 $("body").mousewheel(function(event, delta) {
      		this.scrollLeft -= (delta * 30);
     		 event.preventDefault();
     		});
  		});

	//profile about me picture hover opacity 
	$('#profile').hover(function(){
			$(this).css('opacity',0.5);
			$(this).data('bounce', true); bounce($(this));
		},function(){
			$(this).css('opacity',1);
			$(this).data('bounce', false)
	})


	//circle navigation timeline on bottom to scroll to pages 
	$('a').click(function(){
	    $('html, body').animate({scrollLeft: $( $.attr(this, 'href')).offset().left}, 800);
      	return false;
	});


	//open the project envelope
	$('.envelope').click(function(){
		if ($('.envelope').attr('src')== "assets/images/envelope-closed2.png"){
			  $( '.project-container').animate({
			    top: "-=180",
			  }, 2500, function() {
			  });
			$('.envelope').attr({src: "assets/images/envelope-open-bottom.png"});
			$('#envelope-top').removeClass('hide');
			$('#click-me').addClass('hide');
		}else{
			  $( '.project-container').animate({
			    top: "+=180",
			  }, 2500, function() {
			  });		  
    		setTimeout(function() {
				$('.envelope').attr({src: "assets/images/envelope-closed2.png"});
				$('#envelope-top').addClass('hide');
				$('#click-me').removeClass('hide');
				if(!$('#p1').hasClass('hide')){
					$('#p1').addClass('hide');
				}
				if(!$('#p2').hasClass('hide')){
					$('#p2').addClass('hide');
				}
				if(!$('#p3').hasClass('hide')){
					$('#p3').addClass('hide');
				}
			},2500);
		}
	});

	//project hover opacity functions
	$('#one').hover(function(){
			$(this).css('opacity',0.5);
		},function(){
			$(this).css('opacity',1);
	});
	
	$('#two').hover(function(){
			$(this).css('opacity',0.5);
		},function(){
			$(this).css('opacity',1);
	});
	
	$('#three').hover(function(){
			$(this).css('opacity',0.5);
		},function(){
			$(this).css('opacity',1);
	});

	//project display information upon clicking 

	$('#one').click(function(){
		$('#p1').removeClass('hide');

		if(!$('#p2').hasClass('hide')){
			$('#p2').addClass('hide');
		}
		if(!$('#p3').hasClass('hide')){
			$('#p3').addClass('hide');
		}
	});
	
	$('#two').click(function(){
		$('#p2').removeClass('hide');

		if(!$('#p1').hasClass('hide')){
			$('#p1').addClass('hide');
		}
		if(!$('#p3').hasClass('hide')){
			$('#p3').addClass('hide');
		}
	});
	
	$('#three').click(function(){
		$('#p3').removeClass('hide');

		if(!$('#p2').hasClass('hide')){
			$('#p2').addClass('hide');
		}
		if(!$('#p1').hasClass('hide')){
			$('#p1').addClass('hide');
		}
	});


	//project carousel
	$('#next1').click(function(){
    var left = parseInt($('#carousel1').css('margin-left').replace("px", ""));
    if (left == -1600){
      return false;
    }else{
      $('#carousel1').css('margin-left', left-800);
    }
  })
  $('#prev1').click(function(){
    var left = parseInt($('#carousel1').css('margin-left').replace("px", ""));
    if (left == 0){
      return false;
    }else{
      $('#carousel1').css('margin-left',left+800);
    }
  });


  $('#next2').click(function(){
    var left = parseInt($('#carousel2').css('margin-left').replace("px", ""));
    if (left == -1600){
      return false;
    }else{
      $('#carousel2').css('margin-left', left-800);
    }
  });
  $('#prev2').click(function(){
    var left = parseInt($('#carousel2').css('margin-left').replace("px", ""));
    if (left == 0){
      return false;
    }else{
      $('#carousel2').css('margin-left',left+800);
    }
  });


	$('#next3').click(function(){
    var left = parseInt($('#carousel3').css('margin-left').replace("px", ""));
    if (left == -1600){
      return false;
    }else{
      $('#carousel3').css('margin-left', left-800);
    }
  });
  	$('#prev3').click(function(){
    var left = parseInt($('#carousel3').css('margin-left').replace("px", ""));
    if (left == 0){
      return false;
    }else{
      $('#carousel3').css('margin-left',left+800);
    }
  });


});