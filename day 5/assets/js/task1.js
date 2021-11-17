let color = {
    red : "#FF0000",
    green : "#00FF00",
    white : "#FFFFFF",
 }

var finalColor = Object.keys(color).map((key) => [String(key), color[key]]);

 console.log(finalColor);

//  var clone = [];
//  for (let key in finalColor){
//      clone[key] == finalColor[key];
//      console.log(clone);
//  }

