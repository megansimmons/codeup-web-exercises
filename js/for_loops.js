// (function() {
"use strict"

//FUNCTION EXAMPLE WITH LOOP


// function cubed(x) {
//      for (let a = 1; a <= x; a++) { //let user choose range with (x)
//          if(a % 2 === 0) {
//              continue;//skipping even numbers
//          }
//          if (a === x) {
//              break;//the loop will break once it gets to the input
//          }
//          console.log("The cube of " + a + "is " + a * a * a);
//      }
// }
//
// cubed(50);//pass the number 50 into the function



// var multiple = 1;
// function showMultiplicationTable(x) {
//     for(let multiple = 1; multiple <= 12; multiple++) {
//         console.log(x + " x " + multiple + " = " + (multiple * x));
//     }
//
// }
//
// showMultiplicationTable(1);
// showMultiplicationTable(5);
// showMultiplicationTable(12);


// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:


// for (var x = 1; x < 11; x++) {
//     var randomNumber = Math.floor(Math.random() * 180) + 20;
//     if (randomNumber % 2 === 0) {
//         console.log(randomNumber + " is even.");
//     }
//     else{
//
//     } console.log(randomNumber + " is odd.");
// }


// Create a for loop that uses console.log to create the output shown below.

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// for (var p = 1; p < 10; p++) {
//     var num = p.toString();
//     console.log(num.repeat(p));
//
// }

//For loop that counts back from 100 by 5
for (var x = 100; x > 0; x -= 5) {
    console.log(x);

}

// })();