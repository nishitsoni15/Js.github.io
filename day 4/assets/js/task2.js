const users = [
    { name: "John", age : 42},
    { name: "Alex", age : 42},
    { name: "smriti", age : 26},
    { name: "kashi", age : 21},
    { name: "Doe", age : 33},
    { name: "user", age : 15}
]

var object = users.reduce(
    (obj, item) => Object.assign(obj, {[item.age] : [item.name]})
);
console.log(object);