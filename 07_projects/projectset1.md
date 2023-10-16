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

 ## Project 3 solution Code
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