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