//for in loop returns a keys of an object and array
//for of loop returns value of keys "but it cannot ittrate object"
//to ittrate object we use for in loop and to ittrate array we use for of loop.
/***********************************************************************************************************/

//for of

/*let arr = [1,2,3,4,5,6,7]
for (const i of arr) {
    console.log(i)
}*/

/*let name = "mohd shumail"
for (const n of name) {
    console.log(n)
}*/

/*const map = new Map()
map.set("mohd","Shumail")
map.set("yrhdhjg","tmieraih")
map.set("ewhdhjg","twffgadih")

//no Similar values can be inputed twice in map
//map.set("mohd","Shumail")
console.log(map)*/

const map = new Map()
map.set("mohd","Shumail")
map.set("yrhdhjg","tmieraih")
map.set("ewhdhjg","twffgadih")
/*for (const key of map) {
    console.log(key)
}*/

//for (const [key,value] of map) console.log(key+" - "+ value)
/*for (const [key,value] of map){
    console.log(key+" - "+ value)
}*/


//we cannot ittrate object by for of loop
/*let obj = {
    name: "Mohd",
    "age": 23,
}
for (const key of obj) {
    console.log(key)
}*/


/**********************************************************************/
//for in loop

let obj = {
    name: "Mohd",
    "age": 23,
    phn: 536457466,
}

//for in loop gives keys of object and array we should have to ittrate further for getting value of keys
/*for (const key in obj) {
    console.log(key)
}*/
/*
for (const key in obj) {
    console.log(`${key} and it's value is ${obj[key]}`)
}*/

let myArr = ["dhida","dsvfaop","hihgf","afidTRY","FEUHIKA"]
/*for (const key in myArr) {
    console.log(key)
}*/
/*for (const key in myArr) {
    console.log(`${key} and it's value ${myArr[key]}`)
}*/


//map cant be ittrated by for in
/*const myMap = new Map()
map.set("mohd","Shumail")
map.set("yrhdhjg","tmieraih")
map.set("ewhdhjg","twffgadih")

for (const key in myMap) {
    console.log(key)
}*/


/**********************************************************************************************************/