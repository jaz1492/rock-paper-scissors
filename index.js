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
const computerChoice = ()=>Math.floor(Math.random()*3); // function to generate comp choice.

form.addEventListener("submit", (event)=>{
    let playersChoice = parseInt(event.srcElement.elements["player-choice"].value); // grabs clients choice.
    
    event.preventDefault();//this stops the form from refreshing the page. I plan to change this once forms are covered. 
})
