var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var buttonColor = ["red", "blue", "green", "yellow"];

//function to animate user pressed button
function animatePress(currentColor) {
  $('#' + currentColor)
  .addClass('pressed')
  .delay(1000)
  .queue(function(next){
    $(this).removeClass('pressed');
    next();
  });
}

//function to play sound of button
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]==userClickedPattern[currentLevel])
  {
    console.log("success");
    if(userClickedPattern.length==gamePattern.length)
    {
      setTimeout(function () {
        level++;
        nextSequence();
      }, 2000);
    }

  }
    else{
      console.log("fail");
    }

}

//function to chosen random button
function nextSequence() {
  userClickedPattern=[];
  var randomNumber = Math.floor(Math.random() * (4 - 0));
  var randomChosenColor = buttonColor[randomNumber];

  gamePattern.push(randomChosenColor);
  $('#' + randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  $("h1").text("Level " + level);

}

$(".btn").on('click', function() {
  var userChosenColor = $(this).attr('id');
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(level);

});

if(level==0){
$(document).keydown(function() {
  nextSequence();

});
}
