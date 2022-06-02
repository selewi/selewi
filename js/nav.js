$(document).ready(() => {
	let activeElem = $('#navbar').attr ('active');

    renderNavbar ($('#navbar'));
    renderFooter ($('#footer'));

    $(`#${activeElem}`).addClass ('active');
    $(`#${activeElem}`).removeClass ('btn-transition');
    $(`#${activeElem}`).attr ('href', '#');
});

function renderNavbar ($container) {
	let $nav = $('<nav class="navbar navbar-expand-lg navbar-dark bg-dark"></nav>');
	$nav.append ('<a class="navbar-brand btn-transition" href="../index.html">T. Esconjaureguy</a>');

	let $btnToggler = $('<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"></button>')
	$btnToggler.append ('<span class="navbar-toggler-icon"></span>');
	$nav.append ($btnToggler);

	let $collapse = $('<div class="collapse navbar-collapse" id="navbarNavAltMarkup"></div>');
	let $navigation = $('<div class="navbar-nav">');

	$navigation.append (renderItem ('../index.html','About'));
	$navigation.append (renderDropdownGames ());
	$navigation.append (renderDropdownSoftware ());

	$collapse.append ($navigation);
	$nav.append ($collapse);

	$container.append ($nav);
}

function renderDropdownGames () {
	let $dropdown = $('<li class="nav-item dropdown">');
	let $btn = $('<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Games</a>');
	let $menu = $('<div class="dropdown-menu" aria-labelledby="navbarDropdown">');

	$menu.append (renderDropdownHeader ('Personal'));
	$menu.append (renderDropdownItem ('tnots', 'https://store.steampowered.com/app/1975180/The_Night_of_the_Scissors/', 'The Night of the Scissors', true));
	$menu.append (renderDropdownItem ('aske', '../projects/aske.html', 'Aske'));
	$menu.append (renderDropdownItem ('morks-trial', '../projects/morks-trial.html', 'Mork\'s Trial'));
	$menu.append (renderDropdownItem ('rottenwood-lake', '../projects/rottenwood-lake.html', 'Rottenwood lake'));
	$menu.append (renderDropdownItem ('blood-n-goods', '../projects/blood-n-goods.html', 'Blood and Goods'));
	$menu.append (renderDropdownItem ('wool-pit', '../projects/wool-pit.html', '<i class="fas fa-award text-warning" data-toggle="tooltip" data-placement="left" title="1st place - Hardcore Punk Jam"></i> Wool pit'));
	$menu.append (renderDropdownItem ('necroreaper', '../projects/necroreaper.html', '<i class="fas fa-award text-muted" data-toggle="tooltip" data-placement="left" title="2nd place - Game Dev Network Jam"></i> Necroreaper'));
	// $menu.append (renderDropdownItem ('pixo-runner', '../projects/pixo-runner.html', 'Pixo Runner'));
	// $menu.append (renderDropdownItem ('spooks-escape', '../projects/spooks-escape.html', "Spook's Escape"));
	// $menu.append (renderDropdownItem ('pink-cookie-cat', '../projects/pink-cookie-cat.html', 'Pink Cookie Cat'));
	// $menu.append (renderDropdownItem ('starship-v24h', '../projects/starship-v24h.html', 'Starship v24h'));
	// $menu.append ('<div class="dropdown-divider"></div>');
	// $menu.append (renderDropdownHeader ('Freelance'));
	// $menu.append (renderDropdownItem ('itsy-bitsy-spider', '../projects/itsy-bitsy-spider.html', 'Itsy Bitsy Spider'));
	// $menu.append ('<div class="dropdown-divider"></div>');
	// $menu.append (renderDropdownHeader ('Prototypes'));
	// $menu.append (renderDropdownItem ('stellar-map', '../projects/stellar-map.html', 'Stellar Map'));

	$dropdown.append ($btn);
	$dropdown.append ($menu);

	return $dropdown;
}

function renderDropdownSoftware () {
	let $dropdown = $('<li class="nav-item dropdown">');
	let $btn = $('<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Software</a>');
	let $menu = $('<div class="dropdown-menu" aria-labelledby="navbarDropdown">');

	$menu.append (renderDropdownHeader ('Freelance'));
	$menu.append (renderDropdownItem ('inclima', '../projects/inclima.html', 'Inclima'));
	$menu.append (renderDropdownItem ('socio-espectador', '../projects/socio-espectador.html', 'Socio Espectador'));

	$dropdown.append ($btn);
	$dropdown.append ($menu);

	return $dropdown;
}

function renderItem (href, text) {
	let $item = $('<li class="nav-item"></li>');
	return $item.append (`<a href="${href}" class="nav-link btn-transition">${text}</a>`);
}

function renderDropdownHeader (text) {
	return $(`<span class="dropdown-item"><b>${text}</b></span>`);
}

function renderDropdownItem (id, href, text, externalLink = false) {
	return $(`<a id="${id}" class="dropdown-item ${externalLink ? "" : "btn-transition"}" href="${href}" target="${externalLink ? "_blank" : ""}">${text}</a>`);
}

function renderFooter ($container) {
	$container.append(`
		<footer class="py-5 bg-dark">
			<div class="container d-flex flex-column">
				<div class="col-12 text-center">
					<p class="text-white">Tomás Esconjaureguy • Game developer</p>
				</div>
			</div>
			<div class="container d-flex justify-content-center">
				<div class="col-lg-4 d-flex justify-content-around">
					<a href="https://twitter.com/selewidev" target="_blank" class="btn btn-icon btn-outline-light text-center"><i class="fab fa-twitter fa-lg fa-fw"></i></a>
					<a href="https://www.linkedin.com/in/tom%C3%A1s-esconjaureguy-39202a170/" target="_blank" class="btn btn-icon btn-outline-light text-center"><i class="fab fa-linkedin-in fa-lg fa-fw"></i></a>
					<a href="https://selewi.itch.io/" target="_blank" class="btn btn-icon btn-outline-light text-center"><i class="fas fa-gamepad fa-lg fa-fw"></i></a>
					<a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=esconjaureguy470@gmail.com&tf=1&body=Thank you for putting in contact with me :) ..." target="_blank" class="btn btn-icon btn-outline-light text-center"><i class="fas fa-envelope fa-lg fa-fw"></i></a>
				</div>
			</div>
		</footer>
	`);
}