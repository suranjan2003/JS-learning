# projects related to DOM
## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code
## proj 1
```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button)=>{
  //console.log(button)
  button.addEventListener('click', (e)=>{
    //console.log(e)
    //console.log(e.target)
    //if(e.target.id == 'grey') console.log('found grey')
    body.style.backgroundColor = e.target.id
  })
})
```
## proj 2
```javascript
const form = document.querySelector('form')
//console.log(form)
form.addEventListener('submit', (e)=>{
  e.preventDefault()    // comment out it and click submit button, u can observe the diff
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    const comp = document.getElementById('weight-guide')
    const ele = comp.getElementsByTagName('p')
    if(bmi > 24.9){
      results.innerHTML = `<span>${bmi}</span><br>`+
                          `<span style="color: red;">${ele[2].innerText}</span>`;
    }
    else if(bmi<=24.9 && bmi>=18.6){
      results.innerHTML = `<span>${bmi}</span><br>`+
                          `<span style="color: green;">${ele[1].innerText}</span>`;
    }
    else{
      results.innerHTML = `<span>${bmi}</span><br>`+
                          `<span style="color: blue;">${ele[0].innerText}</span>`;
    }
  }
})
```
## proj 3
```javascript
const clock = document.getElementById('clock')

setInterval(()=>{

  const now = new Date()

  // ********** method 1 **************
  // const hr = now.getHours()
  // const mint = now.getMinutes()
  // if(hr<10){
  //   clock.innerHTML = '0' + hr + ' : ' + mint
  // }
  // else {
  //   clock.innerHTML = hr + ' : ' + mint
  // }
  
  // ********** method 2 **************
  clock.innerHTML = now.toLocaleTimeString()

}, 1000)
```
## proj 4
```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


```

## proj 6 (unlimited bg color changer)
```javascript

//******method 1**** by defining a set of color

let animation
const colors = ['green', 'yellow', 'blue', 'purple', 'orange', 'black', 'blue', 'green', 'yellow', 'white', 'violet']

document.querySelector('#start').addEventListener('click', ()=>{
  // to clear any exixsting animation if present
  clearInterval(animation)

  animation = setInterval(()=>{
    const body = document.querySelector('body')
    body.style.backgroundColor = colors[parseInt(Math.random()*10)]
  }, 1000)
})

document.querySelector('#stop').addEventListener('click', ()=>{
  clearInterval(animation)
  animation = null  // to avoid over writting the animation
})


//**** method 2***** by making a random color generator function

let animation

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

document.querySelector('#start').addEventListener('click', ()=>{
  // to clear any exixsting animation if present
  clearInterval(animation)

  animation = setInterval(()=>{
    const body = document.querySelector('body')
    body.style.backgroundColor = randomColor()
  }, 1000)
})

document.querySelector('#stop').addEventListener('click', ()=>{
  clearInterval(animation)
})


//*******method 3**** exact code from chai aur code

//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


```