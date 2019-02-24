// (function(){
"use strict"

// =======================Loops and Array Bonuses=========================
//     1.  create an array of shapes
// – prompt the user to search for a specific shape
// – using a for loop, iterate through the array to log the shapes until the matching shape is found
// – once the shape is found, log a message (“Shape is found”) and use a break statement to exit loop.

var shapes = ['circle', 'triangle', 'quadrilateral', 'pentagon', 'hexagon'];

shapes.forEach(function(element,index,array){
    console.log(array.reverse());
})

//
var userShape = prompt('Enter your favorite shape.');

// for(var i = 0; i < shapes.length; i++){
//  if(userShape === shapes[0] || userShape === shapes[1] || userShape === shapes[2] || userShape === shapes[3] || userShape === shapes [4]) {
//      console.log('You chose a ' + userShape + '.');
//  } else {
//      console.log('This isn\'t a shape.');
//  }
//
// }


// for (var i = 0; i < shapes.length; i++){
//     var index = shapes.indexOf(userShape);
//     if(i === index) {
//         console.log('Your ' + userShape + ' was found!');
//         break;
//     } else {
//         console.log(shapes[i]);
//     }
//
// }



// 2.  Create a function that returns a random day of the week
// var weekDays = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
// ]
// var random = weekDays[Math.floor(Math.random()* weekDays.length)];
// function randomDay(weekDays) {
//     return random;
// }
//
// console.log(randomDay());


// 3.  Create a function that takes a single letter and returns what number the letter is in the alphabet. Ignore case.
// – someFunction("a") // returns 1
// – someFunction("z") // returns 26

// var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// function alphaBet(letter) {
//     var index = letters.indexOf(letter)
//     return index + 1;
// }
// console.log(alphaBet('a'));
// console.log(alphaBet('m'));
// console.log(alphaBet('e'));
// console.log(alphaBet('g'));
// console.log(alphaBet('a'));
// console.log(alphaBet('n'));

// 4.  Create a function that returns the longest string in a given array of string elements.

var stringies = ['apples','barbacoa','crunchy peanut butter','salt'];

var shorty = 10;//returning length of characters in one element of the array
var longest;
function stringLength(input) {
    for (var i = 0; i < input.length; i++) {
        if (input[i].length > shorty) {
            shorty = input[i].length;//returns 21 as in 21 characters in longest element
            longest = input[i];//returns the last element in the array
        }
    }
            return longest;
    // return shorty;
}
// console.log(longest);
// console.log(stringLength(shapes));
console.log(stringLength(stringies));

var arrayOfElements = ['cat', 'giraffes', 'dogs', 'geese'];
 // for(var i = arrayOfElements.length - 1 ; i >= 0; i--) {
 //     console.log(arrayOfElements[i]);
 // }

var sliceArray = arrayOfElements.slice(1, 3);//makes a copy and creates a new array
console.log(sliceArray);

var sortArray = arrayOfElements.sort();
console.log(sortArray);

var reverseArray = arrayOfElements.reverse();
console.log(reverseArray);

var joinArray = arrayOfElements.join(',');
console.log(joinArray);

var spliceArray = arrayOfElements.splice(1, 3);
console.log(spliceArray);

console.log(arrayOfElements);


// console.log(arrayOfElements.reverse());//permanently flips order of array

// var a = 0;
// var b;
//
// function stringTest(input) {
//     for (var i = 0; i < input.length; i++) {
//         if (input[i].length > a) {
//             a = input[i].length;//returns 8 bc 8 is the numbers of characters in giraffes
//             b = input[i];
//         }
//     }
//         return a;
//         // return b;//returns the longest string in the array
// }
//
// console.log(stringTest(arrayOfElements));


// 5.   Create a function that takes in two arrays of elements, including numbers. If all numbers added together in the first array is equal to all the number inputs added in the second array, return true, otherwise, false. Only add together numeric elements but either array may contain non-numeric elements.
var onlyNumArray = [1,2, 3, 4];
var sumNum = onlyNumArray.reduce(function(total, amount){
    return total + amount
});
console.log(sumNum);//returns 10

var stringNumArray = ['1','2','3','4'];
// var stringSum = stringNumArray.reduce(function(total, amount){
//     if
// })
// var arr1 = ['bob', 1, true, 1, 2];
// var arr2 = [2, null, undefined, 0, 2, "apple"];
//
// var sum1 = arr1.reduce(function(total, amt) {
//     if (arr1 !== isNaN()
//     return total + amt
// });
// console.log(sum1);

// function getSum(total, num) {
//     var sum1 = arr1.reduce()
//
// }


// })();