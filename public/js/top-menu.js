      $(document).ready(function() {
 
        //Calculate the height of <header>
        //Use outerHeight() instead of height() if have padding
        var aboveHeight = $('header').outerHeight();
 
  //when scroll
        $(window).scroll(function(){
 
          //if scrolled down more than the header’s height
                if ($(window).scrollTop() > aboveHeight){

                  $('nav').addClass('navbar-fixed-top');
                  $('nav').addClass('back-black');
 
                } else {
                  $('nav').removeClass('navbar-fixed-top');
                  $('nav').removeClass('back-black');
                }


        });
});