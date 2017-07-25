$(document).ready(function () {
	var spanDate = $('#date');
	
	d = new Date();
	y = d.getFullYear();

	spanDate.html(y);
});