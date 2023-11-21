let sym = Symbol("nf")

let obj = {
    name: "Mohd",
    "age": 23,
    [sym]: "nf",
    phn: 536457466,
    show: function(){
        console.log(`my name is ${this.name},my age is ${this.age}`)
    }
}

/*
function handelObj(anyobject){
    console.log(`${anyobject.show} & my Phn no is ${anyobject.phn}`)
}
handelObj(obj)*/

/*
function handelObj(anyobject){
    console.log(anyobject.phn)
}
handelObj(obj)
*/
arrayy = [2,6,968,64,64,9645,4,6,46,4]
/*function handleArray(anyarray){
    console.log(anyarray)
}
handleArray(arrayy)*/

/*
function handleArray(anyarray){
    console.log(anyarray[3],anyarray[6],anyarray[1])
}
handleArray(arrayy)*/

/*function calculateNo(num1){
    console.log(num1)
}
calculateNo(4)*/


//rest oprator used to get multiple prameter from an func and store it in array 
/*function calculateNo(...num1){
    console.log(num1)
}
calculateNo(4,5,6,89,42)*/


/*function calculateNo(num, ...num1){
    console.log(num1)
}
calculateNo(4,5,6,89,42)*/


/*function calculateNo(num, ...num1){
    console.log(num, num1)
}
calculateNo(4,5,6,89,42,"hrh")*/

/*let obj1 = {abc:8, def:4}
let obj2 = {c:3, d:5}
let obj3 = {...obj1, ...obj2}*/  //spread oprator used to spread an values of Object and store it in another

//console.log(obj3)
//console.log(Object.keys(obj3))
//console.log(Object.values(obj3))
//console.log(Object.entries(obj3))

//object Destructure
/*const{abc}=obj1
console.log(abc)*/

/*const{abc:a}=obj1
console.log(a)*/

/*
let obj1 = {
    1: "mohd",
    2: "shumail"
}
let obj2 = {
    3: "aalu",
    4: "tulib"
}
Object.assign(obj1, obj2)
//console.log(obj3)
console.log(obj1)
*/

/*
obj.myage = function(){
    //console.log(`my age is ${this.age}`)
    console.log(`my age is ${obj["age"]}`)
}
obj.myage()
*/

//obj.name = "Mohammad"
//console.log(obj["name"])

//console.log(obj["name"])
//console.log(obj.show())
//console.log(obj.age)
//console.log(obj[sym])

//let arr = [2,3,5,6,8,1]
//arr.forEach((i) => {
//console.log(i/2)
//})

//arr.forEach((element) => {
//    console.log(element * 2)
//})