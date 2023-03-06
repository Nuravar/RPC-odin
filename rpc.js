


function getComputerChoice () {
    let compChoice = Math.floor(Math.random() * 3)+1;
    //alert("the choice is " + compChoice);
    if(compChoice===1){
        document.getElementById("rockthing").style.color = "blue";
    } else if (compChoice===2){
        document.getElementById("paperthing").style.color = "blue"  
    } else {
        document.getElementById("sthing").style.color = "blue"
    }
    return compChoice;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === 1){
        if (computerSelection === 3){
            alert("You Win, Rock Beats Scissors");
        } else {
            alert("You Lose, Rock does not beat option " + computerSelection );
        }
    } else if (playerSelection === 2) {
        if (computerSelection === 1){
            alert("You Win, Paper Beats Rock");
        } else {
            alert("You Lose, Paper does not beat option " + computerSelection );
        }
    } else {
        if (computerSelection === 2){
            alert("You Win, Scissors Beats Paper");
        } else {
            alert("You Lose, Scissors does not beat option " + computerSelection );
        }
    }
  }