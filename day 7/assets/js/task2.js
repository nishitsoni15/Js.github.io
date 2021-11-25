var arr = [1,3,5,1,6,7,5,3,7,6,9,2,3];
var cnt;
console.log(arr);


for(var i=0;i<arr.length;i++)
{
    cnt = 1;
    for(j=0; j<arr.length;j++)
    {
        if(i !== j){
        
            if(arr[i] === arr[j])
            {
        
                cnt = cnt + 1;
                
                
            }
        }  
    }
   
console.log( arr[i] + ' times : ' + cnt);
   
    
}