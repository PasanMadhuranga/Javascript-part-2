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