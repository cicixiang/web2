function addVideo(video) {
  
 
  var title = video.snippet.title;
  var thumbnail = video.snippet.thumbnails.default.url;
  
  console.log(title);
  console.log(thumbnail);
  
  var $div = $("<div>");
  
  var $title = $("<h4>").text(title);
  var $image = $("<img>").attr("src",thumbnail);
  
  $div.append($image).append($title);
  
  $(".container").append($div);
  
}
  
  
  function loadYoutube(videosData)
  { addVideo(videosData.items[0]);
    addVideo(videosData.items[1]);
    addVideo(videosData.items[2]);
    addVideo(videosData.items[3]);
  
  
  
}