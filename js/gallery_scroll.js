$(window).scroll(function(){
  var winScroll = $(this).scrollTop();
  if(winScroll > $('.gallery_images').offset().top - ($(window).height()/1.15)){
    $('.gallery_images figure').each(function(i){
      setTimeout(function(){
        $('.gallery_images figure').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });
  }

});