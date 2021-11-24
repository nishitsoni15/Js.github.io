for(let i = 0; i <= 10; i++){
    for(let j = 0; j <= 20; j++){
        if( i == 4 || j == 0 && i <= 4 || j == 10 || j == 20 && i <= 4){
            document.write("*");

        }else{
            document.write("&nbsp;&nbsp;");
        }
    }
    document.write("<br>");
}