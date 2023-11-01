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
//console.log(obj["name"])
//console.log(obj.show())
console.log(obj.age)
console.log(obj[sym])