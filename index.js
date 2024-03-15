/*
what to do:
Grab an input from client.
Generate a choice for the computer.
Compare results 
Give results
    If results are same, alert and go back to input
update scoreboard
*/ 
const playerImg = document.querySelector(".left");
const compImg = document.querySelector(".right");
const selection = ["rock","paper","scissors"];
// determines if the player is the winner using numbers from html file as well as a random num for computer.
// It returns a string as the result and updates the score.
const isPlayerWinner = function(player,computer){
    playerImg.src = `./src/${selection[player]}.png`;
    compImg.src = `./src/${selection[computer]}.png`;
    switch(player){
        case 0:
            if(computer == 0){return announceResults("Draw")}
            else if (computer == 2){
                updateScore("player");
                return announceResults("Winner")}
            else{
                updateScore("computer");
                return announceResults("Loser")}
            break;
        case 1: 
            if(computer == 1){return announceResults("Draw")}
            else if (computer == 0){
                updateScore("player");
                return announceResults("Winner")}
            else{
                updateScore("computer");
                return announceResults("Loser")}
            break;
        case 2: 
            if(computer == 2){return announceResults("Draw")}
            else if (computer == 1){
                updateScore("player");
                return announceResults("Winner")}
            else{
                updateScore("computer");
                return announceResults("Loser")}
            break;
    }
}
const announceResults = function(result){
    const popup = document.querySelector(".pop-up");
    popup.classList.remove('hide');
    popup.innerHTML = result;
    setTimeout(function(){
        popup.classList.add('hide')
        playerImg.src = './src/placeholder.png';
        compImg.src = './src/placeholder.png';
    },1000) 
}
//function to update the score of the winner. 
const updateScore = function(winner){
    const score = document.querySelector(`.${winner}-score`);
    return score.innerHTML=parseInt(score.innerHTML)+1;
}
const runGame = function (num){
    const computerChoice = Math.floor(Math.random()*3); // function to generate comp choice.
    isPlayerWinner(num,computerChoice);
}
