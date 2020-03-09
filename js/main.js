$(document).ready(function() {

    var slideUp = {
        distance: '150%',
        origin: 'bottom',
        distance: '100px',
        interval: '500'
    };

    var slideLeft = {
        distance: '150%',
        origin: 'right',
        distance: '100px',
        interval: '500'
    };

    var slideRight = {
        distance: '150%',
        origin: 'left',
        distance: '100px',
        interval: '500'
    };
    
    ScrollReveal().reveal('.numbers-card', slideUp);
    ScrollReveal().reveal('.accordion .card', slideLeft);
    ScrollReveal().reveal('.how-card', slideUp);
    ScrollReveal().reveal('.who-profile.left', slideRight);
    ScrollReveal().reveal('.who-profile.right', slideLeft);

    $('.accordion .collapse').on('shown.bs.collapse', function () {
        $('.accordion .card-header button .card-icon').addClass('open');
    });
     
    $('.accordion .collapse').on('hidden.bs.collapse', function () {
        $('.accordion .card-header button .card-icon').removeClass('open');
    });

    $('.navbar-menu-icon').click(function() {
        $(this).toggleClass('open-menu');
        $('.navbar-collapsed').toggleClass('open-collapsed');
        $('.navbar').toggleClass('hide-nav');
        $('body').toggleClass('overflow-hidden');
    })

    $('.home-left').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.tab-pane-gallery').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    });
});