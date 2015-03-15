$(function() {
	$('.loginButton').click(function (e) { 
		if ($(".Username").val()=="joshuakimble" && $(".Password").val()=="asdfjkl;") {
			$('.pop-up').fadeOut(700);
			$('#overlay').removeClass('blur-in');
			$('#overlay').addClass('blur-out');
			e.stopPropagation();
		};
	});
});