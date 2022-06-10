// initalizes variables to be used in type comparisons
var item1 = "Not an int";
var item2 = 16;
var item3 = 9**9**9;
var item4 = -1*9**9**9;
var item5 = "16";

//displays NaN trying to parse an integer on a string
document.write(parseInt(item1) + "<br>");

// displays true checking if parsing an integer on a string returns NaN 
document.write(isNaN(parseInt(item1)) + "<br>");

// displays false checking if parsing an integer on a string returns NaN 
document.write(isNaN(item2) + "<br>");

// displays Infinity by using a very large number
document.write(item3 + "<br>");

// displays -Infinity by using a very small number
document.write(item4 + "<br>");

// displays false because item2 is not larger than item3
document.write((item2>item3) + "<br>");

// displays true because item4 is smaller than item3
document.write((item4<item3) + "<br>");

// logs a item2^item2 in the console
console.log(item2**item2);

// logs false in the console because item2 does equal itself
console.log(item2 != item2);

// displays true because item1 equals itself
document.write((item1 == item1) + "<br>");

// displays false because item1 does not equal item2
document.write((item1 == item2) + "<br>");

// displays true because item1 is the same value and datatype as itself
document.write((item1 === item1) + "<br>");

// displays false because item1 is not the same value or datatype as item2
document.write((item1 === item2) + "<br>");

// displays false because even though they're the same value, item1 and item5 are not the same datatype
document.write((item1 === item5) + "<br>");

// displays false because even though they are the same datatype, item3 and item2 are not the same value
document.write((item3 === item2) + "<br>");

// displays true because item2 and item2 are both themselves
document.write((item2 && item2 == item2) + "<br>");

// displays false because while item2 is equal to item2, item3 isn't
document.write((item2 && item3 == item2) + "<br>");

// displays true because while item2 isn't equal to item1, item1 is
document.write(((item1 || item2) == item1) + "<br>");

// displays false because neither item1 nor item2 is item3
document.write(((item1 || item2) == item3) + "<br>");

// displays true because item1 is not item3
document.write((item1 != item3) + "<br>");

// displays false because item1 is equal to item1
document.write((item1 != item1) + "<br>");