const player1=document.querySelector('.img1');
const player2=document.querySelector('.img2');
let result=document.querySelector('h1');


function rand(){
    let digit = Math.ceil(Math.random() * 6);
    return digit;
}

let num1 = rand();
let num2 = rand();

console.log(num1 + ' : '+ num2)
player1.src='./images/dice' + num1 + '.png' ; 
player2.src='./images/dice' + num2 + '.png' ;

if(num1>num2){    
    result.innerHTML = '&#9983 player 1 won';
} else if (num2>num1){     
    result.innerHTML = 'player 2 won &#12853';
} else {
    result.innerHTML = 'Draw';
}