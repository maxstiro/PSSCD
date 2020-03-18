
var elementoTop = $("#navbar").offset().top;
$(window).scroll(function(){
    var documentTop = $(document).scrollTop();
    $( "#navbar" ).toggleClass( 'fixed-top', documentTop > elementoTop);
    if($("#navbar").hasClass('nav-invisible')){

    }
});

var elementoTop = $("#navbar2").offset().top;
$(window).scroll(function(){
    var documentTop = $(document).scrollTop();
    $( "#navbar2" ).toggleClass( 'nav-invisible', documentTop > elementoTop);
});

$('#navbar a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset - 40
    }, 500);
});

