$(document).ready(function(){
	var url = "clean_siteIndex.html";
	$('#runner').runner({
    	countdown: true,
    	startAt: 12 * 60 * 1000,
    	stopAt: 0
	}).on('runnerFinish', function(eventObject, info) {
    	$(location).attr('href', url);
	});
});