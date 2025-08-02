# Projects related to DOM

## project link
[Click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project 1

```javascript
console.log("Utkarsh")
// project 1 solution code javascript

const buttons = document.querySelectorAll('.button')

console.log(buttons);

const body = document.querySelector('body')

buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);

        switch(e.target.id){
          case "grey":
            body.style.backgroundColor = e.target.id
          case "white":
            body.style.backgroundColor = e.target.id
          case "blue":
            body.style.backgroundColor = e.target.id
          case "yellow":
            body.style.backgroundColor = e.target.id
          case "green":
            body.style.backgroundColor = e.target.id
        }
    })
})

```