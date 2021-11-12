//length method...
const birds = ['crow','sparrow','peacock','pigeon','dove'];
console.log('length of birds arr ' + birds.length);

//we can also point a last value of array....
var lastVal = birds[birds.length - 1];
console.log('last value ' + lastVal);

 //indexOf property..
 var x = birds.indexOf('peacock');
 console.log('index of birds arr ' + x);

 //includes property..
 var y = birds.includes('pigeon');
 var z = birds.includes('tiger');
 console.log('includes property ' + y);
 console.log('includes property ' + z);

 //we can change or update value of array...
 birds[2] = 'hen';
 console.log('updated arr ' + birds);

 //push method..
 birds.push('lion');
 console.log('push array ' + birds);

 //unshift method..
 birds.unshift('tiger');
 console.log('unshift array ' + birds);

 //pop method..
 birds.pop();
 console.log('pop array ' + birds);

 //shift method...
 birds.shift();
 console.log('shift array ' + birds);

 //reverse method...
 birds.reverse();
 console.log('reverse array ' + birds);

 //map method..
 var arr = [10,20,30,40,50,60];
 var mapArr = arr.map(mapArr => mapArr + 50);
 console.log('map array ' + mapArr);


 //forEach method..
 var forArr = arr.forEach(forArr => {
     console.log('forEach array ' + forArr + 50);
 })


 //filter method....
const filterArr = arr.filter(element => element === 30 || element === 60);
console.log('fliter array ' + filterArr);

//sort method..
var p = [4,5,3,6,8,9,1]
var sortArr = p.sort();
console.log('sort Array' + sortArr);


//concat method...
console.log('concat array ' + arr.concat(p));


//every method ..
const greaterFive = p.every(num => num > 5);
console.log( 'every method ' + greaterFive);

const lessNine = p.every(num => num <= 9);
console.log( 'every method ' + lessNine);


//some method...
const someFive = p.some(num => num > 5);
console.log( 'some method ' + someFive);

const someNine = p.some(num => num <= 0);
console.log( 'some method ' + someNine);


//join method..
console.log('join array ' + p.join(''));


