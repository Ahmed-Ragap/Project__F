$(document).ready(function() {


/*this for adding class active to links */
 $('.main-menu').click(function() {
$('nav').toggleClass('active');
$('body').toggleClass('style');

});

     /*this for scroll button to top*/
     /*  $(window).on('scroll', function() {
        if (Math.round($(window).scrollTop()) >= 20) {
            $('nav').addClass('scroll');
        } else {
            $('nav').removeClass('scroll');
        }
      }); */

   
/*this for scrolling all nav li*/
$('nav ul li:nth-of-type(1)').click(function() {
          $('html, body').animate({
      scrollTop: ($('header').offset().top)
      },1500);
      });
   $('nav ul li:nth-of-type(2)').click(function() {
          $('html, body').animate({
      scrollTop: ($('.about').offset().top )
      },1500);
      });

   $('nav ul li:nth-of-type(3)').click(function() {
          $('html, body').animate({
      scrollTop: ($('.service').offset().top )
      },1500);
      });

   $('nav ul li:nth-of-type(4)').click(function() {
          $('html, body').animate({
      scrollTop: ($('.info').offset().top )
      },1500);
      });
   $('nav ul li:nth-of-type(5)').click(function() {
          $('html, body').animate({
      scrollTop: ($('footer').offset().top)
      },1500);
      });


//this for page louding  when started or relouded
$( window ).on( "load", function() {
        $('.main-load').fadeOut(1000);
         $('.spinner').fadeOut(1000);
             $('body').css('overflow','auto');
     });

  });