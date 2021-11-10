function getBmi(weight, height){
    var w = weight;
    var h = height;

    var calBmi = w / (h*h);
    return calBmi;
}
var x = getBmi(94, 6.11);
console.log(`my BMI is ${x}`);