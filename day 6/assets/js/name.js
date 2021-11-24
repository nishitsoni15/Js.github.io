for(let i = 0; i <= 10; i++){
    for(let j = 0; j <= 30; j++){
       if(j == 0 || j == 0 + i || j == 10){
           document.write("*");
       }else{
            document.write("&nbsp;&nbsp;");
       }
    }
    document.write("<br>");
}