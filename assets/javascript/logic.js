
$(document).ready(function() {
var number=0;
var userGuess=0;
var itemNum=[];
var wins=0;
var loses=0;


//game settings
//random number number generator for buttons
var itemNummin=1;
var itemNummax=12;
//Number generator
var numMax=120; // for calculation for max number
var numMin=19;  //for calculation for min number.
var numButtons=4; //number of buttons



function reset() {
    //generates number for game.
  	number = Math.floor(Math.random()*(numMax-numMin+1)+numMin);
  	$("#Number").text(number);
  	itemNum=[];
    userGuess=0;
    //creates elements and reset buttons.
     $("#buttons").empty();
  	while(itemNum.length < numButtons){
    var numGen=Math.floor(Math.random()*(itemNummax)+itemNummin);
  	if(itemNum.indexOf(numGen) === -1){
    itemNum.push(numGen);
    var NumBtn = $("<button>");
    NumBtn.addClass("btn btn-primary number");
    NumBtn.attr('value', numGen);
    NumBtn.text("???");
    $("#buttons").append(NumBtn);
    }
  	console.log(itemNum);

  	}

    buttonClick();
  }





reset();


function buttonClick() {

$(".number").on("click", function() {
    var x= parseInt(this.value);
    console.log(x);
    game(x); 
  })
}

function game(x){


  userGuess += x;
  $("#userGuess").html(userGuess);
  console.log(userGuess);
  if(userGuess===number){
  wins++
    $("#wins").html(wins);
    console.log("Your "+userGuess+" matches "+number);
  reset();
  }
  else if(userGuess>number){
    loses++;
    $("#loses").html(loses);
    console.log("Your "+userGuess+" exceeds "+number);
   reset();
  }


}




});




