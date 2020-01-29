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
            return playerSelection == 'rock' ? ["It's a tie", "tie"] : 
            playerSelection == 'paper' ? ["You win! Paper beats scissor!", true]:
            ["You lose! Rock beats scissors!", false];

        case 'paper':
            return playerSelection == 'rock' ? ["You lose! Paper beats rock!", false] : 
            playerSelection == 'paper' ? ["It's a tie!", "tie"]:
            ["You win! Scissors beats paper!", true];
                    
        case 'scissors':
            return playerSelection == 'rock' ? ["You win! Rock beats paper!", true] : 
            playerSelection == 'paper' ? ["You lose! Scissors beats rock!", false]:
            ["It's a tie!", "tie"];
                        
    }
}

function game (playerTurn){
    let computerWin = 0;
    let playerWin = 0;
    let didWin;

    let resultOfRound = document.createElement('p');
    resultOfRound.classList.add('resultOfRound');

                
    for (i = 0; i < 1; i++){
        resultOfRound = resultOfGame(playerTurn, computerPlay());
        div.appendChild(resultOfRound)

        if (resultOfRound[1] == true){
            playerWin += 1;
        }
                    
        else if (!(resultOfRound[1])){
            computerWin += 1;
        }
                    
    }

    didWin = finalResult(playerWin, computerWin);

    alert(didWin + " The score was " + playerWin + "-" + computerWin + ".");
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

const button_rock = document.querySelector('#rock');
button_rock.addEventListener('click', (e) => console.log(e.target.));

const button_paper = document.querySelector('#paper');
button_paper.addEventListener('click', resultOfGame);

const button_scissors = document.querySelector('#scissors');
button_scissors.addEventListener('click', resultOfGame);


const div = document.createElement('div');
div.classList.add('div');

div.style.border = '10px solid black';
div.style.height = '100px';
div.style.width = '500px';
div.style.marginLeft = '33%';
div.style.marginTop = '5%';

body.appendChild(div);

