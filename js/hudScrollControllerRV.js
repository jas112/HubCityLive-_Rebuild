$(window).scroll(function(){
  var winScroll = $(this).scrollTop();
  console.log("winScroll = ",winScroll);
  // $('#hudGrid0').css({
  //   'transform': 'translate(0px, -'+ winScroll/400 +'%)'
  // });
  // $('#hudGridA').css({
  //   'transform': 'translate(0px, -'+ winScroll/200 +'%)'
  // });
    $('#hudGridBR').css({
    'transform': 'translate(0px, -'+ winScroll/400 +'%)'
  });
    $('#hudCenterPoint').css({
    'transform': 'rotate(-'+ winScroll/35 +'deg)'
  });
    $('#hudCenterCircle').css({
    'transform': 'rotate('+ winScroll/35 +'deg)'
  });
});