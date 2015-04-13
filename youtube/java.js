 
function showModal(video){
		$(".modal").empty();
	
  var title = video.snippet.title;
  var thumbnail = video.snippet.description;
  
  var $div = $("<div>"),addClass("video");
  
  var $title = $("<h4>").text(title);
  var $image = $("<p>").text(description);
  
  $div.append($image).append($description);
  
  $(".modal").append($div);
  $(".overlay").show();
  $(".modal").show();
  
  
  $(".container").append($div);
  
}
  
  
  function loadYoutube(videosData)
  { addVideo(videosData.items[0]);
    addVideo(videosData.items[1]);
    addVideo(videosData.items[2]);
    addVideo(videosData.items[3]);
  
  
  
}


function hideModal(video) {
  $(".overlay").hide();
  $(".modal").hide();
}


