// 2 - Prototypes and Prototypial Inheritance
// prototype is a regular object
x = {};
y = {value: 10};
console.log(Object.getPrototypeOf(x));
// Both x and y have the same prototype object
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));


// 3 - multi-level inheritance
function Circle1(radius) {
    this.radius = radius;
}

const circle = new Circle1(1);
console.log(Object.getPrototypeOf(circle)); // parent of circle is Circle.prototype
console.log(Object.getPrototypeOf(Object.getPrototypeOf(circle))); // parent of Circle.prototype is Object.prototype


// 4 - property descriptors
let person = {name: 'Pasan'};

Object.defineProperty(person, 'name', {
    writable: false, // cannot change the value of the property
    enumerable: false, // cannot enumerate the property
    configurable: false // cannot delete the property
});

person.name = 'John';
console.log(person.name);

console.log(Object.keys(person));

delete person.name;
console.log(person.name);


// 5 - constructor prototypes
function Circle2(radius) {
    this.radius = radius;
}

const circle1 = new Circle2(1);
console.log(circle1);
console.log(circle1.constructor.prototype); // parent of circle1 is Circle.prototype


// 6 - prototype vs instance members
function Circle3(radius) {
    // instance members
    this.radius = radius;
}

// prototype members
Circle3.prototype.draw = function () {
    console.log('draw');
}

const circle2 = new Circle3(1);
const circle3 = new Circle3(1);

// returns instance members (don't include draw method because it is a prototype member)
console.log('circle2', Object.keys(circle2));
console.log('circle3', Object.keys(circle3));

Circle3.prototype.toString = function () {
    return 'Circle with radius ' + this.radius;
}

console.log(circle2.toString());


// 7 - iterating instance and prototype members
function Circle4(radius) {
    // instance members
    this.radius = radius;

    this.move = function () {
        console.log('move');
    }
}

// prototype members
Circle4.prototype.draw = function () {
    console.log('draw');
}

const circle4 = new Circle4(1);

// returns only instance members
console.log('instance members', Object.keys(circle4));

// returns all members (instance and prototype)
console.log('instance + prototype members');
for (let key in circle4) {
    console.log(key);
}

console.log(circle4.hasOwnProperty('radius')); // true
console.log(circle4.hasOwnProperty('draw')); // false


// 8 - avoiding extending built-in objects
// Don't modify objects you don't own