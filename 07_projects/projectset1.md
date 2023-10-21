# Projects related to DOM

## Projects Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code 
## Project 1
 ```Javascript
console.log("Faisal Naeem");
const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

 ```

 ## Project 2 Solution

 ```javascript
 const form = document.querySelector('form');
//in this case it will give empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (
    height === '' ||
    height < 0 ||
    (isNaN(height) && weight === '') ||
    weight < 0 ||
    isNaN(weight)
  ) {
    results.innerHTML = 'Please give valid details';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

 ```

 ## Project 3 Solution Code
 ### Digital Clock
 
 ```javascript
 const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(() => {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

 ```

 ## Project 4 Solution Code
 ### Guess the number 
 ```javascript
 let randomNumber = parseInt(Math.random() * 100 + 1);
const submitBtn = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');

const p = document.createElement('p');

let prevGuess = [];
let attempts = 1;
let playGame = true;

if (playGame) {
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

const validateGuess = (guess) => {
  //if it is a valid number  or in range of 1 to 100
  if (isNaN(guess)) {
    alert('Please enter enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a valid number');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (attempts === 10) {
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
};

const checkGuess = (guess) => {
  //check if guess is equal , greater or lower than original value
  if (guess === randomNumber) {
    displayMessage('You guessed it right');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is tooo low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is tooo High`);
  }
};

const displayGuess = (guess) => {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  attempts++;
  remaining.innerHTML = `${11 - attempts}`;
};
const displayMessage = (message) => {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
};

//end game
const endGame = () => {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
};

//start new game
const newGame = () => {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', () => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    attempts = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - attempts}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
};

 ```

 ## Project 5 solution code
 ### change background color
 ```javascript
 //Generate Random colors

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
    // console.log((color += hex[Math.floor(Math.random() * 16)]));
  }
  return color;
};
let intervalId;
const startChangingColor = () => {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = () => {
  clearInterval(intervalId);
  intervalId = null;
};

//start changing color
document.querySelector('#start').addEventListener('click', startChangingColor);
//Stop Changing colors
document.querySelector('#stop').addEventListener('click', stopChangingColor);

 ```

 ## Project 6 Solution Code
### find key and key code pressed on the keyboard
```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', function (e) {
  insert.innerHTML = `
<div class='color'>
<table>
<thead>
<tr>
<th>Key</th>
<th>Key Code</th>
<th>Code</th>
</tr>
</thead>
<tbody>
<tr>
<td>${e.key === ' ' ? 'Space' : e.key}</td>
<td>${e.keyCode}</td>
<td>${e.code}</td>
</tr>
</tbody>
</table>
</div>
`;
});
```