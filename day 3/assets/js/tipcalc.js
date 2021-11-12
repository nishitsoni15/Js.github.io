

function Generate(){
    var bill = [100,200,50,500,70,30,400];
    console.log(`Without GST bill amount is ${bill}`);

    for(var i = 0; i <= bill.length; i++){
        if(bill[i] <= 100){
        
            var result = bill[i] + bill[i] * 15/100;
            console.log('15% gst ' + result);
          
        }
       else if(bill[i] > 100){
            var result1 = bill[i] + bill[i] * 20/100;
            console.log('20% gst ' + result1);

        }
    }

  
  
}


console.log(Generate());