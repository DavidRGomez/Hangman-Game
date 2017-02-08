var words = ["syntax", "object", "jquery", "string", "random","method", "switch"];
var comGuess = words[Math.floor(Math.random() * 7)];
var guessedLetters = [];
var numberOfTrysLeft = 8;
var wins = 0;
var losses = 0;
var alpha = "abcdefghijklmnopqrstuvwxyz";
console.log(comGuess);
var emptyWord = ["_","_","_","_","_","_"];

 document.onkeyup = function(event) {
	var letter = String.fromCharCode(event.keyCode).toLowerCase();
	
	
	
	 

	if (comGuess.indexOf(letter) >= 0 ){
		emptyWord[comGuess.indexOf(letter)] = comGuess[comGuess.indexOf(letter)];
		
	}
	
	
	if (guessedLetters.indexOf(letter) < 0 && comGuess.indexOf(letter) < 0 && alpha.indexOf(letter) >= 0){
		guessedLetters = guessedLetters + letter;
		numberOfTrysLeft = numberOfTrysLeft - 1;
		
	}

	if (emptyWord == comGuess[0] + "," + comGuess[1] + "," + comGuess[2] + "," + comGuess[3] + "," + comGuess[4] + "," + comGuess[5] ){
		wins += 1;
		emptyWord = ["_","_","_","_","_","_"];
		guessedLetters = [];
		numberOfTrysLeft = 8;
		comGuess = words[Math.floor(Math.random() * 7)];
		console.log(comGuess);	
	}

	if (numberOfTrysLeft == 0){
		losses += 1;
		emptyWord = ["_","_","_","_","_","_"];
		guessedLetters = [];
		numberOfTrysLeft = 8;
		comGuess = words[Math.floor(Math.random() * 7)];
		console.log(comGuess);	

	}


	document.getElementById('lossCount').innerHTML = losses;
	document.getElementById('winCount').innerHTML = wins;
	document.getElementById('wordPlaceholder').innerHTML = emptyWord;	
	document.getElementById('letterGuessed').innerHTML = guessedLetters;
	document.getElementById('visibleGuessLeft').innerHTML = numberOfTrysLeft;

};
