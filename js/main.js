$(document).ready(() => {
    $(() => {
    	//Importa la barra de navegación y la coloca en la sección correspondiente
		var link = document.querySelector('link[rel="import"]');
        var content = link.import;
        var el = content.querySelector('nav');

        document.getElementById("navbar").appendChild(el.cloneNode(true));

      	//Llama asincrónicamente los scripts correspondientes a la barra de navegación lateral
        //$.getScript("../public/js_generales/navlateral.js")
    });

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