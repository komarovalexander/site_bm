$(document).ready(function(){

	$("#portfolio-work .cell:not(.main)").click(function(){
		var item = $(this);
		if($("header .navbar-default .navbar-toggle").css("display") == "none"){
			item.off("click");
			item.animate({
			    width: $(".cell.main").width()
			  }, 200, function() {
			  		item.removeAttr("style");
					item.addClass("main");
			  });
			$('html, body').animate({
	            scrollTop: item.offset().top + 'px'
	        }, 'fast');
		}
	});

});




