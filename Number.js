var number = 25;
var number1 = "25.2";
number1 = parseFloat(number1) // parseFloat convert integer then add 
number1 = parseInt(number1) //extra part not allow
number1 = +number1 // covert number
number1 = "" +number1
console.log(typeof number1);
console.log(number + number1);
console.log(number + number1);


// Tofixed means how meny position to you go there 
var a = 0.1;
var b = 0.2;
var total = a + b
total = total.toFixed(2) 
console.log(total);
