

function addImage(image, link, like, caption){

	var $div = $("<div>");
	var $Annotation = $("<h1>").text(caption);
	var $LINK = $("<a>").attr("href", link);
	var $IMAGE = $("<img>").attr("src", image);
	var $LIKE = $("<span>").text(like);
	
	var $image_link = $LINK.append($IMAGE);
	
	$div.append($LINK).append($image_link).append($LIKE);
	
}

addImage("http://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11055772_1558157594448054_879696703_n.jpg", "https://instagram.com/p/0lOFZ0g8gA/", 720, "just for test");