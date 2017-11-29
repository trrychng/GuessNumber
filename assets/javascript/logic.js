


var gameStatus=false;
var number=0;
var userGuess=0;
var itemNum=[];
var itemNummin=1;
var itemNummax=12;
var numMax=120;
var numMin=19;



function reset() {

  	number = Math.floor(Math.random()*(numMax-numMin+1)+numMin);
  	$("#Number").text(number);
  	itemNum=[];

  	while(itemNum.length < 4){
  	var numGen=Math.floor(Math.random()*(itemNummax)+itemNummin);
	console.log(numGen);
  	if(itemNum.indexOf(numGen) === -1){
  	itemNum.push(numGen);
  	}
  	console.log(itemNum);
  	}


}






var game = {












}


reset();