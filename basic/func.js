// this keyword in function return object with multiple Values in node environment but when it is used inside an arrow function it gives an empty object.
//when this keyword only itself used in an object it returns a current context(all keys values pairs of an object at time of execution).
//when this keyword used directly (without putting it inside any object or function), it returns an empty object in Node Environment, while In browser it returns an object with multiple key values pairs named as Window.
//thatswhy window object is most global object.(which can lead us to capture all events of window like click,form submit)

function practice(name){
    console.log(name)
}
practice("hello")