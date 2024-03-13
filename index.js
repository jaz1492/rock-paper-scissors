const form = document.querySelector("form");
const selection = ["rock","paper","scissors"]
form.addEventListener("submit", (event)=>{
    let playersChoice = event.srcElement.elements["player-choice"].value;
    event.preventDefault();//this stops the form from refreshing the page. I plan to change this once forms are covered. 
})
