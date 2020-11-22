function hideLoader(){
	$('#loading').hide();
}

$(window).ready(hideLoader);

setTimeout(hideLoader,20*1000);