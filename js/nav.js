$(document).ready(() => {
	let activeElem = $('#navbar').attr ('active');

    renderNavbar ($('#navbar'));

    $(`#${activeElem}`).addClass ('active');
    $(`#${activeElem}`).removeClass ('btn-transition');
    $(`#${activeElem}`).attr ('href', '#');
});

function renderNavbar ($container) {
	let nav = $('<nav class="navbar navbar-expand-lg navbar-dark bg-dark"></nav>');
	$(nav).append ('<a class="navbar-brand btn-transition" href="../index.html">T. Esconjaureguy</a>');

	let btnToggler = $('<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"></button>')
	$(btnToggler).append ('<span class="navbar-toggler-icon"></span>');
	$(nav).append (btnToggler);

	let collapse = $('<div class="collapse navbar-collapse" id="navbarNavAltMarkup"></div>');
	let navigation = $('<div class="navbar-nav">');

	$(navigation).append (renderItem ('../index.html','About'));
	$(navigation).append (renderDropdownGames ());
	$(navigation).append (renderDropdownSoftware ());

	$(collapse).append (navigation);
	$(nav).append (collapse);

	$container.append (nav);
}

function renderDropdownGames () {
	let dropdown = $('<li class="nav-item dropdown">');
	let btn = $('<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Games</a>');
	let menu = $('<div class="dropdown-menu" aria-labelledby="navbarDropdown">');

	$(menu).append (renderDropdownHeader ('Personal'));
	$(menu).append (renderDropdownItem ('wool-pit', '../projects/wool-pit.html', '<i class="fas fa-award text-warning" data-toggle="tooltip" data-placement="left" title="1st place - Hardcore Punk Jam"></i> Wool pit'));
	$(menu).append (renderDropdownItem ('necroreaper', '../projects/necroreaper.html', '<i class="fas fa-award text-muted" data-toggle="tooltip" data-placement="left" title="2nd place - Game Dev Network Jam"></i> Necroreaper'));
	$(menu).append (renderDropdownItem ('pixo-runner', '../projects/pixo-runner.html', 'Pixo Runner'));
	$(menu).append (renderDropdownItem ('pink-cookie-cat', '../projects/pink-cookie-cat.html', 'Pink Cookie Cat'));
	$(menu).append (renderDropdownItem ('starship-v24h', '../projects/starship-v24h.html', 'Starship v24h'));
	$(menu).append ('<div class="dropdown-divider"></div>');
	$(menu).append (renderDropdownHeader ('Freelance'));
	$(menu).append (renderDropdownItem ('itsy-bitsy-spider', '../projects/itsy-bitsy-spider.html', 'Itsy Bitsy Spider'));

	$(dropdown).append (btn);
	$(dropdown).append (menu);

	return dropdown;
}

function renderDropdownSoftware () {
	let dropdown = $('<li class="nav-item dropdown">');
	let btn = $('<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Software</a>');
	let menu = $('<div class="dropdown-menu" aria-labelledby="navbarDropdown">');

	$(menu).append (renderDropdownHeader ('Freelance'));
	$(menu).append (renderDropdownItem ('inclima', '../projects/inclima.html', 'Inclima'));

	$(dropdown).append (btn);
	$(dropdown).append (menu);

	return dropdown;
}

function renderItem (href, text) {
	let item = $('<li class="nav-item"></li>');
	return $(item).append (`<a href="${href}" class="nav-link btn-transition">${text}</a>`);
}

function renderDropdownHeader (text) {
	return $(`<span class="dropdown-item"><b>${text}</b></span>`);
}

function renderDropdownItem (id, href, text) {
	return $(`<a id="${id}" class="dropdown-item btn-transition" href="${href}">${text}</a>`);
}