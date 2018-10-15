$(document).ready(() => {
	$('body')
		.addClass ('fade-in')
		.removeClass('d-none');

	$('[data-toggle="tooltip"]').tooltip();
	$('.carousel').carousel();

	$('.btn-transition').click((e) => {
		e.preventDefault ();
		
		$('body').addClass ('fade-out');

		setTimeout(function(){
			$('body').addClass ('d-none');
		    window.location = $(e.target).attr("href");
		}, 450);
	});
});