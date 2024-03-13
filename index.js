/*
what to do:
Grab an input from client.
Generate a choice for the computer.
Compare results 
Give results
    If results are same, alert and go back to input
update scoreboard
*/
const form = document.querySelector("form"); 
const selection = ["rock","paper","scissors"];
// determines if the player is the winner using numbers from html file as well as a random num for computer.
// It returns a boolean as the result.
const isPlayerWinner = function(player,computer){
    switch(player){
        case 0:
            if(computer == 0){console.log("draw")}
            else if (computer == 2){return true}
            else{return false}
        break;
        case 1: if(computer == 1){console.log("draw")}
        else if (computer == 0){return true}
        else{return false}
        break;
        case 2: if(computer == 1){console.log("draw")}
        else if (computer == 1){return true}
        else{return false}
        break;
    }
}
form.addEventListener("submit", (event)=>{
    const playersChoice = parseInt(event.srcElement.elements["player-choice"].value); // grabs clients choice.
    const computerChoice = Math.floor(Math.random()*3); // function to generate comp choice.
    console.log(isPlayerWinner(playersChoice,computerChoice),`player:${selection[playersChoice]}, computer:${selection[computerChoice]}`);
    event.preventDefault();//this stops the form from refreshing the page. I plan to change this once forms are covered. 
})
