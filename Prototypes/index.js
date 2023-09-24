// 2 - Prototypes and Prototypial Inheritance
// prototype is a regular object
x = {};
y = {value: 10};
console.log(Object.getPrototypeOf(x));
// Both x and y have the same prototype object
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));


// 3 - multi-level inheritance
function Circle(radius) {
    this.radius = radius;
}

const circle = new Circle(1);
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
function Circle(radius) {
    this.radius = radius;
}

const circle1 = new Circle(1);
console.log(circle1);
console.log(circle1.constructor.prototype); // parent of circle1 is Circle.prototype