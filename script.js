//Where results will be displayed
const roundResult = document.querySelector('#roundResult');
const finalResult = document.querySelector('#finalResult');

let playerTurn;
let playerScore = 0;
const playerWins = document.querySelector('playerWins');

let computerTurn;
let computerScore = 0;
const computerWins = document.querySelector('#computerWins');

//Create event listeners for rock, paper, scissors + reset buttons
const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', function () {
    playerTurn = 'rock';
    game();
});

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', function () {
    playerTurn = 'paper';
    game();
});

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', function () {
    playerTurn = 'scissors';
    game();
});

const reset = document.querySelector('#reset');
reset.addEventListener("click", function () {
    resetGame();
})


function createNode (str, pnode = roundResult) {
    let message = document.createElement('p');
    message.classList.add('message');
    message.appendChild(document.createTextNode(str));
    pnode.appendChild(message);

}


function clearText () {
    let paragraph = document.querySelectorAll('p');
    
    for(let i = 0; i < paragraph.length; i++){
        paragraph[i].remove();
    }
}

function roundWinnerCase() {

    switch (computerTurn){

        case 'rock':
            return playerTurn == 'scissors' ? false : 
            playerTurn == 'paper' ? true : 'tie';

        case 'paper':
            return playerTurn == 'rock' ? false :
            playerTurn == 'scissors' ? true : 'tie';
                    
        case 'scissors':
            return playerTurn == 'paper' ? false :
            playerTurn == 'rock' ? true : 'tie';
                        
    }

}

function updateScore() {
    createNode(computerScore, computerWins);
    createNode(playerScore, humanWins);
    
}

// Computer picks rock, paper, scissors 
function computerPlay (){
    let turn = ['rock', 'paper', 'scissors'];
    computerTurn = turn[Math.floor(Math.random() * 3)];
}

function game (){

    if(playerScore == 5 || computerScore == 5){
        resetGame();

    }
    
    clearText();
    computerPlay();
    roundWinner();
    updateScore();
    gameResult();

}

function roundWinner() {
    let result = roundWinnerCase();

    if(result == 'tie'){
        createNode('It was a tie.', finalResult);
    }

    else if(result == true){
        playerScore += 1;
        createNode('You won the round!', finalResult);
    }

    else{
        computerScore += 1;
        createNode('You lost this round.', finalResult);
    }
}

// Compares player wins to computer wins and determine final statement (who won)
function gameResult (){

    if(playerScore == 5 || computerScore == 5){
        clearText();
        if (playerScore > computerScore){
            createNode('YOU WIN THE GAME!!!', finalResult);
            finalResult.style.borderColor = '#009432';
            
        }
    
        else if (playerScore < computerScore){
            createNode("You lose the game...", finalResult);
            finalResult.style.borderColor = '#eb3b5a';
            
        }
    
        else{
            createNode("It was a tie this game!", finalResult);
            finalResult.style.borderColor = '#bdc3c7';
        }
        
    }

    
}

function resetGame(){

    clearText();
    computerScore = 0;
    playerScore = 0;

    finalResult.style.borderColor = '#2c3e50';
}



