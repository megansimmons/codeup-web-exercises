// (function() {
    "use strict";

    /**
     * TODO:
     * Create a function called 'sayHello' that takes a parameter 'name'.
     * When called, the function should return a message that says hello to the passed in name.
     *
     * Example
     * > sayHello("codeup") // returns "Hello, codeup!"
     */
    function sayHello(name) {           //function declaration syntax
        return "Hello, " + name + "!"
    }

    // var sayHello = function(name) {    //function expression
    //     return "Hello, " + name;
    // };  //this is a function expression...extra step for demo purposes

    console.log(sayHello("Gandalf"));

    //a higher order function accepts a function...read more on this later
    /**
     * TODO:
     * Call the function 'sayHello' and pass your name as a string literal argument.
     * Store the result of the function call in a variable named 'helloMessage'.
     *
     * console.log 'helloMessage' to check your work
     */
    var helloMessage = sayHello("Megan")
    console.log(helloMessage);
    /**
     * TODO:
     * Store your name as a string in a variable named 'myName', and pass that
     * variable to the 'sayHello' function. You should see the same output in the
     * console.
     */
    var myName = "Megan";
    console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
    var random = Math.floor((Math.random() * 3) + 1);

    /**
     * TODO:
     * Create a function called 'isTwo' that takes a number as a parameter.
     * The function should return a boolean value based on whether or not the passed
     * number is the number 2.
     *
     * Example
     * > isTwo(1) // returns false
     * > isTwo(2) // returns true
     * > isTwo(3) // returns false
     *
     * Call the function 'isTwo' passing the variable 'random' as a argument.
     *
     * console.log *outside of the function* to check your work (you should see a
     * different result everytime you refresh the page if you are using the random
     * number)
     */
    function isTwo(num) {
        return num === 2;
    }

    console.log(isTwo(4));
    console.log(isTwo(random));

    /**
     * TODO:
     * Create a function named 'calculateTip' to calculate a tip on a bill at a
     * restaurant. The function should accept a tip percentage and the total of the
     * bill, and return the amount to tip
     *
     * Examples:
     * > calculateTip(0.20, 20) // returns 4
     * > calculateTip(0.25, 25.50) // returns 6.37
     * > calculateTip(0.15, 33.42) // returns 5.013
     */
    function calculateTip(tipPercentage, totalBill) {
        return tipPercentage * totalBill;
    }

    console.log(calculateTip(.2, 20));
    console.log(calculateTip(.15, 30));
    /**
     * TODO:
     * Use prompt and alert in combination with your calculateTip function to
     * prompt the user for the bill total and a percentage they would like to tip,
     * then display the dollar amount they should tip
     */
    var totalBill = prompt("What is the bill total?");
    var tipPercentage = prompt("What percentage would you like to tip?");

    // var tipAmount = calculateTip(tipPercentage, totalBill);
    // alert("The total tip is $ " + calculateTip(tip/100, bill)) + "" .toFixed(2);
    // console.log(tipAmount);
    // alert("You should tip: $" + tipAmount);


    //WALKTHRU: trying to format tip to be $
    //when you have a string and combine it with multiplication and division, coercion will happen...but...
    //var formattedTIp = (calculateTip(tipPercentage/100, totalBill)).toFixed(2);



    // alert(tipPercentage * totalBill);    //can put an operation in an alert()...SABITA

    /**
     * TODO:
     * Create a function named `applyDiscount`. This function should accept a price
     * (before a discount is applied), and a discount percentage (a number between 0
     * and 1). It should return the result of applying the discount to the original
     * price.
     *
     * Example:
     * > var originalPrice = 100;
     * > var dicountPercent = .2; // 20%
     * > applyDiscount(originalPrice, dicountPercent) // 80
     *
     * > applyDiscount(45.99, 0.12) // 40.4712
     */
    //could use Math.random() to generate number between 0 and 1
    function applyDiscount(originalPrice, discountPercent) {
        return originalPrice * discountPercent;
    }

    console.log(applyDiscount(100, .2));


    //WALKTHRU

    function applyDiscount(price, discountPercentage) {
        return price - (price * discountPercentage);
    }

    console.log(applyDiscount(100, .2)); //TDD style write test/console.log BEFORE write function
// })();