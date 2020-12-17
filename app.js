// ---------------------------------------------------------- EVENTS

$(document).ready(function(){
    // Mouse Events
    // click
    // when we click on box then color changes
    $('.box').click(function(){
        $('.box').css('background-color', 'lightpink');
    });
    // when double click color changes
    $('.box').dblclick(function(){
        $(this).css('background-color', 'lightblue');
    });
    // contextment
    $('.box').contextmenu(function(){
        $(this).css({'background-color' : 'orange', 'color':'red'});
    });
    // mouseenter when we take mouse cursor on box
    $('.box').mouseenter(function(){
        $(this).css({'background-color' : 'gray', 'color':'red'});
    });
    // mouseleave  when we move out mouse cursor on box
    $('.box').mouseleave(function(){
        $(this).css({'background-color' : 'lightgreen', 'color':'red'});
    });

// ------------------------------- Keyboard Events

// keypress - when we press any key on browser page
$('body').keypress(function(){
    $(this).css('background-color', 'blue')
});
// keyup when we release pressed key
$('body').keyup(function(){
    $(this).css('background-color', 'yellow')
});
// keydown
$('body').keydown(function(){
    $(this).css('background-color', 'red')
});

// ------------------------------ form events

// focus
$('#username, #password, #age').focus(function(){
    $(this).css('background-color', 'red')
});

// blur this events work when we move out from focus (to remove focus event properties)
$('#username, #password, #age').blur(function(){
    $(this).css('background-color', '')
});

// change when value of input element change-- with checkboxlist option choice, radiobuttons
$('#age').change(function(){
    // fetch the selected value
    var a = $(this).val();
    // display the value
    $('.content').html("Your Age: "+ a ).show().fadeOut(3000);
});

// select
$('.copy').click(function(){
    $('#username').select();
    document.execCommand("copy");
    // alert("Data Copied: "+ $('#username').val());
    // display the data also
    $('.content').html("Your name is "+ $('#username').val());
});

// submit

$('#myform').submit(function(){
    alert("Data Submitted Successfully");
})

});