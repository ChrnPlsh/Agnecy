$(document).ready(function () {
    $('.projImg').mouseover(function () {
        $(this).find('.thumbnail').stop().fadeIn()
    });
    $('.projImg').mouseout(function () {
        $(this).find('.thumbnail').stop().fadeOut()
    });
});