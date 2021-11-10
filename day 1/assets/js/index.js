let a = 10; //number data type
var b = 'I am Nishit'; //string
const c = 30;
let d;
let x = 20;
let y = 21;
let z = 20;

console.log(x == y);  //false
console.log(x == z);    //true (boolean)

function add() {
    a = 20;
    var b = 'my surname is soni';
    const c = 40;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(c);
console.log(a);
console.log(b);
add();

console.log(typeof 10);
console.log (typeof b);
console.log(typeof d);


var s = {
    a:10,
    b:20,
    c:'hello'  
}                 //object
console.log(s);
console.log(s.b);
console.log(s.c);  //object access


var p = [10,20,'hey',30.0];  //array

console.log(p);
console.log(p[2]);
console.log(p[0]); //array access