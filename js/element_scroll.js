$(window).scroll(function(){
  var winScroll = $(this).scrollTop();
  if(winScroll > $('.gallery_images').offset().top - ($(window).height()/1.15)){
    $('.gallery_images figure').each(function(i){
      setTimeout(function(){
        $('.gallery_images figure').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });
  }
  if(winScroll > $('#aboutElementLeft').offset().top - ($(window).height()/1.15)){
    $('#aboutElementLeft').each(function(i){
      setTimeout(function(){
        $('#aboutElementLeft').eq(i).addClass('activated');
      }, 150 * (i+1));
    });
  }else{
 	$('#aboutElementLeft').removeClass('activated');
  } 
  if(winScroll > $('#aboutElementRight').offset().top - ($(window).height()/1.15)){
    $('#aboutElementRight').each(function(i){
      setTimeout(function(){
        $('#aboutElementRight').eq(i).addClass('activated');
      }, 150 * (i+1));
    });
  }else{
 	$('#aboutElementRight').removeClass('activated');
  } 
  if(winScroll > $('#businessPlanElementLeft').offset().top - ($(window).height()/1.15)){
    $('#businessPlanElementLeft').each(function(i){
      setTimeout(function(){
        $('#businessPlanElementLeft').eq(i).addClass('activated');
      }, 150 * (i+1));
    });
  }else{
 	$('#businessPlanElementLeft').removeClass('activated');
  } 
  if(winScroll > $('#businessPlanElementRight').offset().top - ($(window).height()/1.15)){
    $('#businessPlanElementRight').each(function(i){
      setTimeout(function(){
        $('#businessPlanElementRight').eq(i).addClass('activated');
      }, 150 * (i+1));
    });
  }else{
 	$('#businessPlanElementRight').removeClass('activated');
  } 
  if(winScroll > $('#schematicsElementLeft').offset().top - ($(window).height()/1.15)){
    $('#schematicsElementLeft').each(function(i){
      setTimeout(function(){
        $('#schematicsElementLeft').eq(i).addClass('activated');
      }, 150 * (i+1));
    });
  }else{
 	$('#schematicsElementLeft').removeClass('activated');
  } 
  if(winScroll > $('#schematicsElementRight').offset().top - ($(window).height()/1.15)){
    $('#schematicsElementRight').each(function(i){
      setTimeout(function(){
        $('#schematicsElementRight').eq(i).addClass('activated');
      }, 150 * (i+1));
    });
  }else{
 	$('#schematicsElementRight').removeClass('activated');
  } 
  if(winScroll > $('#modelElementLeft').offset().top - ($(window).height()/1.15)){
    $('#modelElementLeft').each(function(i){
      setTimeout(function(){
        $('#modelElementLeft').eq(i).addClass('activated');
      }, 150 * (i+1));
    });
  }else{
 	$('#modelElementLeft').removeClass('activated');
  } 
  if(winScroll > $('#modelElementRight').offset().top - ($(window).height()/1.15)){
    $('#modelElementRight').each(function(i){
      setTimeout(function(){
        $('#modelElementRight').eq(i).addClass('activated');
      }, 150 * (i+1));
    });
  }else{
 	$('#modelElementRight').removeClass('activated');
  } 
  if(winScroll > $('#purposeElementCenter').offset().top - ($(window).height()/1.15)){
    $('#purposeElementCenter').each(function(i){
      setTimeout(function(){
        $('#purposeElementCenter').eq(i).addClass('activated');
      }, 150 * (i+1));
    });
  }else{
 	$('#purposeElementCenter').removeClass('activated');
  } 
  if(winScroll > $('#contactElementCenter').offset().top - ($(window).height()/1.15)){
    $('#contactElementCenter').each(function(i){
      setTimeout(function(){
        $('#contactElementCenter').eq(i).addClass('activated');
      }, 150 * (i+1));
    });
  }else{
 	$('#contactElementCenter').removeClass('activated');
  }     
});





