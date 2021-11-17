

function recursive (arr) {
    var newArray = [];
    arr.forEach(el => {
        if(Array.isArray(el)){
            const result = recursive(el);
            result.forEach(el => newArray.push(el));
        }else{
            newArray.push(el);
        }
    });
    return newArray;
}

const arr = [1,2,3,[4,5,[6,7]],8,[9,[10,11]]];
const finalArray = recursive(arr);

console.log(finalArray);