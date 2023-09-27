// 1 - ES6 Classes

class Circle1 {
    constructor(radius) {
        this.radius = radius;
        this.move = function() { // this method will be added to the Circle object
            console.log('move');
        } 
    }

    draw() { // this method will be added to the CircleBase object
        console.log('draw');
    }
}

const c = new Circle1(21);
console.log(c);


// 2 - Hoisting
// Function Declaration : Hoisted
function sayHello() {}

// Function Expression : Not Hoisted
const sayGoodbye = function() {};

// Class Declaration : Not Hoisted
class Circle2 {}

// Class Expression : Not Hoisted
const Square1 = class {}; // Do not use this syntax much


// 3 - Static Methods
class Circle3 {
    constructor(radius) {
        this.radius = radius;
    }

    // Instance Method
    draw() {
        console.log('draw');
    }

    // Static Method
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle3(radius);
    }
}

const circle = Circle3.parse('{"radius": 1}'); // Static methods are called without creating an object of the class