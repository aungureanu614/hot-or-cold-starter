var randomNum;
var count = 0;
var str;



$(document).ready(function() {
    newGame();
    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });
    //start new game when user clicks new game
    $("a.new").click(function() {
        newGame();

    });
    $("#guessButton").click(function(e) {
        userInput();
        e.preventDefault(); //prevent page from reloading on button click

    });



});

function newGame() {
    //clears and sets all fields to default for a new game
    $('#guessList').empty();
    $('#feedback').text("Make your Guess!");
    $('#userGuess').val('');
    $('#count').empty().append(count = 0);
    randomNum = Math.floor(Math.random() * (100 - 1) + 1); //generate a random number between 1 and 100
    $("#guessButton").prop("disabled", false); //re-enable the guess button after last game


}

function userInput() { 
    //gets user guess and sends it to the userFeedback function
    userGuess = +($('#userGuess').val()); 
    userFeedback(userGuess);

}

function userFeedback(userNum) {
    //check if user's guess matches the random number
    if (userNum === randomNum) {
        str = "You got it!";
        displayOnScreen(str, userNum);
        $("#guessButton").prop("disabled", true); //disable guess button after the user has guessed correctly
    } else {
        //check guesses and alert the user
        switch (userNum !== randomNum) {
            case (userNum > 100 || userNum < 1):
                alert("Please choose a number between 1 and 100");
                $('#userGuess').val('');
                break;

            case (isNaN(userNum)):
                alert("Please enter a valid number");
                $('#userGuess').val('');
                break;

            case (userNum - randomNum >= 50) || (randomNum - userNum) >= 50:
                str = "Ice cold!";
                displayOnScreen(str, userNum);
                break;

            case (userNum - randomNum >= 30 && userNum - randomNum < 50) || (randomNum - userNum >= 30 && randomNum - userNum < 50):
                str = "Cold!";
                displayOnScreen(str, userNum);
                break;

            case (userNum - randomNum >= 20 && userNum - randomNum < 30) || (randomNum - userNum >= 20 && randomNum - userNum < 30):
                str = "Warm!";
                displayOnScreen(str, userNum);
                break;

            case (userNum - randomNum >= 10 && userNum - randomNum < 20) || (randomNum - userNum >= 10 && randomNum - userNum < 20):
                str = "Hot!";
                displayOnScreen(str, userNum);
                break;

            case (userNum - randomNum >= 1 && userNum - randomNum < 10) || (randomNum - userNum >= 1 && randomNum - userNum < 10):
                str = "You're on fire!";
                displayOnScreen(str, userNum);
        }

    }



}

function counter() {
    count += 1;
    $('#count').empty().append(count);

}

function displayOnScreen(userString, num) {
    $('#feedback').empty().append(userString);
    $('#userGuess').val('');
    counter();
    $('#guessList').append('<li>' + num + '</li>');
}
