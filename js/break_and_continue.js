// (function(){

"use strict"

// 2/23/19
// for(var i = 0; i < 101; i++) {
//     if(i === 50) {
//         continue;
//     } else if(i % 2 === 1) {
//         console.log('Odd number: ' + i);
//     } else if(i % 2 === 0) {
//         console.log('Even number: ' + i);
//     }
// }
var i = 0;
// while (i < 101) {
//     i++;
//     if(i === 50) {
//         continue;
//     } else if(i % 2 === 1) {
//         console.log('Odd number: ' + i);
//     } else if(i % 2 === 0) {
//         console.log('Even number: ' + i);
//     }
// }
//if increment is at bottom of conditional-->infinite


do {
    i++;
    if(i === 50) {
        continue;
    } else if(i % 2 === 1) {
        console.log('Odd number: ' + i);
    } else if(i % 2 === 0) {
        console.log('Even number: ' + i);
    }
}while (i <= 99);


// Lecture Notes 2/13/19
//LECTURE 2/13/19

//BREAK CONTINUE: GOOD FOR LOOKING THRU ARRAY FOR CERTAIN THING
//
// let randomNumber = Math.floor(Math.random() * 25) + 1;//make the random number outside of loop: the randomNumber will NOT change each time loop runs
// //if randomNumber INSIDE loop; it will be a new random number each time loop runs
// console.log(randomNumber);
// for(let x = 1; x <= 25; x++) {
//     console.log(x);//this will look for 1 - 25 unless we tell it to break
//     if(x === randomNumber) {
//         console.log("The number is " + x);//once x is the same as the randomNumber
//         break;
        //console.log(x); will never run because the loop breaks out first!
//     }
// }
//CONTINUE; forces next iteration of loop...kind of like "skip"...use for things you DON'T want to show up

// for (var i = 1; i < 100; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log("Here is " + i );
// }


//Exercise

// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//check for isNaN, even #s, and out of range
// let userChoice = prompt("Pick and odd number between 1 and 50.");

// for(var x = 1; x < 51; x) {
//     // userChoice = parseInt(userChoice);
//
//     if (+userChoice % 2 === 0) {
//         userChoice = prompt("This isn't an odd number.");
//         continue;
//     } else {
//         console.log("Your odd number is : " + userChoice);
//     }
//     if (x % 2 === 1) {
//         break;
//     }
// }

// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

// for(let x = 1; x < 51; x++) {
//         if (+userChoice === x) {
//             console.log("Yikes, skipping this number: " + userChoice);
//             continue;
//         } else if (x % 2 === 1) {
//             console.log("Here is an odd number: " + x);
//         }
// }

//walk thru example for break/continue exercises
// var input;//global scope --> using for next two loops
// while(true) {
//     input = prompt("Please enter a number between 1 - 50.");
//     if(isNaN(input)){
//         alert("That is not a number, please try again.");
//         continue;
//     }
//     if(input < 1 || input > 50){
//         alert("Number is out of range.");
//         continue;
//     }
//     if(input % 2 === 0) {
//         alert("Please enter an ODD number.");
//         continue;//this is unnecessary bc it is the last statement in the loop
//     } else {
//         break;
//     }
// }
//
// console.log(input);
// for (var x = 1; x <= 50; x++) {
//     if(x % 2 === 0){
//         continue;
//     }
//     if(x == input) {
//         console.log("Yikes, skipping number " + x);
//     } else {
//         console.log("Here's an odd number " + x);
//     }
//
// }

// for(let x = 1; x < 51; x++) {
//
//     if (x % 2 === 1) {
//         console.log("Here is an odd number: " + x);
//     } else if (x === ) {
//         console.log("Number to skip is: " + x);
//         continue;
//     }
//  }

// })();
