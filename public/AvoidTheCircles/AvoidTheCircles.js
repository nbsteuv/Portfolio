$(document).ready(function(){

var circleNumber= 0;

var circleTypes={
	"key":["color", "width", "border-radius", "speed"],
	"grape":["black", 5, 2.5, 3000],
	"softball":["blue", 15, 7.5, 4000],
	"beachball":["yellow", 30, 15, 5000]
};

var resetButton= "<div class='resetbutton'><h2><center>Play Again</center></h2></div>";

var portfolioLink= "<center><p><a href='http://portfolio-nsteuver.rhcloud.com'>Back to portfolio.</a></p></center>";

var highScore1= 0.00;
var highScore2= 0.00;
var highScore3= 0.00;
var highScore4= 0.00;
var highScore5= 0.00;

var i = 0;
var gameOn= "false";

var mouseX;
var mouseY;

$("body").mousemove(function(event){
	mouseX = event.pageX;
	mouseY = event.pageY;
});

$("#highscores").slideUp(1);

function timer(){
		if(gameOn=="true"){
			setTimeout(function(){
				i=i+0.01;
				$(".timer").html("<h1><center>"+ i.toFixed(2) + "</center></h1>");
				timer();
			},10);
		};
};

function createCircle(){
	circleNumber++;

	var randomOneThree= Math.floor(3*Math.random())+1;

	if (randomOneThree == 1){
		var circleChoice = "grape";
	}else if (randomOneThree == 2){
		var circleChoice = "softball";
	}else if (randomOneThree == 3){
		var circleChoice = "beachball";
	};

	var circleName= "circle"+ circleNumber;

	var circleColor= circleTypes[circleChoice][0];
	var circleSize= circleTypes[circleChoice][1];
	var circleRadius= circleTypes[circleChoice][2];
	var circleSpeed= circleTypes[circleChoice][3];


	var bodyWidth= $("body").width() - circleSize;
	var bodyHeight=$("body").height() - circleSize;

	var circlePositionLeft= (bodyWidth * Math.random()).toFixed();
	var circlePositionTop= (bodyHeight * Math.random()).toFixed();

	var newCircle= "<div class='circle' id="+circleName+"></div>";

	$("body").append(newCircle);
	$("#"+circleName).css({
		"background-color" : circleColor,
		"width" : circleSize+"vmin",
		"height" : circleSize+"vmin",
		"border-radius" : circleRadius+"vmin",
		"top" : circlePositionTop+"px",
		"left" : circlePositionLeft+"px"
		});

	function timeCirclePosition(circleTrackID){
		setTimeout(function(){
					var currentCirclePosition = $(circleTrackID).position();
					var calculatedRadius = parseInt($(circleTrackID).css("width")) * 0.5;
					var distanceX = mouseX - (currentCirclePosition.left + calculatedRadius);
					var distanceY = mouseY - (currentCirclePosition.top + calculatedRadius);
					if(Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2)) <= calculatedRadius) {
						$(circleTrackID).removeClass("circle").addClass("redcircle");
						$(circleTrackID).css("background-color", "red")
						endgame();
					};
					timeCirclePosition(circleTrackID);
				},1);
	};
	
	timeCirclePosition("#"+circleName);

	animateCircle(circleName, circleSpeed, circleSize, circlePositionTop, circlePositionLeft);
	setTimeout(function(){
		if(gameOn== "true"){
			createCircle();
		};
		},4000);
	};

function animateCircle(circleId, speed, circleSize, downStart, rightStart) {
	var bodyWidth=$("body").width() - circleSize;
	var bodyHeight=$("body").height() - circleSize;
	var circleMoveLeft= (bodyWidth * Math.random()).toFixed();
	var circleMoveTop= (bodyHeight * Math.random()).toFixed();
	$("#"+circleId).animate({
		left:circleMoveLeft,
		top:circleMoveTop
		},speed, function(){
			circleMoveLeftNext= (bodyWidth * Math.random()).toFixed();
			circleMoveTopNext= (bodyHeight * Math.random()).toFixed();
			animateCircle(circleId, speed, circleSize, downStart, rightStart)
			});
		};

function darken(element){
		$(element).css("opacity", "0.1");
};

function updateScores(newScore){

	if(newScore > highScore1){
		var redScore="score1";
		highScore5=highScore4;
		highScore4=highScore3;
		highScore3=highScore2;
		highScore2=highScore1;
		highScore1=newScore;
	}else if(newScore > highScore2){
		var redScore="score2";
		highScore5=highScore4;
		highScore4=highScore3;
		highScore3=highScore2;
		highScore2=newScore;
	}else if(newScore > highScore3){
		var redScore="score3";
		highScore5=highScore4;
		highScore4=highScore3;
		highScore3=newScore;
	}else if(newScore > highScore4){
		var redScore="score4";
		highScore5=highScore4;
		highScore4=newScore;
	}else if(newScore > highScore5){
		var redScore="score5";
		highScore5=newScore;
	};

	var highScorePlace1= "<div class='score' id='score1'><h2><center>" + highScore1.toFixed(2) + "</center></h2></div>";
	var highScorePlace2= "<div class='score' id='score2'><h2><center>" + highScore2.toFixed(2) + "</center></h2></div>";
	var highScorePlace3= "<div class='score' id='score3'><h2><center>" + highScore3.toFixed(2) + "</center></h2></div>";
	var highScorePlace4= "<div class='score' id='score4'><h2><center>" + highScore4.toFixed(2) + "</center></h2></div>";
	var highScorePlace5= "<div class='score' id='score5'><h2><center>" + highScore5.toFixed(2) + "</center></h2></div>";

	$("#highscores").append(highScorePlace1, highScorePlace2, highScorePlace3, highScorePlace4, highScorePlace5, resetButton, portfolioLink);
	$("#highscores").slideDown(1000);
	$("#"+redScore).css("color", "#D10808");
	$(".resetbutton").click(function(){
		gameReset();
	});
};

function endgame(){
	if(gameOn== "true"){
		gameOn= "false";
		updateScores(i+0.01);
		darken(".space");
		$(".circle").remove();
		$(".redcircle").stop();
	};
};

function gameReset(){
	$("#highscores").slideUp(1000, function(){
		$(".space").css("opacity", "1.0");
		i = 0;
		$(".timer").html("<h1><center>"+ i.toFixed(2) + "</center></h1>");
		$(".resetbutton").remove();
		$(".score").remove();
		$(".startbutton").fadeIn(500);
		$(".redcircle").remove();
	});
};

$(".startbutton").click(function(){
		$(".startbutton").fadeOut(500,function(){
		gameOn= "true";
		timer();
		$(".space").mouseenter(function(){
		endgame();
			});
		createCircle();
		});
	});


});