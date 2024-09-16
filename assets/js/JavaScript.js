// window scroll JQUERY
$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    if(scrollTop >= 100) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header')
    }
});

// Document Ready TYPED.JS
$(document).ready(function(){
    // Typing animation
    new Typed('#type-it', {
        strings: ['Web Developer', 'Ai Engineer', 'Software Developer'],
        typeSpeed: 50,
        loop: true
    });

    // Slide
    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 2,
        margin:10,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive:{
            0:{
                items:1
            },
            900:{
                items:2
            },
        }
    })
});