//NUMBER GUESSING GAME

const minNumb = 1;
const maxNumb = 50;
const answer = Math.floor(Math.random() * (maxNumb - minNumb + 1)) + minNumb;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${minNumb} - ${maxNumb}`);
  guess = Number(guess);
  console.log(typeof guess, guess); 

  if (isNaN(guess)) {
    window.alert('Please enter a valid number');
  } else if (guess < minNumb || guess > maxNumb){
    window.alert('Please enter a valid number');
  }

  else {
  attempts++;
  if (guess < answer) {
    window.alert('Too low!  Try again');
  }
  else if (guess > answer) {
    window.alert('Too high!  Try again');
  }
  else {
    window.alert('Congratulations! You got it right in '+attempts+' tries!');
  }
  running = false;
  }
  
}