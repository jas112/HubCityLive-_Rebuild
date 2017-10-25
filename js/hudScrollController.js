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
    $('#hudElementLeft2').css({
    // 'transform': 'translate(0px, -'+ winScroll/46 +'%)'
    'transform': 'rotate('+ winScroll/35 +'deg)'
  });
    $('#hudElementLeft3').css({
    // 'transform': 'translate(0px, -'+ winScroll/46 +'%)'
    'transform': 'rotate(-'+ winScroll/15 +'deg)'
  });  
    $('#hudElementRight').css({
    // 'transform': 'translate(0px, -'+ winScroll/46 +'%)'
    'transform': 'rotate(-'+ winScroll/35 +'deg)'
  });
    $('#hudElementRight2').css({
    // 'transform': 'translate(0px, -'+ winScroll/46 +'%)'
    'transform': 'rotate('+ winScroll/35 +'deg)'
  });
    $('#hudElementRight3').css({
    // 'transform': 'translate(0px, -'+ winScroll/46 +'%)'
    'transform': 'rotate(-'+ winScroll/15 +'deg)'
  });
});