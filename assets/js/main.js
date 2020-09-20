$(document).ready(function() {

    $('.menu-button').click(function() {
        $('.links, .overlay').toggleClass('display');
    })
    
    $('.overlay').click(function() {
        $('.links, .overlay').removeClass('display');
    })

})