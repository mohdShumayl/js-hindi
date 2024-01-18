// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })




// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })




// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })



// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))




/*const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

// async function consumePromiseFive(){
//     let resp = await promiseFive
//     console.log(resp)
// }

async function consumePromiseFive(){
    try {
        let resp = await promiseFive
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()*/





// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()


// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.


// let promiseOne = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log('hi')
//         resolve()
//     },1000)
// })
// promiseOne.then(()=>{
//     console.log("promise resolved")
// })

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({
//             name: "shumail",
//             id: 476
//         })
//     },1000)
// }).then((user)=>{
//     console.log(user)
//     return user.name
// }).then((name)=>{
//     console.log(name)
// })

// new Promise((resolve,reject)=>{
//     let error = false;
//     if (!error){
//         setTimeout(()=>{
//             resolve({
//                 leaning: "js",
//                 months: 3
//             })
//         },5000)
//     }
//     else{
//         reject('error occured')
//     }

// }).then((user)=>{
//     console.log(user)
//     return user.months
// }).then((months)=>{
//     console.log(`months Given to subject: ${months}`)
// }).catch((error)=>{
//     console.log(error);
// })



// let promise6 = new Promise((resolve,reject)=>{
//     let error = false;
//     if(!error){
//         setTimeout(()=>{
//             resolve({
//                 name: "Mohd",
//                 age: 23
//             })
//         },1000)
//     }
//     else{
//         reject('error')
//     }    
// })
// promise6.then((user)=>{
//     let arr = [user.name, user.age]
//     return arr
// }).then((arr)=>{
//     console.log(arr[0])
//     console.log(arr[1])
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("finallyyyyyy")
// })