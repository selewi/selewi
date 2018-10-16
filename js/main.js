$(document).ready(() => {
	$('body')
		.addClass ('fade-in')
		.removeClass('d-none');

	$('[data-toggle="tooltip"]').tooltip();

	$('.btn-transition').click((e) => {
		e.preventDefault ();
		
		$('body').addClass ('fade-out');

		setTimeout(() => {
			$('body').addClass ('d-none');
		    window.location = $(e.target).attr("href");
		}, 450);
	});

	$('img[data-src]').each ((i,img) => {
		$(img).attr ('src',$(img).attr('data-src'));
		$(img).on ('load', () => {
			$(img).removeAttr('data-src');
		});
	});
});