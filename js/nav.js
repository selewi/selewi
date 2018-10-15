$(document).ready(() => {
    let content = $('link[rel="import"]').get(0).import;
    let el = $(content).find('nav').get(0);
    let navContainer = $('#navbar');

    $('#navbar').append(el.cloneNode(true));
    
    $(`#${navContainer.attr('active')}`).addClass('active');
    $(`#${navContainer.attr('active')}`).href('#');
});