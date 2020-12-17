$(document).ready(function (){

    // hide
    $('#hide').click(function(){
        $('.container').hide();
    });
    // show
    $('#show').click(function(){
        $('.container').show();
    });
    // toggle
    $('#toggle').click(function(){
        $('.container').toggle();
    });
    // fadeOut fadeIn
    $('#fadeOut').click(function(){
        $('.container').fadeOut(1000, function(){
            $('#fadeOut').text("Disappear!")
        });
          
    });
    // fadeIn
    $('#fadeIn').click(function(){
        $('.container').fadeIn();
    });
    // fadeToggle
    $('#fadeToggle').click(function(){
        $('.container').fadeToggle();
    });

    // slideUp
    $('#slideUp').click(function(){
        $('.container').slideUp(1000);
    });
    // slideDown
    $('#slideDown').click(function(){
        $('.container').slideDown(1000);
    });
    // slideToggle
    $('#slideToggle').click(function(){
        $('.container').slideToggle(3000);
    });
    // stop - to stop animation in between
    $('#stop').click(function(){
        $('.container').stop(1000);
    });

    $('#moveLeft').click(function(){
        $('.container2').animate({
            left: 500,
            height: '300px',
            width: '300px',
            opacity: '0.5'
        });
    });
    $('#moveRight').click(function(){
        $('.container2').animate({
            left: 500,
            height: '300px',
            width: '300px',
            opacity: '0.5'
        });
    });
    $('#moveLeft').click(function(){
        $('.container2').animate({
            left: 0,
            height: '100px',
            width: '100px',
            opacity: '1'
        });
    });
    $('#moveAround').click(function(){
        var box = $('.container2');
        box.animate({
            left: 300,
        });
        box.animate({
            top: 300,
        });
        box.animate({
            left: 0,
            top: 300
        });
        box.animate({
            left: 0,
            top: 0
        });
    });

});