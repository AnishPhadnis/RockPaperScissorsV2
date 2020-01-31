const div = document.querySelector('#resultContainer');
const finalResult = document.querySelector('#finalResult');

const paragraph = document.createElement('p');

let playerTurn;
let playerScore = 0;
const playerWins = document.querySelector('playerWins');

let computerTurn;
let computerScore = 0;
const computerWins = document.querySelector('#computerWins');

let resultOfRound = document.createElement('p');

const playerOptions = document.querySelectorAll('.buttons');

for(let i = 0; i < playerOptions.length; i++){
    playerOptions[i].addEventListener('click', function () {
        playerTurn = playerOptions[i].textContent;
        game();
    });
}

function createNode (str, parentNode = roundResult) {
    let message = document.createElement('p');
    message.appendChild(document.createTextNode(str));
    parentNode.appendChild(message);

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
            playerTurn == 'scissors' ? computerScore += 1 : 
            playerTurn == 'paper' ? playerScore += 1 : computerScore += 0;  

        case 'paper':
            playerTurn == 'rock' ? computerScore += 1 :
            playerTurn == 'scissors' ? playerScore += 1 : computerScore += 0;
                    
        case 'scissors':
            playerTurn == 'paper' ? computerScore += 1 :
            playerTurn == 'rock' ? playerScore += 1 : computerScore += 0;
                        
    }

}

function updateScore() {
    createNode(computerScore, computerWins);
    createNode(playerScore, playerWins);

    
}

// Computer picks rock, paper, scissors 
function computerPlay (){
    let turn = ['rock', 'paper', 'scissors'];
    computerTurn = turn[Math.floor(Math.random() * 3)];
}






function game (){
    
    clearText();
    computerPlay();
    endResult();
    roundWinner();
    updateScore();
            
    


}




// Compares player wins to computer wins and determine final statement (who won)
function endResult (){

    if (playerScore > computerScore){
        createNode('YOU WIN!!!', finalResult);
    }

    else if (playerScore < computerScore){
        createNode("You lose...", finalResult);
    }

    else{
        createNode("It was a tie!", finalResult);
    }
}



