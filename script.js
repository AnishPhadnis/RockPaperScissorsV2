const button_rock = document.querySelector('#rock');
button_rock.addEventListener('click', function () { game('rock'); });

const button_paper = document.querySelector('#paper');
button_paper.addEventListener('click', function () { game('paper'); });

const button_scissors = document.querySelector('#scissors');
button_scissors.addEventListener('click', function() { game('scissors'); });


const div = document.querySelector('#resultContainer');

const paragraph = document.createElement('p');



// Computer picks rock, paper, scissors 
function computerPlay (){
    let turn = ['rock', 'paper', 'scissors'];
    return turn[Math.floor(Math.random() * 3)];
}

// Takes in both player's input to determine who won
function resultOfGame (playerSelection, computerSelection){
    computerSelection = computerPlay();

    // Determines player's output (who won/who lost) + true if player won/false if player lost/ "tie" if it was a tie
    switch (computerSelection){

        case 'rock':
            return playerSelection == 'rock' ? ["It's a tie"] : 
            playerSelection == 'paper' ? ["You win! Paper beats scissor!"]:
            ["You lose! Rock beats scissors!"];

        case 'paper':
            return playerSelection == 'rock' ? ["You lose! Paper beats rock!"] : 
            playerSelection == 'paper' ? ["It's a tie!"]:
            ["You win! Scissors beats paper!"];
                    
        case 'scissors':
            return playerSelection == 'rock' ? ["You win! Rock beats paper!"] : 
            playerSelection == 'paper' ? ["You lose! Scissors beats rock!"]:
            ["It's a tie!"];
                        
    }
}

function game (playerTurn){
    let computerWin = 0;
    let playerWin = 0;
    let didWin;

    let resultOfRound = document.createElement('p');
    resultOfRound.classList.add('resultOfRound');
    

                
    for (i = 0; i < 1; i++){

        clearText();
        createNode(resultOfGame(playerTurn, computerPlay()));

        if (resultOfRound[1] == true){
            playerWin += 1;
        }
                    
        else if (!(resultOfRound[1])){
            computerWin += 1;
        }
                    
    }

    didWin = finalResult(playerWin, computerWin);
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


// Compares player wins to computer wins and determine final statement (who won)
function finalResult (playerWin, computerWin){

    if (playerWin > computerWin){
        return "YOU WIN!!!"
    }

    else if (playerWin < computerWin){
        return "You lose..."
    }

    else{
        return "It was a tie!"
    }
}



