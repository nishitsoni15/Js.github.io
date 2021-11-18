var user = {
    name:'nishit',
    profession: 'developer',
    returnAge: function(age){
        var age;
        if (age > 18){
            return 'Major';
        }else{
            return 'Minor';
        }
    }
}

console.log(user.returnAge(15));