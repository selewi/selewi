$(document).ready(() => {
	$('body')
		.addClass ('fade-in')
		.removeClass('d-none');

	$('[data-toggle="tooltip"]').tooltip();

	$('[data-toggle="lightbox"]').click((e) => {
        e.preventDefault();
        $(e.currentTarget).ekkoLightbox({
        	alwaysShowClose: true
        });
    });

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

	$('#age-span').text (getAge("4/20/1996"));
});

function getAge(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    return age;
}