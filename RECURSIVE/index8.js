var n= 148;
var k=3;
// var total = number + '';

// while(total.length > 1) {
//   var temp = 0;
//   for(var i = 0; i < total.length; i++) {
//      temp += +total[i];    
//   }
//   console.log(temp);
//   total = temp + '';
//   }    
// console.log(total);

// <---2nd way--->

function superDigit(P) {
    if (P < 10) {
      return P
    }  
    return superDigit(P % 10 + superDigit(parseInt(P / 10)));
  }
  
  let a= '123'
  n=3
  // a= numero.toString();
  P=(a.repeat(n));
  console.log(superDigit(P));
