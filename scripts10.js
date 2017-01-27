$(function(){   
    
    $('.js--show-alert').click(function(){
		$('.js--alert').slideDown("fast");
	});

	$('.js--alert-close').click(function(){
		$('.js--alert').slideUp("fast");
	});

	

	$('.js--show-alert2').click(function(){
		$('.js--alert2').slideDown("fast");
	});

	$('.js--alert-close2').click(function(){
		$('.js--alert2').slideUp("fast");
	});

	

	$('.js--show-alert3').click(function(){
		$('.js--alert3').slideDown("fast");
	});

	$('.js--alert-close3').click(function(){
		$('.js--alert3').slideUp("fast");
	});

	

	$('.js--show-alert4').click(function(){
		$('.js--alert').slideDown("fast");
	});

	$('.js--alert-close').click(function(){
		$('.js--alert').slideUp("fast");
	});

	

	$('.js--show-alert5').click(function(){
		$('.js--alert').slideDown("fast");
	});

	$('.js--alert-close').click(function(){
		$('.js--alert').slideUp("fast");
	});


    $(".button").click(function(){
	alert("this worked!");
     });
});

function process(){
    var color=document.getElementById("color").value;
    document.body.style.backgroundColor=color;
}
