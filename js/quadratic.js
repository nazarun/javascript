 /* ax*ax+bx-c=0 */
 //   Math.sqrt();
 
var  a = Number(prompt('Enter value of A'));
var  b = Number(prompt('Enter value of B'));
var  c = Number(prompt('Enter value of C'));
 
 function quadratic(a,b,c){
     if(a === 0){
      return 'Enter value of A different from 0';
     }
     var D = b*b-4*a*c;
     if(D > 0){
     var x1 = (-b+Math.sqrt(D))/(2*a);
     var x2 = (-b-Math.sqrt(D))/(2*a);
      return x1 + ' <br>' + x2;
     }else if(D === 0){
     x1 = -b/(2*a);
      return x1;
     }else{
      return 'No valid results';
     }   
 }   
   
   document.write(quadratic(a,b,c));
   
   
//document.write(quadratic(1,-26,120));
//document.write(quadratic(2,1,-3)); 
//document.write(quadratic(9,-12,4));