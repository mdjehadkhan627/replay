
$(document).ready(function() {
	$('#nav').onePageNav({

        currentClass: 'current'
    });

    $('.slick').slick({
    slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
        
      });


      $('.video-slick').slick({
        slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
            
          });
    





$(window).on('scroll',function(){

    if($(this).scrollTop()> 20){
        $('.header-area').addClass('stycky');
    }else{
        $('.header-area').removeClass('stycky');

    }
})
});