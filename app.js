

// const circle = {
//     radius:1,
//     location:{
//         x:1,
//         y:2
//     },
   
// }

// Factory Function (which is return the object)
function createCircle(radius){
    return {
      radius,
      draw:function(){
          console.log('draw '+this.radius);
      } 
       
    }
}
//const circle = createCircle(2); // Pascal Notation

// Constructor Function

function Circle(radius) {
    let color = "red";
   // instance members
    this.radius = radius;
    let defaultLocation = {x:10,y:20};
    this.getDefaultLocation = function(){
        return defaultLocation;
    };
    // "let computeOptimumLocation = function(factory){
    //     // dgfdf
    // } "
    // this.draw = function(){
    //     // defaultlaoction
    //     // compteoptimunlocation
    //   //  computeOptimumLocation(0.7);
    //     console.log('hello world good');
    // };
    // instance methods
    this.move = function(){
       // this.draw();
        console.log('move');
    }

    Object.defineProperty(this,'defaultLlocation',{
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if(!value.x || !value.y)
            throw new Error('Invalid Location');
            defaultLocation = value;

        }
    });
}

//console.log(Circle.prototype === c1.__proto__);// true
// prototype members
Circle.prototype.draw = function(){
    this.move();
    console.log('draw');
}
Circle.prototype.toString = function(){
    return 'circle with radius' +this.radius;
}
//Circle.call({},1,2,3,4);
//Circle.apply({},[1,2,3,4]);

//const Circle1 = new Function('radius',) 
//const another  = new Circle(266);

const c1 = new Circle(3);
const c2 = new Circle(7);
c1.draw();
console.log(c1.draw());
//another.getDefaultLocation();
//circle.draw();
//another.computeOptimumLocation(0.5);
//another.defaultLocation = 55;
// another.draw();


// another.location = {x:1,y:4};

// another['location'] = {x:5,y:7};
// // dynamically add properties
// const propertyName ='location';

// another['propertyName'] = {x:75,y:57};

// delete another['location'];
//enumerating
// for(let key in another){
//     if(typeof another[key] != 'function')
//   //  console.log(key,another[key]);
// }

//const keys = Object.keys(another);

//console.log(keys);

//if( 'radius' in another)

console.log('circle has radius');


let x = { value:36};

let y = x;

x.value = 20;

let obj = { value: 20 };
function increase(number){
    obj.value++;
}

increase(obj);
console.log(obj);

let person = { name: "Nagarjuna"};
// console.log(person);

// for(let key in person)
// console.log(key);

// console.log(Object.keys(person));

// let objectBase = Object.getPrototypeOf(person);
// console.log(objectBase);

// let descriptor = Object.getOwnPropertyDescriptor(objectBase,'toString');
// console.log(descriptor);

Object.defineProperty(person,'name',{
    writable:true,
    enumerable:true,
    configurable:false
});

delete person.name;
console.log(Object.keys(person));
console.log(person);

let obj1 = {};
console.log(obj.__proto__);
console.log(Object.prototype);

let arr = [];
console.log(arr.__proto__);
console.log(Array.prototype);
//console.log(circle);
console.log(Circle.prototype);

function Circle1(radius){
    // instance members
    this.radius = radius;

    this.move = function(){
        this.draw();
        console.log('move');
    }
}

// Prototype Members

Circle1.prototype.draw = function(){
    this.move();
    console.log('draw');
}

const cc = new Circle(4);

// return instance members
console.log(Object.keys(cc));


for(let key in cc) 
// returns the instance members and prototype members

console.log(key);
console.log(cc.hasOwnProperty('draw')); // false

console.log(cc.hasOwnProperty('radius'));  //  true

Array.prototype.shuffle = function(){
    // shuffle definition
    console.log('raja');
}

let myArray1 =[];
myArray1.shuffle();

function Shape(color){
 this.color = color;
}

Shape.prototype.duplicate = function(){
    console.log('duplicate')
}

function Circle2(radius,color){
   Shape.call(this,color)
    this.radius = radius;
}

Circle2.prototype = Object.create(Shape.prototype);

Circle2.prototype.draw = function(){
    console.log('draw');
}


const s = new Shape();
const c = new Circle2(4,"red");
console.log(c);

function mixin(target,...sources){
    Object.assign(target,...sources);
}

const canEat = {
    eat: function(){
        this.hunger--;
        consoe.log('eat');
    }
};

const canWalk = {
    walk: function(){
        console.log('walk');
    }
};

const canSwim ={
    swim: function(){
        console.log('swim');
    }
}

function Person(){

}
function Goldfish(){

}

mixin(Person.prototype,canEat,canWalk);
const person1 = new Person();
console.log(person1);

mixin(Goldfish.prototype,canEat,canWalk);
const goldfish = new Goldfish();
console.log(goldfish);


//ES6

// function Circle(radius){
//     this.radius = radius;

//     this.draw = function(){
//         console.log('draw');
//     }
// }

class Circle5{
    constructor(radius){
        this.radius = radius;
        this.move = function(){}
    }
    // instance method
    draw(){
        console.log('draw');
    }
    // Static methods
    static parse(str){
        const radius = JSON.parse(str).radius;
        return new Circle5(radius);
    }
}

const c5 = Circle5.parse('{"radius":43}');

console.log(c5);


//sayGoodbye();
//console.log(number); // hoisting
// Function Declaration

function sayHello(){}

sayHello();
// Function Expression

const sayGoodbye = function(){};
const number = 5;

//const cc1 = new Circle9();

// Class Declaration
class Circle9{

}

// class Expression

const Square = class {
    
};

class Math2 {
    static abs(value){

    }
}

Math2.abs('5');

// this (function expression)
const Circle44 = function(){
  this.draw = function(){
      console.log(this);
  }
}

const ccc = new Circle44();

// Method call(this is belongs to constructor)
ccc.draw();

const draw = ccc.draw;
// Function call (it is belongs to global object points to window level)
draw();

class Circle7 {
    draw(){
        console.log(this); // undefined
    }
}

const c11 = new Circle7();
c11.draw();

const c21 =c11.draw;
c21();