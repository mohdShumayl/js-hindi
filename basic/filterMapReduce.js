const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
/*let book =  books.filter((Elem)=>{
   return Elem.edition > 2000 && Elem.genre == 'Science'
})*/
//console.log(book)

/*for (const key of book) {
    console.log(key.title)
}*/
/*book.forEach((Elem)=>{
    console.log(Elem.title)
})*/

/********************************************************************************************/
//map


/*let no = [4,6,7,4,5,3]
let mymap = no.map((elem)=>{
    return elem+1
})
console.log(mymap)*/

/********************************************************************************************/
//chaining

//let no = [4,6,7,4,5,3]
/*let mymap = no.map((elem)=>{
    return elem + 10
}).map((elem)=> elem + 1)
console.log(mymap)*/

/*let mymap = no.map((elem)=> elem + 10).map((elem)=> elem + 1)
console.log(mymap)*/ 

/*let mymap = no.map((elem)=> elem + 10).map((elem)=> elem + 1).filter((elem)=> elem > 15)
console.log(mymap)*/


/********************************************************************************************/
//reduce 

/*let no = [4,6,7]
let myy = no.reduce(function(accumulator, currentValue){
    console.log(accumulator +" --- "+ currentValue)
    return accumulator + currentValue
},0 /*0-accumulator*//*)
console.log(myy)*/

/*let no = [4,6,7,36]
let myy = no.reduce((accumulator, currentValue)=> accumulator + currentValue ,0)
console.log(myy)*/

/*let cart = [
    {
        course: "py",
        price: 1200
    },
    {
        course: "php",
        price: 1999
    },
    {
        course: "js",
        price: 1500
    },
]
let total = cart.reduce((initialVal, prices)=> initialVal + prices.price, 0)
console.log(total)*/