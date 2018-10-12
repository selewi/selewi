$(document).ready(() => {
	$('[data-toggle="tooltip"]').tooltip();

	$('.btn-transition').click((e) => {
		e.preventDefault ();
		
		$('body').addClass ('fade-out');

		setTimeout(function(){
		    window.location = $(e.target).attr("href");
		}, 450);
	});
});