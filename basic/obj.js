let sym = Symbol("nf")

let obj = {
    name: "Mohd",
    "age": 23,
    [sym]: "nf",
    phn: 536457466,
    show: function(){
        console.log(`my name is ${this.name}`)
    }
}


let obj1 = {abc:8, def:4}
let obj2 = {c:3, d:5}
let obj3 = {...obj1, ...obj2}
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