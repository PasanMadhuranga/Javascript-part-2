// 2 - Object Literals
const circle1 = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw ' + this.radius);
    }
};

circle1.draw();


// 3 - Factories
function createCircle(radius){
    return {
        radius,
        draw: function() {
            console.log('draw ' + radius);
        }
    }
}

const circle2 = createCircle(2);
circle2.draw();


// 4 - Constructors
function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw ' + radius); 
    }
}

const circle3 = new Circle(3)
circle3.draw();


// 5 - Constructor Properties
// Every object has a constructor property and that references the function that was used to create that object
console.log(circle1.constructor);
console.log(circle2.constructor);
console.log(circle3.constructor); 


// 6 - Functions are Objects 
console.log(Circle.name); // name of the function
console.log(Circle.length); // number of arguments
console.log(Circle.constructor); // function that created the function

Circle.call({}, 1); // same as const x = new Circle(1);


// 7 - Value vs Reference Types
// Value Types: Number, String, Boolean, Symbol, undefined, null
// Reference Types: Object, Function, Array
let x = {value: 10};
let y = x;
x.value = 20;
console.log(x);
console.log(y);

let number = 1;
function increase(number){
    number++;
}

increase(number);
console.log(number);


let obj = {value: 3};
function increase(obj){
    obj.value++;
}
increase(obj);
console.log(obj); 


// 8 - Adding or Removing Properties
const circle4 = new Circle(4);
// Adding
circle4.location = {x: 1, y: 2};
circle4['area'] = function(){
    console.log('area');
}
console.log(circle4);

// Removing
delete circle4.location;
console.log(circle4);


// 9 - Enumerating Properties
for (let key in circle4){
    console.log(key, circle4[key]);
}

// get only the properties
for (let key in circle4){
    if(typeof circle4[key] !== 'function')
        console.log(key, circle4[key]);
}

// get all the keys
const keys = Object.keys(circle4);
console.log(keys);

// check if a property exists
if('radius' in circle4)
    console.log('Circle has a radius');


// 10 - Abstraction & 11 - Private Properties and Methods
function Circle(radius){
    this.radius = radius;
    let defaultLocation = {x: 0, y: 0}; // private property
    let computeOptimumLocation = function(factor){  // private method
        // ...
        console.log('computeOptimumLocation', factor); 
    }
    this.draw = function(){
        computeOptimumLocation(0.1);
        console.log('defaultLocation', defaultLocation);
        console.log('draw', this.radius);
    }
}

const circle5 = new Circle(5);
circle5.draw();