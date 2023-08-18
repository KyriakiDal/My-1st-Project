$(document).ready(function () {
    $(".burger").click(function () {
        $(".menu").toggleClass("showmenu");
    });

    $("#photo-carousel").owlCarousel({    
        margin: 0,
        nav: false,
        dots: false,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 5,
          },
        },
    });

    $("#metrics-carousel").owlCarousel({    
        margin: 0,
        nav: false,
        dots: false,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 5,
          },
        },
    });


});
