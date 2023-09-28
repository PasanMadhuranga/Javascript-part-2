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


// 4 - This Keyword 
class Circle4 {
    constructor(radius) {
        this.radius = radius;
    }

    draw() {
        console.log(this);
    }
}

const c4 = new Circle4(12);
// Method Call
c4.draw(); // Circle4 { radius: 12 }

const draw = c4.draw;
// Function Call
draw(); // This will return undefined because by default body of classes are executed in strict mode 


// 5 - Private Members Using Symbols
const _radius = Symbol();
const _draw = Symbol();

class Circle5 {
    constructor(radius) {
        this[_radius] = radius;
    }

    [_draw]() {
        console.log('draw');
    }
}

const c5 = new Circle5(23);
console.log(c5); 


// 6 - Private Members Using WeakMaps
const _radius2 = new WeakMap();
const _move = new WeakMap();

class Circle6 {
    constructor(radius) {
        _radius2.set(this, radius);
        _move.set(this, () => {
            console.log('move', this);
        });
    }

    draw() {
        _move.get(this)();
        console.log('draw');
    }
}

const c6 = new Circle6(4);
console.log(c6); // Circle6 {}
console.log(_radius2.get(c6)); // 4
c6.draw(); // move Circle6 {} draw


// 7 - Getters and Setters
const _radius3 = new WeakMap();
 class Circle7 {
    constructor(radius) {
        _radius3.set(this, radius);
    }

    get radius() {
        return _radius3.get(this);
    }

    set radius(value) {
        if (value <= 0) throw new Error('Invalid radius');
        _radius3.set(this, value);
    }
}

const c7 = new Circle7(1);
console.log(c7.radius); // 1
c7.radius = 10;
console.log(c7.radius); // 10
// c7.radius = -1; // Error: Invalid radius


// 8 - Inheritance
class Shape {
    constructor(color) {
        this.color = color;
    }

    move() {
        console.log('move');
    }
}

class Circle8 extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    draw() {
        console.log('draw');
    }
}

const c8 = new Circle8('green', 4);
console.log(c8); // Circle8 { color: 'green', radius: 4 }


// 9 - Method Overriding
class Shape2 {
    move() {
        console.log('move');
    }
}

class Circle9 extends Shape2 {
    move() {
        super.move();
        console.log('circle move');
    }
}

const c9 = new Circle9();
c9.move(); // move circle move