
var $popup = $('#brain-popup');
var popup = document.getElementById("brain-popup");
var height = $popup.height();

function setImage(that) {
	var id = $(that).attr('id');
	var image = './Pictures/' + id + '.jpg';
	popup.src = image;
	setTimeout(showImage, 50);
}

function moveImage(x, y) {
	var width = $popup.width();
	$popup.css({
		'left': x - (width / 2),
		'top': y - (height/ 2)
	});
}

function mouseShowImage(event) {
	setImage(this);
	moveImage(event.pageX, event.pageY);
}

function showImage(event) {
	$popup.removeClass('brain-hidden');
}

function hideImage(event) {
	$popup.addClass('brain-hidden');
}

$('.brain-text').click(mouseShowImage);
$('#brain-popup').on('mouseleave', hideImage);
