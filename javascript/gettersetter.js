$(document).ready(function(){

    // now all working as a getter -- to get values

    // -------- text - to know the internal value
    var a = $('.container h1').text();
    // console.log(a);

    // ------------- html
    // to get tags elements
    var b = $('.container').html();
    // console.log(b);

    //--------- attr - to get value of an attribute
    // whatever we have written in class we get
    // var c = $('.container').attr('class');
    var c = $('#myform div label').attr('for');
    console.log(c);

    // ----------- val - to get value of an element
    $('#myform').submit(function(){
        var uname = $('#username').val();
        var upass = $('#password').val();
        alert('Your Credentials are: '+ uname +' '+ upass);
    })

// ------------------------------------------------------------ SETTER
// now using setter for '.text' we can change heading
$('.setter').click(function(){
    $('.box h3').text("Heading Change");
    $('.box p').html("Change this Content<br><a href='' class='btn btn-info'>link</a>");
    // now set the href using attr 
    $('.box a').attr('href', 'https://github.com/ayushgupta6387');
});
$('.setterprevious').click(function(){
    $('.box h3').text("Text Heading")
});

// set the form values
$('#username').val('ayush');
$('#password').val('@#$%^');


// ---------------------------------------------- CLASS METHODS
$('.addClass').click(function(){
    // now add class when onclick on button
    $('.box1').addClass('bg-warning');
});
$('.removeClass').click(function(){
    // now add class when onclick on button
    $('.box1').removeClass('bg-warning');
});
$('.toggleClass').click(function(){
    // now add class when onclick on button
    $('.box1').toggleClass('bg-warning text-danger');
});

// ---------------------------------------------- jQuery Methods

// add items dynamically
$('ul').append('<li>New List Items</li>');
// to move the element on top
$('ul').prepend('<li>New List Items</li>');
// before after
$('ul').before('<p>I am a Paragraph</p>');
$('ul').after('<p>I am a Paragraph</p>');
// remove
// $('p').remove();
// to remove only last element
$('p:last').remove();
// to remove whole list (it will remove whole ul)
// $('ul').remove();
// it will remove li but ul will remain
$('ul').empty();

});