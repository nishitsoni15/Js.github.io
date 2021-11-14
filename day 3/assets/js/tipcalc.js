var bill = [100,200,50,500,70,30,400];

const tip = [];
const total = [];

function Generate(bill){
    for(var i = 0; i <= bill.length; i++){
        if(bill[i] <= 100){
            tip.push(bill[i] * 15/100);
            total.push(bill[i] + bill[i] * 15/100); 
        }
       else if(bill[i] > 100){
            tip.push(bill[i] * 20/100);
            total.push(bill[i] + bill[i] * 20/100);
        }
    }  
}

Generate(bill);

console.log('bill value ' + bill);
console.log('calc tip ' + tip);
console.log('total bill ' + total);


