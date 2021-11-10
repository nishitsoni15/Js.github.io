function getAge(currentYear , birthYear){
    var a = currentYear; 
    var b = birthYear;
    var calAge = a - b;
    return calAge;
}
var c = getAge(2021,2000);

console.log(`my age is ${c}`);