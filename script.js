//defining global variables with the value 0.
let playerScore = 0;
let computerScore = 0;

//Main function: checks conditions and determines who can defeat whom.
function playerChoice(move){
    let computerMove = computerRandom()
    let img = document.getElementById("player-move-img");
    let imgComputer = document.getElementById("computer-move-img");

    const resultTitle = document.getElementById("result-title");
    const resultDetail = document.getElementById("result-detail");
    const playerElement = document.getElementById("player-move");
    const computerElement = document.getElementById("computer-move");
    const playerScoreElement = document.getElementById("player-score");
    const computerScoreElement = document.getElementById("computer-score");

    const btnRock = document.getElementById("btn-rock");
    const btnPaper = document.getElementById("btn-paper");
    const btnScissors = document.getElementById("btn-scissors");

    if(move === 'rock'){
        if (computerMove === 'rock')
            resultTitle.textContent = 'Tie';
        else if (computerMove === 'paper'){
            resultTitle.textContent = 'You Lose';
            computerScore++;
        }
        else if (computerMove === 'scissors'){
            resultTitle.textContent = 'You Win';
            playerScore++;
        }
    }

    if(move === 'paper'){
        if (computerMove === 'paper')
            resultTitle.textContent = 'Tie';
        else if (computerMove === 'scissors'){
            resultTitle.textContent = 'You Lose';
            computerScore++;
        }
        else if (computerMove === 'rock'){
            resultTitle.textContent = 'You Win';
            playerScore++;
        }
    }

    if (move === 'scissors'){
        if (computerMove === 'scissors')
            resultTitle.textContent = 'Tie';
        else if (computerMove === 'rock'){
            resultTitle.textContent = 'You Lose';
            computerScore++;
        }
        else if (computerMove === 'paper'){
            resultTitle.textContent = 'You Win';
            playerScore++;
        }
    }

    //Updates the player images
    if (move === 'rock')
        img.src = "imgs/rock_img.png";
    else if (move === 'paper')
        img.src = "imgs/paper_img.png";
    else if (move === 'scissors')
        img.src = "imgs/scissors_img.png";

    // Updates the computer images
    if (computerMove === 'rock')
        imgComputer.src = "imgs/rock_img.png";
    else if (computerMove === 'paper')
        imgComputer.src = "imgs/paper_img.png";
    else if (computerMove === 'scissors')
        imgComputer.src = "imgs/scissors_img.png";

    playerElement.textContent = (`You picked: ${move}`)
    computerElement.textContent = (`Computer picked: ${computerMove}`)
    resultDetail.textContent = (`You picked: ${move}. Computer picked: ${computerMove}.`);

    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
// See who the champion is and who is the loser .
    if (playerScore === 3){
        resultDetail.textContent = "Game Over! You won the match!";
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
    }
    else if (computerScore === 3){
        resultDetail.textContent = "Game Over! Computer won the match!";
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
    }
}
// Randomize the computer's moves
function computerRandom(){
   const randomNumber = Math.random();
   let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1 / 3 )
        computerMove = 'rock';
    else if (randomNumber >= 1 / 3 && randomNumber < 2/3)
        computerMove = 'paper';
    else if (randomNumber >= 2/3 && randomNumber < 1)
        computerMove = 'scissors';

   return computerMove;
}

const playAgainBtn = document.getElementById("play-again-btn");
//defines the function for the player to play again
playAgainBtn.onclick = function(){
    playerScore = 0;
    computerScore = 0;

    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;

    document.getElementById("player-move").textContent = "?";
    document.getElementById("computer-move").textContent = "?";

    document.getElementById("player-move-img").src = "";
    document.getElementById("computer-move-img").src = "";

    document.getElementById("result-title").textContent = "Result";
    document.getElementById("result-detail").textContent = "Waiting for your move...";

    document.getElementById("btn-rock").disabled = false;
    document.getElementById("btn-paper").disabled = false;
    document.getElementById("btn-scissors").disabled = false;
}