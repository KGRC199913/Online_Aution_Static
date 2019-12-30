$(document).ready(function () {
    $('.similar-carousel').slick({
        slidesToShow: 3,
        infinite: true,
        dots: true,
        lazyLoad: 'ondemand',
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('div.rate').rateYo({
        starWidth: "20px",
        maxValue: 5,
        step: 0.5,
        halfStar: true,
        readOnly: true
    });
    $('#seller-rating').rateYo("option", "rating", 4.5);
    $('#bidder-rating').rateYo("option", "rating", 5);

});