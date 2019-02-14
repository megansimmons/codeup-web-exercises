// (function(){
"use strict"

// =======================Loops and Array Bonuses=========================
//     1.  create an array of shapes
// – prompt the user to search for a specific shape
// – using a for loop, iterate through the array to log the shapes until the matching shape is found
// – once the shape is found, log a message (“Shape is found”) and use a break statement to exit loop.

// var shapes = ['circle', 'triangle', 'quadrilateral', 'pentagon', 'hexagon'];
//
// var userShape = prompt('Enter your favorite shape.');

// for(var i = 0; i < shapes.length; i++){
//  if(userShape === shapes[0] || userShape === shapes[1] || userShape === shapes[2] || userShape === shapes[3] || userShape === shapes [4]) {
//      console.log('You chose a ' + userShape + '.');
//  } else {
//      console.log('This isn\'t a shape.');
//  }
//
// }
//This is the answer
// for (var i = 0; i < shapes.length; i++){
//     var index = shapes.indexOf(userShape);
//     if (index === i) {
//         console.log('Your ' + userShape + ' was found!');
//         break;
//     } else {
//         console.log('This either isn\'t a shape or is not part of this array.');
//     }
//
// }

// 2.  Create a function that returns a random day of the week
var weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]
var random = weekDays[Math.floor(Math.random()* weekDays.length)];
function randomDay(weekDays) {
    return random;
}

console.log(randomDay());


// 3.  Create a function that takes a single letter and returns what number the letter is in the alphabet. Ignore case.
// – someFunction("a") // returns 1
// – someFunction("z") // returns 26

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
function alphaBet(letter) {
    var index = letters.indexOf(letter)
    return index + 1;
}
console.log(alphaBet('a'));
console.log(alphaBet('m'));
console.log(alphaBet('e'));
console.log(alphaBet('g'));
console.log(alphaBet('a'));
console.log(alphaBet('n'));

// 4.  Create a function that returns the longest string in a given array of string elements.

var stringies = ['apples','barbacoa','crunchy peanut butter','salt'];

var shorty = 0;
var longest;
function stringLength(input) {
    for (var i = 0; i < input.length; i++) {
        if (input[i].length > shorty) {
            shorty = input[i].length;
            longest = input[i];
        }
    }
            return longest;
}
// console.log(longest);
console.log(stringLength(stringies));

// 5.   Create a function that takes in two arrays of elements, including numbers. If all numbers added together in the first array is equal to all the number inputs added in the second array, return true, otherwise, false. Only add together numeric elements but either array may contain non-numeric elements.
// – var arr1 = ['bob', 1, true, 1, 2];
// – var arr2 = [2, null, undefined, 0, 2, "apple"]
// – exampleFunction(arr1, arr2) // returns true

var array1 = ['apple', '4', '1', ''];
var array2 = ['3', 2,'cat', 0 ]


// })();