const roundResultContainer = document.querySelector('#roundResultContainer');
const finalResult = document.querySelector('#finalResult');


const paragraph = document.createElement('p');

let playerTurn;
let playerScore = 0;
const playerWins = document.querySelector('playerWins');

let computerTurn = null;
let computerScore = 0;
const computerWins = document.querySelector('#computerWins');

let resultOfRound = document.createElement('p');

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


function createNode (str, pnode = roundResultContainer) {
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

function roundWinner() {

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
    roundResult();
    updateScore();
    gameResult();

}

function roundResult() {
    let result = roundWinner();

    if(result == 'tie'){
        createNode('It was a tie.', roundResultContainer);
    }

    else if(result == true){
        playerScore += 1;
        createNode('You won the round!', roundResultContainer);
    }

    else{
        computerScore += 1;
        createNode('You lost this round.', roundResultContainer);
    }
}




// Compares player wins to computer wins and determine final statement (who won)
function gameResult (){

    if(playerScore == 5 || computerScore == 5){

        if (playerScore > computerScore){
            createNode('YOU WIN THE GAME!!!', finalResult);
            
        }
    
        else if (playerScore < computerScore){
            createNode("You lose the game...", finalResult);
            
        }
    
        else{
            createNode("It was a tie this game!", finalResult);
            
        }
        
    }

    
}

function resetGame(){

    clearText();
    computerScore = 0;
    playerScore = 0;
}



