
const firstRandomNumber = Math.floor(Math.random() * 6) + 1
const dice1 = 'images/dice' + firstRandomNumber + '.png';
document.querySelectorAll('img')[0].setAttribute('src', dice1);
//dice2
const secondRandomNumber = Math.floor(Math.random() * 6) + 1
const dice2 = 'images/dice' + secondRandomNumber + '.png';
document.querySelectorAll('img')[1].setAttribute('src', dice2);

if(firstRandomNumber > secondRandomNumber){
  document.querySelector('h1').innerHTML = "Player 1 Wins!";
}
else if(firstRandomNumber < secondRandomNumber){
 document.querySelector('h1').innerHTML = "Player 2 Wins!";
}
else{
  document.querySelector('h1').innerHTML = "Draw!";
}

function roll() {            
  location.reload();
}

