const player = 0;
const computer= 0;
const playerscore_span =document.getElementById('playerscore');
const computer_span = document.getElementById('computerscore');
const score_div = document.querySelector('.score');
const result_div =document.querySelector('.result');

const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');






function getComputerchoice (){
const options = ['rock', 'paper','scissors'];

const randomNumber = Math.floor(Math.random() * 3);
return options[randomNumber]
}


function game(personChoice){
   const computerChoice = getComputerchoice()
  switch (personChoice + computerChoice){
    case "rockscissors": 
    case "paperrock":
    case "scissorspaper":
        console.log("YOU WIN");
        break;

    case "rockpaper": 
    case "paperscissors":
    case "scissorsrock":
console.log("YOU LOSE");
break;

case "rockrock": 
case "paperpaper":
case "scissorscissors":
console.log("DRAW");

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