let colors = {
    red: "#FF0000",
    green: "#00FF00",
    white: "#FFFFFF"
}
var reverse = Object.assign({}, ...Object.entries(colors).map(([x,y]) => ({ [y]: x })))
console.log(reverse);