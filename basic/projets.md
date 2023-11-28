# projects

## project one 

[click me ](google.com)

# Solution Code

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