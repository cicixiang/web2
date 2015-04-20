 
function showModal(video){
		$(".modal").empty();
	
  var title = video.snippet.title;
  var description = video.snippet.description;
  
  var $div = $("<div>"),addClass("video");
  var videoId = video.id.videoId;
  
  var $title = $("<h4>")
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


