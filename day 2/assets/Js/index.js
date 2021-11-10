var sym1 = Symbol('kiran');
var sym2 = Symbol('kiran');

console.log(sym1 == sym2);  // this is symbol ex.. as we can see that both values are same but ans is false because symbol is a unique identifier.



//comparison operator...

var x = 20;
var y = '20';

console.log(x == y);
console.log(x === y);

//assignment operator....

var a = 2;
a += 5;
var b = 3;
b++;
b--;
var c = 5;
c *= 4;
console.log(`value is ${a}`);
console.log(`value is ${b}`);
console.log(`value is ${c}`);

//function declaration..
var x =  add(10,30) 
console.log(`addition with function declaration is ${x}`);

function add(a, b){
    let c = a + b;
    return c;
}

//function expression..

var sub = function(a, b){
    let c = a - b;

    return c;
}
let d = sub(50,30)
console.log(`sub with function expression is ${d}`);

//arrow function..
var n = 11;
var p = 12
var multiply = () => n * p;
var add = () => n + p;
var sub = () => n - p;
var div  = () => n / p;
console.log(`with arrow function multiply is ${multiply()}`);
console.log(`with arrow function addition is ${add()}`);
console.log(`with arrow function subtraction is ${sub()}`);
console.log(`with arrow function division is ${div()}`);