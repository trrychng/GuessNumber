
$(document).ready(function() {
var number=0; //declaring values
var userGuess=0; //declaring values
var itemNum=[]; //declaring values
var wins=0; //declaring vaues
var loses=0; //declaring values


//game settings
//random number number generator for buttons
var itemNummin=1; //controls number min generator on button
var itemNummax=12; //control number max generator on button
var numButtons=4; //number of buttons
//Number generator
var numMax=120; // for calculation for max number
var numMin=19;  //for calculation for min number.


function reset() {
    //generates number for game.
  	number = Math.floor(Math.random()*(numMax-numMin+1)+numMin); //generates number between paremeters of min and max
  	$("#Number").text(number); //update html page with number
  	itemNum=[]; //clears itemNum array
    userGuess=0; //clears userGuess on reset
    //creates elements and reset buttons.
     $("#buttons").empty(); //clear board on html
  	while(itemNum.length < numButtons){  //creates #'s of button based on numButtons
    var numGen=Math.floor(Math.random()*(itemNummax)+itemNummin); //creates value between min and max
  	if(itemNum.indexOf(numGen) === -1){ //ensures no duplicate
    itemNum.push(numGen); //start pushing to array
    var NumBtn = $("<button>");  // creates div 
    NumBtn.addClass("btn btn-primary number"); // add class
    NumBtn.attr('value', numGen); // adds values
    NumBtn.text("???"); // text  for button
    $("#buttons").append(NumBtn); //appends to div buttons
    }
  	console.log(itemNum); //logging

  	}

    buttonClick(); //require for remapping
  }
reset(); //initalize the game.

function buttonClick() { //on button clicks

$(".number").on("click", function() {  //clicking buttons
    var x= parseInt(this.value); //converts to integer
    console.log(x); //logging
    game(x); //passes to game function
  })
}

function game(x){
  userGuess += x; //add value 
  $("#userGuess").html(userGuess); //update html
  console.log(userGuess); //logging
  if(userGuess===number){ //if user Sum matches number is a winner
  wins++ //updates win
    $("#wins").html(wins); //updates win score on site.
    console.log("YOU WIN!!! Your "+userGuess+" matches "+number); //logging
  reset(); //resets game after win
  }
  else if(userGuess>number){ //if usersum exceeds number then lose
    loses++; //update lose score
    $("#loses").html(loses); //update html
    console.log("YOU LOSE!!! Your "+userGuess+" exceeds "+number); //logging
   reset(); //reset game
  }


}
});




