const player = 0;
const computer= 0;
const playerscore_span =document.getElementById('playerscore');
const computer_span = document.getElementById('computerscore');
const score_div = document.querySelector('.score');
const result_div =document.querySelector('.result');

const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');


rock_div.addEventListener('click',
function(){
    game("rock");
}

)


paper_div.addEventListener('click', function(){
game("rock");
}

)


scissors_div.addEventListener('click', function(){
game("rock");}
)