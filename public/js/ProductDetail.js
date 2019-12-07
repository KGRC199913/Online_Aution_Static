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
    $('#sellerRating').attr('value', 4.5);
    $('#bidderRating').attr('value', 5);
    $('input.rateInput').rating(
       {
           min: 1,
           max: 5,
           step: 0.5,
           size: 'sm',
           displayOnly: true,
       }
   );
});