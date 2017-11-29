

$(document).ready(function() {
var gameStatus=false;
var number=0;
var userGuess=0;
var itemNum=[];


//game settings
//random number number generator for buttons
var itemNummin=1;
var itemNummax=12;
//Number generator
var numMax=120;
var numMin=19;



function reset() {
    //generates number for game.
  	number = Math.floor(Math.random()*(numMax-numMin+1)+numMin);
  	$("#Number").text(number);
  	itemNum=[];
    userGuess=0;
    //creates elements and reset buttons.
     $("#buttons").empty();
  	while(itemNum.length < 4){
    var numGen=Math.floor(Math.random()*(itemNummax)+itemNummin);
  	if(itemNum.indexOf(numGen) === -1){
    itemNum.push(numGen);
    var NumBtn = $("<button>");
    NumBtn.addClass("btn btn-primary buttons");
    NumBtn.attr("data", numGen);
    NumBtn.text("???");
    $("#buttons").append(NumBtn);
    }
  	console.log(itemNum);
    gameStatus=true;
  	}


}
    console.log("HI");

 $(".buttons").on("click", function() {
    console.log("HI");


});


reset();
});


