var userWins = 0;
var userLosses = 0;
var comNumber;
var userGuess;
var userGuessesLeft = 3;

var guesses = [];

document.onkeyup = function(event) {

    comNumber = Math.floor(Math.random() * 10);
    console.log(comNumber);

    userGuess = event.key;

    for (var i=0; i< 10; i++){
        if (userGuess == i){
            if (userGuess != comNumber) {
                userGuessesLeft--;
                guesses.push(userGuess);
            }
            if (userGuess == comNumber) {
                userWins++;
                userGuessesLeft = 3;
                guesses = [];
                alert("Wow dude good job");
            }

            if (userGuessesLeft == 0) {
                userGuessesLeft = 3;
                userLosses++;
                guesses = [];
                alert("Game Over. The correct answer was " + comNumber);
            }

            document.getElementById("user-text").innerHTML = guesses;

            document.getElementById("guesses-text").innerHTML = userGuessesLeft;

            document.getElementById("wins-text").innerHTML = userWins;

            document.getElementById("losses-text").innerHTML = userLosses;
        }
    }

    
}