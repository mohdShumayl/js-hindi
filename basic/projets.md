# PROJECTS  
### Project Directory Link [click me](https://stackblitz.com/edit/dom-project-chaiaurcode-jux7b9?file=2-BMICalculator%2Fstyle.css,2-BMICalculator%2Findex.html,2-BMICalculator%2Fchaiaurcode.js) 


# Project 1

## Solution Code

```javascript
let btns = document.querySelectorAll('.button')
let body = document.querySelector('body')
console.log(btns)

btns.forEach((btn)=>{
  btn.addEventListener("mouseover", function(btn){
    //console.log(btn.target)
      if(btn.target.id === "grey"){
        body.style.backgroundColor = "grey"
      }
      if(btn.target.id === "white"){
        body.style.backgroundColor = "white"
      }
      if(btn.target.id === "blue"){
        body.style.backgroundColor = "blue"
      }
      if(btn.target.id === "yellow"){
        body.style.backgroundColor = "yellow"
      }  
  })
})

btns.forEach((btns)=>{
  btns.addEventListener('mouseout', (btns)=>{
    body.style.backgroundColor = "white"
  })
})
```

# Project 2

## Solution Code 

```javascript

let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  //prevent default led to prevent the submisson of form
  e.preventDefault();
  //display value of input
  //console.log (document.querySelector('#height').value)

  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);

  if (height == ' ' || isNaN(height)) {
    document.querySelector('#results').innerHTML =
      'fill the height field correctly';
  } else if (weight == ' ' || isNaN(weight)) {
    document.querySelector('#results').innerHTML =
      'fill the weight field correctly';
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    document.querySelector('#results').innerHTML = bmi;

    const elements = document.querySelector('#weight-guide').children;

    let three = Array.from(elements);

    three.map((items) => (items.style.display = 'none'));

    console.log(three);
    if (bmi < 18.5) {
      three[1].style.display = "block"
    } else if (bmi < 28.5) {
      three[2].style.display = "block"
    }
    else if(bmi < 35){
      three[3].style.display = "block"
    }
  }
});
```

# Project 3
## Solution Code

```javascript
const clock = document.querySelector('#clock')
//console.log(clock)

setInterval(()=>{
  const date = new Date()
 // console.log(date.toTimeString())
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)


```
# Project 4
## Solution Code
```javascript

//generate random color
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
let changeColor = function () {
  if (!intervalId) {
    intervalId = setInterval(cgclr, 1000);
  }
  function cgclr() {
    document.body.style.backgroundColor = randomColor();
  }
};

let stopChangeColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', changeColor);
document.querySelector('#stop').addEventListener('click', stopChangeColor);
  

```

# Project 5
## Solution Code

```javascript
const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class = "color">
  <table>
  <tr>
  <th>key</th>
  <th>key code</th>
  <th>code</th>
</tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr> 
  </table>
  </div>
  `;
});

```