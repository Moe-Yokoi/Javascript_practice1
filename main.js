
/*5 variables*/

let myvariable1 = "Dog"

document.getElementById("text1").innerHTML = myvariable1;

let myvariable2 = "Cat"

document.getElementById("text2").innerHTML = myvariable2;

let myvariable3 = "Rabbit"

document.getElementById("text3").innerHTML = myvariable3;

let myvariable4 = "Bird"

document.getElementById("text4").innerHTML = myvariable4;

let myvariable5 = "Squirrel"

document.getElementById("text5").innerHTML = myvariable5;


/*operator*/

document.getElementById('text6').innerHTML = (49 + 20 - 19);



/*operator using variables*/


var a, b, c;
a = 30;
b = 20;
c = 10;

document.getElementById("text7").innerHTML = (a + b) *c;


/*function*/

var d = myfunction (40, 20, 10)

document.getElementById("text8").innerHTML = d;

function myfunction (e, f, g){
	return (e + f - g);
}

/*condition*/

function myfunction2() {
var day = new Date().getDay();
      var sayday;

      if (day == 0) {
      	sayday = "Sunday";
      } 
      else if (day == 1) {
      	sayday = "Monday";
      } 
      else if (day == 2) {
      	sayday = "Tuesday";
      } 
      else if (day == 3) {
      	sayday = "Wednesday";
      } 
      else if (day == 4) {
      	sayday = "Thursday";
      } 
      else if (day == 5) {
      	sayday = "Friday";
      } 
      else if (day == 6) {
      	sayday = "Saturday";
      } 
      else {
      	sayday = "Day not found";
      }
      

     
      document.getElementById("text9").innerHTML = sayday;
}


/*Variables*/

let myvariable = "Moe"

document.getElementById("test").innerHTML = myvariable;

/*operator*/

document.getElementById('test1').innerHTML = (5 + 6) *10;

var x, y;
x = 5;
y = 6;

document.getElementById("test2").innerHTML = x + y;

/*function*/

var z = myFunction (4, 3);
document.getElementById("test3").innerHTML = z;

function myFunction (p, q) {
	return p * q;
}

/*Function Temperature*/

function toCelsius (fahrenheit) {
	return (5/9) * (farenheit-32);


}
document.getElementById("test4").innerHTML = toCelsius(77);

/*condition*/

function myFunction1() {
      var hour = new Date().getHours();
      var greeting;
      if (hour < 18) {
      	greeting = "Good Day";
      } else {
      	greeting = "Good evening";
      }
      document.getElementById("test5").innerHTML = greeting;

}