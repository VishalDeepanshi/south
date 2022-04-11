$('#advisor').ready(function() {
    $(".owl-carousel").owlCarousel({
        // stagePadding: 50,
        loop: true,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

});
$('#review').ready(function() {
    $(".owl-carousel").owlCarousel({
        stagePadding: 50,
        loop: false,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

});