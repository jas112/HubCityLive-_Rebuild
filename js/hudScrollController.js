$(window).scroll(function(){
  var winScroll = $(this).scrollTop();
  console.log("winScroll = ",winScroll);
  // $('#starField1').css({
  //   'transform': 'translate(0px, -'+ winScroll/3280 +'%)'
  // });
  $('#hudElementLeft').css({
    // 'transform': 'translate(0px, -'+ winScroll/46 +'%)'
    'transform': 'rotate(-'+ winScroll/35 +'deg)'
  });
    $('#hudElementRight').css({
    // 'transform': 'translate(0px, -'+ winScroll/46 +'%)'
    'transform': 'rotate(-'+ winScroll/35 +'deg)'
  });

});