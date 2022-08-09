  // first assignment::
var date =  new Date();
var dateF = "Today Date::"+ date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
document.write(dateF);
//  var day =  "today day::" + date.getDayName();
//  document.write(day);
 var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 var dayName = days[date.getDay()];
 document.write("<br>Today day::" +dayName);


 // Assignment 2

 var name = window.prompt("Please Enter your name");
 document.body.style.backgroundColor="pink";
 document.body.style.fontSize="30px";
 document.body.style.margin="250px 0px 0px 650px"
// document.body.style.color="white";
 document.write("<br>"+ "Your name is::" + name.fontcolor("white"));



 // Assignment 3
 var first = parseInt(window.prompt("Please Enter first no"));
 var second = parseInt(window.prompt("Please Enter second no"));
 var sum = first + second;
 var sub = first - second;
 var multi = first * second;
 var division = first / second;

 document.write("<br>"+"<i>Sum is ::</i>" +sum);
 document.write("<br>"+"<i>Sub is ::</i>" +sub);
 document.write("<br>"+"<i>multi is ::</i>" +multi);
 document.write("<br>"+"<i>division is ::</i>" + division);


 // Assignment 4

// node myscript.js




 

