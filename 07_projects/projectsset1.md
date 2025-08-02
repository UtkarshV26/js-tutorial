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

## project 2 solution

``` javascript

const form = document.querySelector('form')

// here, we are selecting the input value of height or weight outside the event(submit), so as the page loads, the script runs so we get emmpty values stored in variable. So, this use case gives us empty values. Because when we submit the form, then only the values are present there in input.
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
  e.preventDefault();
  
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height) ){
    results.innerHTML = `Please give a valid input height. ${height}`;
  } else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid input weight. ${weight}`;
  } else {
    const bmi = ((weight)/(height * height/10000)).toFixed(2);
    // dispaying the result
    if(bmi < 18.60){
      results.innerHTML = `<span>Your BMI is: ${bmi}. So, you are under weight.</span>`;
    }
    if(bmi > 18.60 && bmi < 24.90){
      results.innerHTML = `<span>Your BMI is: ${bmi}. So, you are in normal range.</span>`;
    }
    if(bmi > 24.90){
      results.innerHTML = `<span>Your BMI is: ${bmi}. So, you are overweight.</span>`;
    }
  }
})

```