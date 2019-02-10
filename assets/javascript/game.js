$(document).ready(function() {
    var currentScore;
    var targetScore;
    var winTotal = 0;
    var lossTotal = 0;
    var gamesPlayed = -1;
    var buttonOneValue;
    var buttonTwoValue;
    var buttonThreeValue;
    var buttonFourValue;
    $("#total-wins").text(winTotal);
    $("#total-losses").text(lossTotal);
    $("#games-played").text(gamesPlayed);

        function gameReStart() {
            currentScore = 0;
            $("#current-score").text(currentScore);
            targetScore = 0;
            buttonOneValue = 0;
            buttonTwoValue = 0;
            buttonThreeValue = 0;
            buttonFourValue = 0;
            gamesPlayed ++;
            $("#games-played").text(gamesPlayed);
            gameStart();
        }

        function gameStart() {
            targetScore = Math.floor(Math.random() * (120 - 19 + 1) + 19);
            $("#target-score").text(targetScore);
            buttonOneValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            buttonTwoValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            buttonThreeValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            buttonFourValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);

            $("#red-crystal-skull-btn").unbind().on("click", function() { 
                currentScore += buttonOneValue;
                $("#current-score").text(currentScore);
                checkScore();
            });

            $("#blue-crystal-skull-btn").unbind().on("click", function() { 
                currentScore += buttonTwoValue;
                $("#current-score").text(currentScore);
                checkScore();
            });

            $("#green-crystal-skull-btn").unbind().on("click", function() { 
                currentScore += buttonThreeValue;
                $("#current-score").text(currentScore);
                checkScore();
            });

            $("#magenta-crystal-skull-btn").unbind().on("click", function() { 
                currentScore += buttonFourValue;
                $("#current-score").text(currentScore);
                checkScore();
            });

            function checkScore() {
                if (currentScore === targetScore) {
                    Swal.fire({
                        title: "👏 Hooray! 👏",
                        text: "Congratulations! You've won!",
                        type: 'success',
                        confirmButtonText: 'Play Again',
                        allowOutsideClick: false,
                      });
                    winTotal++;
                    $("#total-wins").text(winTotal);
                    gameReStart();
                } else if (currentScore > targetScore) {
                    Swal.fire({
                        title: "😞 Oh no! 😞",
                        text: "Sorry, you've lost.",
                        type: 'error',
                        confirmButtonText: 'Try Again',
                        allowOutsideClick: false,
                      });
                    lossTotal++;
                    $("#total-losses").text(lossTotal);
                    gameReStart();
                }
            }
        }

    gameReStart();

});