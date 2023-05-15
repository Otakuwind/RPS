let player = 0;
let computer= 0;
let playerscore_span =document.getElementById('playerscore');
let computer_span = document.getElementById('computerscore');
const score_div = document.querySelector('.score');
let result_div =document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');






function getComputerchoice (){
const options = ['rock', 'paper','scissors'];
const randomNumber = Math.floor(Math.random() * 3);
return options[randomNumber];
}



function win (person, computer){
player++;
playerscore_span.innerHTML = player;
computer_span.innerText = computer;
result_div.innerHTML = person + " beats" + computer + ". YOU WIN!:";
}

function lose (){
console.log("lost")
}

function draw(){
console.log("draw")
}




function game(personChoice){
   const computerChoice = getComputerchoice()
  switch (personChoice + computerChoice){
    case "rockscissors": 
    case "paperrock":
    case "scissorspaper":
        win(personChoice, computerChoice);
        break;

    case "rockpaper": 
    case "paperscissors":
    case "scissorsrock":
lose(personChoice, computerChoice);
break;

case "rockrock": 
case "paperpaper":
case "scissorscissors":
draw(personChoice, computerChoice);
break;
  }
}
function main (){

    rock_div.addEventListener('click',
    function(){
        game("rock");
    })

    paper_div.addEventListener('click', function(){
    game("paper");
    })

    scissors_div.addEventListener('click', function(){
    game("scissors");})
}
main();