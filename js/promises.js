// (function(){
    "use strict";


// Lecture notes 3/12/19 PROMISES
    //asynchronous (AJAX) requests
    //maps
    //new notation for $.ajax()
    //an event that may not yet have happened, 3 states: pending--> resolved OR rejected

//can run this in node or in console browser
    //taken from curriculum and then slightly refactored

// const myPromise = new Promise((resolve, reject) => {
//     //add in with lecture
//     let number = Math.random();
//     console.log(`Our number is ${number}`);
//     if (number > 0.5) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// myPromise will NEVER be reassigned so use const keyword
    //instantiate-make instance of
        // new Promise : new instance of the promise class
            //set up a function to handle state: and pass in resolved or rejected
                // the order of these parameters stays the same, but could call them anything
                    // ie (apple, banana) or (res, rej) or (a, b)
                //the handler accepts a resolve or reject (and these two don't actually exist)
                //usually a fetch call (synonymous to ajax call)
        // new Promise is taking a copy of something that has already been set up
            // new will not be used very much until we get into Java 11
                // like an object
    // when we create a new promise, we don't have to push the start button, it just goes!
        // like setTimeout()!

    // about half the time will be resolved, half the time rejected

//A promise object has two frequently used methods:
    //only one will be called
        // .then: accepts a callback that will run when the promise is resolved
        // .catch: accepts a callback that will run when the promise is rejected
        // MUST USE .then and .catch
        // A CALLBACK is a registered event listener

//registration for what happens when resolve or reject is called
    //synonymous with .done() and .fail() with $.ajax requests

// myPromise.then(() => console.log('resolved!'));
// myPromise.catch(() => console.log('rejected!'));

// another format for the above function and the call by CHAINING methods together
    // we saw this with AJAX requests as well
    // the format could affect the result...so ALWAYS READ YOUR ERROR MESSAGES!
    // THIS FORMAT IS PREFERABLE!--> be sure to get rid of final semi-colon otherwise the function will end

// const myPromise = new Promise((resolve, reject) => {
//     //add in with lecture
//     let number = Math.random();
//     console.log(`Our number is ${number}`);
//     if (number > 0.5) {
//         resolve();
//     } else {
//         reject();
//     }
// })
// .then(() => console.log('resolved!'))
// .catch(() => console.log('rejected!'));
//
// //what happens if you console.log myPromise?
//     // console.log(myPromise); // get Promise pending
//
// // can wrap body of function in a setTimeout --> kind of like 'pending' for longer
//
// setTimeout(()=>{
//     console.log(myPromise);
// }, 2000);



// in console --> sources, can highlight lines of code with green arrows to use for debugging...
    //when you refresh the page it stops at the first breakpoint


//fetch is an alternative to jQuery/GET  to make AJAX requests
    // response could be 'data' and error could be 'fail'


// fetch('https://api.github.com/users/megansimmons') //this creates a promise object
//     .then(response => console.log(response.json()))
//     //status 200 --> so there was not an error
//         //digging through response objects is something we will do a lot of
//             //in this case we could look for number of users
//             //go to gitHub API and look up 'users' to see example of object should expect to receive
//             //will eventually get locked out after too many api requests
//     .catch(error => console.error(error));


//look up GITHUB and BITBUCKET (they are competitors of sorts)
// git hub is a repo that will host git
//bitbucket will host git and ...owned by Atlasian






//Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.


// function wait(num) {
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             resolve();
//         }, num);
//     });
// }

// this is called a higher order function or a closure


// let wait = num => {
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             resolve();
//         }, num);
//     });
// }
//
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



//Create a function that accepts a github username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.



var token = gitHubToken;

fetch('https://api.github.com/users/megansimmons/events', {headers: {'Authorization': token}})
    .then(response=>{
        console.log(response)
        return response.json();
    })
    .then(jsonResponse=>{
        console.log(jsonResponse)
        return console.log(jsonResponse[0].created_at);
    })
    // .then(jsonResponse.login =>{




// fetch('url').then((data)=> {
//     console.log(data);
//     return data.json();
//     })
//     .then((jsonData)=>
//     console.log)
// }





// })();