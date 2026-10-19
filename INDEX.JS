let nbr1 = (prompt("ENTER FIRST NBR"));
let operator = (prompt("ENTER OPERATOR: +, -, *, /"));
let nbr2 =(prompt("ENTER SECOND NBR"));
let result;
switch (operator) {
    
case "+":
    result = (nbr1) + (nbr2);
    break;
case "-":
    result = (nbr1)-(nbr2);
    break;
case "*":
    result =(nbr1) * (nbr2);
    break;
case "/":
    result = (nbr1) / (nbr2);
    break;
 
default :
result = "INVALID OPERATOR";
}
alert ("THE RESULT IS: " + result);
