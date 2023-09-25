// 1 - creating your own prototypical inheritance
function Shape1(){

} 

Shape1.prototype.duplicate = function(){
    console.log('duplicate');
}

function Circle1(radius){
    this.radius = radius;
}

Circle1.prototype = Object.create(Shape1.prototype);

Circle1.prototype.draw = function(){
    console.log('draw');
}

const s = new Shape1();
const c = new Circle1(1);

console.log(s);
console.log(c); 


// 2 - resetting the constructor
function Shape2(){

} 

Shape2.prototype.duplicate = function(){
    console.log('duplicate');
}

function Circle2(radius){
    this.radius = radius;
}

Circle2.prototype = Object.create(Shape2.prototype);
Circle2.prototype.constructor = Circle2; // reset the constructor to Circle2

Circle2.prototype.draw = function(){
    console.log('draw');
}

console.log(new Circle2.prototype.constructor(1)); // this is same as new Circle2(1)
console.log(new Circle1.prototype.constructor()); // this creates a new Shape1 object


// 3 - calling the super constructor
function Shape3(color){
    this.color = color;
}

Shape3.prototype.duplicate = function(){
    console.log('duplicate');
}

function Circle3(radius, color){
    Shape3.call(this, color); // calling the super constructor
    this.radius = radius;
}

Circle3.prototype = Object.create(Shape3.prototype);
Circle3.prototype.constructor = Circle3; // reset the constructor to Circle3

Circle3.prototype.draw = function(){
    console.log('draw');
}

const c3 = new Circle3(3, 'red');
console.log(c3);


// 4 - intermediate function inheritance
// this function is used to set the prototype and constructor
function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Square1(size){
    this.size = size;
}

function Circle4(radius){
    this.radius = radius;
}

function Shape4(color){
    this.color = color;
}

Circle4.prototype.draw = function(){
    console.log('draw');
}

Shape4.prototype.duplicate = function(){
    console.log('duplicate');
}

extend(Square1, Shape4); // this will set the prototype and constructor of Square1
extend(Circle4, Shape4); // this will set the prototype and constructor of Circle4

const s4 = new Square1(10);
const c4 = new Circle4(5);

console.log(s4);
console.log(c4);


// 5 - method overriding
function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Circle5(radius){
    this.radius = radius;
}

function Shape5(color){
    this.color = color;
}

Circle5.prototype.draw = function(){
    console.log('draw');
}

Shape5.prototype.duplicate = function(){
    console.log('duplicate');
}

extend(Circle5, Shape5); // this will set the prototype and constructor of Circle5

// if we override this before the extend function, the duplicate method won't be overridden
Circle5.prototype.duplicate = function(){
    Shape5.prototype.duplicate.call(this); // this will call the duplicate method of the parent
    console.log('duplicate circle');
}

const c5 = new Circle5(5);
console.log(c5);
console.log(c5.duplicate()); // duplicate circle