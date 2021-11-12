function reverse(arr){
    var revArr = [];

    for(var i = arr.length - 1; i >= 0; i--){
        revArr.push(arr.pop());
    }
    return revArr;
}

console.log('reverse array is' + ' ' + reverse([10,20,30,40,50,60]));   //with push and pop function

//without push and pop

var arr1 = [100,200,300,400,500,600]

for(var i = arr1.length - 1 ; i >= 0 ; i--){
   console.log('reverse array is ' + arr1[i]);
}


