$(document).ready(() => {
    let content = $('link[rel="import"]').get(0).import;
    let el = $('nav').get(0);
    let navContainer = $('navbar');

    $('navbar').append(el.cloneNode(true));
    $(`#${navContainer.attr('active')}`).addClass('active');
});