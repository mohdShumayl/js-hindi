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

let obj = {
    name: "Mohd",
    "age": 23,
    phn: 536457466,
    /*show: function(){
        console.log(`my name is ${this.name},my age is ${this.age}`)
    }*/
}
for (const key in obj) {
    console.log(obj[key])
}