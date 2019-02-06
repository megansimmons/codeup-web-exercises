"use strict";


// console.log('Hello from external JavaScript.');
//
// alert('Welcome to my Website!');
//
// var userInput = prompt("What's your favorite color?");
//
//
//
// alert("Great " + userInput + " is my favorite color too!");
//
// var littleMer = prompt("How many days did you rent the Little Mermaid?");
// var broBear = prompt("How many days did you rent Brother Bear?");
// var hercules = prompt("How many days did you rent Hercules?");
//
// alert("Your total is " + (Number(littleMer) + Number(broBear) + Number(hercules)) * 3);

// var google = 400 * 6;
// var amazon = 380 * 4;
// var fb = 350 *10;
//
// var totalPay = google + amazon + fb;

var google = prompt("How many hours did you work at Google this week?");
var amazon = prompt("How many hours did you work at Amazon this week?");
var fb = prompt("How many hours did you work at Facebook this week?");

alert("Your paycheck will be " + ((Number(google) * 400) + (Number(amazon) *380) + (Number(fb) * 350)));
// console.log(totalPay);