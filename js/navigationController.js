$('#footer').click(function(){
  var swapped = $(this).attr("data-swapped");
  var init = 'false';
  if(swapped === 'false'){
      var swapImage = $(this).attr("data-swap");
      init = true;
  }else{
      var swapImage = $(this).attr("data-src");
  }
  $(this).attr({
      'src': swapImage,
      'id': 'footer',
      'data-swapped': init
  });
  $('#navigation').fadeToggle('slow');
})
