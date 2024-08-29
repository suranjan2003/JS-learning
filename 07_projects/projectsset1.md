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