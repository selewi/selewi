$(document).ready(() => {
    let content = $('link[rel="import"]').import;
    let el = $('nav');
    let navContainer = $('navbar');

    $('navbar').append(el.cloneNode(true));
    $(`#${navContainer.attr('active')}`).addClass('active');
});