// (function(){

"use strict"


// Lecture Notes 2/13/19

//CONTINUE; forces next iteration of loop...kind of like "skip"...use for things you DON'T want to show up

// for (var i = 1; i < 100; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log("Here is " + i );
// }

//Exercise

// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

let userChoice = prompt("Pick and odd number between 1 and 50.");

for(var x = 1; x < 51; x) {
    // userChoice = parseInt(userChoice);

    if (+userChoice % 2 === 0) {
        userChoice = prompt("This isn't an odd number.");
        continue;
    } else {
        console.log("Your odd number is : " + userChoice);
    }
    if (x % 2 === 1) {
        break;
    }
}

// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

for(let x = 1; x < 51; x++) {
        if (+userChoice === x) {
            console.log("Yikes, skipping this number: " + userChoice);
            continue;
        } else if (x % 2 === 1) {
            console.log("Here is an odd number: " + x);
        }
}




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
