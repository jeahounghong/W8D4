class Lamp {
    constructor() {
        this.name = "a lamp";
    }
}

const turnOn = function() {
    console.log("Turning on " + this.name);
};  

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

console.log(this);

Function.prototype.myBind = function(obj){
    console.log(this);
    return () => this.call(obj); // apple(context, [arg1, arg2])
}




const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);
turnOn.myBind(lamp)();
boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"