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

//an use toFixed for purpose of creating a dollar amt with decimal places.
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

//can use + instead of Number()

//7 variables, one for each hourly rate at each company and one for each number of hours worked at the three locations, a seventh one for total payment received.

var googleHourlyRate = prompt("What si the Google hourly rate?");


var googleHours = prompt("How many hours did you work at Google?");

var totalPayment = googleHours * googleHourlyRate;

alert("Total wages earned: $" + totalPayment.toFixed(2));



//third problem: school enrollment

var classIsFull = confirm("Is the class full?");//confirm useful for boolean data values. good idea to make var names match user thinking
var classSchedulesCheck = confirm("class schedules check out.");

var studentEnrolled = !classisFull && classSchedulesCheck;

alert("Student enrollment status: " + studentEnrolled;)
//could use a ternary operator to say more than true or false. ie can enroll/cannot enroll



///problem: product offer

var numberOfItems = prompt("Enter number of items bought: ");
var offerIsValid = confirm("offer is valid");
var isPremiumMember = confirm("Is a premium member");

var productDiscountApplied = (isPremiumMember || Number(numberOfItems) > 2) && offerIsValid;

//premium members need to have a valid offer to...regroup with parenthesis!!!
//get working solution first, THEN refactor
//need to ensure the numberOfItems is converted into a number using + sign or Number

alert("Product discount status: true");