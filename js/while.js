// (function (){
    "use strict"


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
//         //console.log(x); will never run because the loop breaks ot first!
//     }
// }
//CONTINUE; forces next iteration of loop...kind of like "skip"...use for things you DON'T want to show up

// for (var i = 1; i < 100; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log("Here is " + i );
// }





//THIS IS THE WARM UP FOR 2/13/19
// while loop that logs 1- 50 backwards. then do while, then for
// let x = 50;
// while(x > 0) {
//     console.log(x);
//     x--;
// }
//DO WHILE LOOP
// do {
//     console.log(x);
//     x--;
// } while(x > 0);

// for (var x = 50; x > 0; x--) {
//     console.log(x);
// }
//END WARMUP FOR 2/13/19

//EXERCISE

// let x = 2;
// while(x < 65537) {
//     console.log(x);
//     x = x*2;
// }


var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var customerCones = Math.floor(Math.random() * 5) + 1;
    allCones = allCones - customerCones
    if (allCones - customerCones > 0) {
        console.log("Here are your " + customerCones + " cones. Enjoy!");
    } else if (allCones )
}



// console.log(allCones - customerCones);//this is working

// console.log(allCones);
//
//
// do {
//     var customerCones = Math.floor(Math.random() * 5) + 1;
//
//     if (allCones > customerCones) {
//         console.log("You got it!");
//     } else if (allCones === customerCones) {
//     console.log("Let me see if I have enough left.");
//     }
//     allCones - customerCones;
//
// } while (allCones > 0);
// console.log("I'm sold out!");

//ATTEMPT 2

// do {
//     var remain = allCones - customerCones;
//     // remain = remain - customerCones; To infinity and...
//     remain -= remain;//when here, it stops on "Let me see if..."
//     //remain--;//to infinity...
//     if (customerCones < remain) console.log("You got it!");
//     // else if (customerCones > remain) console.log("I do not have that many cones left.");
//     else if (customerCones >= remain) console.log("Let me see if I have enough left.");
//     else if (remain === 0) console.log("I'm sold out!");
//     // remain -= remain;//when here, it stops on "You got it!"
// } while (remain > 0);

//ATTEMPT ONE CONES

// do {
//     if (customerCones === 1) console.log("You bought " + customerCones + "!");
//     else if (customerCones === 2) console.log("You bought " + customerCones + "!");
//     else if (customerCones === 3) console.log("You bought " + customerCones + "!");
//     else if (customerCones === 4) console.log("You bought " + customerCones + "!");
//     else if (customerCones === 5) console.log("You bought " + customerCones + "!");
//     allCones = allCones - customerCones;
// } while (allCones < 101);


//This loops from 99-1;
// var c = 100;
// do {
//     console.log('some cones ' + c);
//     c = c - 1;
// } while (c > 0);



//This loops from 11-19
// var y = 10;
// do {
//     y++;
//     console.log('something ' + y);
// } while (y < 20);



// })();