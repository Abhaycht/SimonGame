var gamePattern=[];
var userClickedPattern=[];

var buttonColor= ["red","blue","green","yellow"];

function nextSequence(num){
  var randomNumber = Math.floor(Math.random()*(4-0));
  return randomNumber;

}

var randomChosenColor = buttonColor[nextSequence()];

gamePattern.push(randomChosenColor);

$('#' + randomChosenColor).fadeOut(100).fadeIn(100);
var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
audio.play();

$(".btn").on('click', function(){
  var userChosenColor= (this.id);
  userClickedPattern = userChosenColor;

});

console.log(userClickedPattern);
