// (function() {

"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

//Conditional refactored into function below
// var response = confirm("Would you like to enter a number?");
//
//     if (response) {
//
//         var userNumber = prompt("What number would you like to use?");
//
//         if (isNaN(userNumber)) {
//             alert("Please enter a numerical value.")
//         } else {
//             if (userNumber % 2 === 0) {
//                 alert(userNumber + " is even.");
//             } else {
//                 alert(userNumber + " is odd.")
//             }
//
//             var numberPlusHundred = Number(userNumber) + 100;
//
//             alert("Your number plus 100 is " + numberPlusHundred);
//
//             // alert(userNumber + 100);
//
//             if (userNumber > 0) {
//                 alert(userNumber + " is positive.")
//             } else {
//                 alert(userNumber + " is negative.")
//             }
//         }
//     } else {
//         alert("You suck.");
//     }



var userNumber = prompt("What number would you like to use?");

function evenOdd(userNumber) {
    if (userNumber % 2 === 0) {
        alert(userNumber + " is even.");
    } else {
        alert(userNumber + " is odd.");
        //return "something in the console";
    }
}

evenOdd(userNumber);


function plusHundred(userNumber) {
    var numberPlusHundred = Number(userNumber) + 100;
    alert("Your number plus 100 is " + numberPlusHundred);
}

plusHundred(userNumber);

function posNeg(userNumber) {
    if (userNumber > 0) {
        alert(userNumber + " is positive.")
    } else {
        alert(userNumber + " is negative.")
    }
}
posNeg(userNumber);

    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined above, if the color passed is not
     * one of the ones defined above, return a message that says so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */

    function analyzeColor(color) {
        if(color === "blue") {
            return color.toUpperCase() + " is the color of the sky.";
        } else if(color === "red") {
            return color.toUpperCase() + " is an important color in nature.";
        } else if(color === "cyan") {
            return color.toUpperCase() + " is the color used in print cartridges.";
        } else {
            return "I don't know anything by that color."
        }
    }

console.log(analyzeColor("cyan"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message every time you refresh the page
     */
    function rainBow(randomColor) {
        return "The color is " + randomColor + ".";
    }

console.log(rainBow(randomColor));
/**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */
    switch(randomColor) {
        case "red":
            console.log(randomColor + " is important in nature.");
            break;
        case "orange":
            console.log(randomColor + " is the color of tangelos.");
            break;
        case "yellow":
            console.log(randomColor + " is the color of bananas.");
            break;
        case "green":
            console.log("Grass is " + randomColor + ".");
            break;
        case "blue":
            console.log("The color of blueberries is " + randomColor);
            break;
        case "indigo":
            console.log(randomColor + " is often forgotten.");
            break;
        case "violet":
            console.log("Apparently, " + randomColor + "s are blue.");
            break;
    }
    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */
    var userColor = prompt("Pick a color, any color...");

    function analyzeColor(userColor) {
        return alert("You picked the color " + userColor + "!");
    }
    analyzeColor(userColor);

    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */
var luckyNumber = Math.floor(Math.random() * 6);

var totalAmt = prompt("What is the total of your bill?");
    alert("Your lucky number is " + luckyNumber + ".");
    alert("Your original price was " + totalAmt + ".");

    function calculateTotal(luckyNumber, totalAmt) {
        if (luckyNumber === 0) {
            return "The total is discounted by " + "$" + (0 * totalAmt) + "."
        } else if (luckyNumber === 1) {
            return "The discounted price is " + "$" + (totalAmt - (.10 * totalAmt)) + ".";//return v alert allows more flexibility to use function in other capacities
        } else if (luckyNumber === 2) {
            return "The discounted price is " + "$" + (totalAmt - (.25 * totalAmt)) + ".";
        } else if (luckyNumber === 3) {
            return "The discounted price is " + "$" + (totalAmt - (.35 * totalAmt)) + ".";
        } else if (luckyNumber === 4) {
            return "The discounted price is " + "$" + (totalAmt - (.50 * totalAmt)) + ".";
        } else if (luckyNumber === 5) {
            return "The discounted price is " + "$" + (totalAmt - (1.00 * totalAmt)) + ".";
        } else {
            return "Not a winner."
        }
    }
    alert(calculateTotal(luckyNumber, totalAmt));
//switch statement
//local variable for discount calculation

//These are my tests for the above function
// console.log(calculateTotal(0, 100)); // The total is discounted by $0.
// console.log(calculateTotal(1, 100)); // The total is discounted by $10.
// console.log(calculateTotal(2, 100)); //The total is discounted by $25;
// console.log(calculateTotal(3, 100)); //The total is discounted by $35;
// console.log(calculateTotal(4, 100)); //The total is discounted by $50;
// console.log(calculateTotal(5, 100)); //The total is discounted by $100;


    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */

// Generate a random number between 0 and 6





// }) ();
