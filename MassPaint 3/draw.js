speed(0);
record();
reset();
hide();



$("#button-save").on("click",function() {
 downloadRecording();
});

$("#button-replay").on("click",function() {
 speed(0)
 replay();
 speed(0)
});

$("#button-eraser").on("click",function() {
  $(".tool.selected").removeClass("selected");
  $(this).addClass("selected");
  tool = "eraser";
 lineWidth(30);
 lineColor("white");
});

$("#button-pen").on("click",function() {
  $(".tool.selected").removeClass("selected");
  $(this).addClass("selected");
  tool = "pen";
 lineWidth(width);
 lineColor(color);
});

$("#button-brush").on("click",function() {
  $(".tool.selected").removeClass("selected");
  $(this).addClass("selected");
  tool = "brush";
 lineWidth(60);
 lineColor("black");
});


$("#button-sun").on("click",function() {
 $(".tool.selected").removeClass("selected");
 $(this).addClass("selected");
 tool = "sun";
 lineWidth(90);
 lineColor("yellow");
});

$("#button-sea").on("click",function() {
 $(".tool.selected").removeClass("selected");
 $(this).addClass("selected");
 lineColor("#60ffff");
 lineWidth(5);
 tool = "sea";
});

$("#button-beach").on("click",function() {
 $(".tool.selected").removeClass("selected");
 $(this).addClass("selected");
 lineColor("#ffc020");
 lineWidth(100);
 tool = "beach";
});

$("#button-tree").on("click",function() {
 $(".tool.selected").removeClass("selected");
 $(this).addClass("selected");
 lineColor("#408020");
 lineWidth(5);
 tool = "tree";
});

$("#button-trunk").on("click",function() {
 $(".tool.selected").removeClass("selected");
 $(this).addClass("selected");
 lineColor("#806000");
 lineWidth(15);
 tool = "trunk";
});

$("#button-black").on("click",function() {
 $(".tool.selected").addClass("selected");
 lineColor("black");
});

$("#button-red").on("click",function() {
 $(".tool.selected").addClass("selected");
 lineColor("red");
});

$("#button-small").on("click",function() {
	$(".tool.selected").addClass("selected");
 lineWidth(2);
});

$("#button-large").on("click",function() {
 $(".tool.selected").addClass("selected");
 lineWidth(40);
});



$(".color").on("click",function(e) {
  var col = $(this).data("color");
  lineColor(col);
});


function sun() {
	//arc(e.pageX, e.pageY, 10, 0, 360, true);
	angle(0);
	for (i=0; i<360; i++){
		forward(0.5);
		rotate(1);
	}
}


var drawing = false;
var tool = "pen";

var color = "black";
var width = 4;

$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "pen" || tool =="eraser" || tool =="brush" || tool == "sea" || tool == "beach" || tool == "tree" || tool == "trunk" || tool=="black"|| tool=="red") { 
	  drawing = true;
  } else if(tool == "sun") {
    sun();
  }
});


$(document).on("mousemove",function(e) {
  e.preventDefault();
  if(drawing) {
    lineTo(e.pageX,e.pageY);
  }
});

$(document).on("mouseup",function(e) {
  e.preventDefault();
  drawing = false;
});




