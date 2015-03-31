

function addImage(image, link, like, caption){

	var $div = $("<div>");
	var $caption = $("<h1>").text(caption);
	var $link = $("<a>").attr("href", link);
	var $image = $("<img>").attr("src", image);
	var $like = $("<span>").text(like);

	
	$link.append($image);
	$div.append($link).append($image).append($like).append($caption);
	$("#container").append($div);
}

addImage("http://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11055772_1558157594448054_879696703_n.jpg",
        "https://instagram.com/p/0lOFZ0g8gA/",
   "720", 
		"منشن الي تبيه يشوف المقطع"

	);

addImage("http://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11055442_1387234548264057_209258360_n.jpg",
        "https://instagram.com/p/0lS-LWTbw9/",
        "432", "RCF x VFS2 - pic via @kdot_vossen #FreeBuju #Vossen #CarsWithoutLimits");
addImage("http://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s150x150/e15/10919675_944043618953681_1961747465_n.jpg",
        "https://instagram.com/p/0lTX-pqkcC/",
        "543", "Сегодня была на прекрасном мероприятии #soundkids");
addImage("http://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11055616_1568588500090432_546823562_n.jpg",
        "https://instagram.com/p/0lNgG4st5V/",
        "344", "Are your tubes in good shape?");


function drawImages(data){
	var item = data.data[9];
	console.log(item);
	
	var images = item.images.thumbnail.url;
	console.log(images);
	
	var comment = item.comment.data.text;
	console.log(comment);
}