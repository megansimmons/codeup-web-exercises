const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//Directions from curriculum

//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.


const languages = users.filter(user =>  user.languages.length >= 3);


console.log(languages);


// Use .map to create an array of strings where each element is a user's email address


// this gives back all objects with all properties
// const emails = users.map(function(email){
//     return email;
// })
//
// console.log(emails);


console.log(users[0].email);// ryan


let emailsArr = [];
emailsArr.push(users[0].email);
console.log(emailsArr);// ["ryan@codeup.com"]

// using a for loop / working

// function emails(input) {
//     for(let i = 0; i < users.length; i +=1){
//         emailsArr.push(users[i].email);
//     }
//     console.log(emailsArr)
// }
// emails();



//using a forEach loop / working

// users.forEach(function(user, index, array){
//     return emailsArr.push(user.email)
//    // return emailsArr;
//
// });
// console.log(emailsArr);



// using map() to create new array / IT WORKS!!!! why? not clear...

// const emails = users.map(function({email}) {
//     return email;
// })
// console.log(emails);




// refactor map() as arrow function

// const emails = users.map(({email}) => email);
// console.log(emails);


const emails = users.map(user => user.email);
console.log(emails)

// // Use reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.




// const years = users.reduce((yearsOfExperience, user) => {
//     return yearsOfExperience + user.yearsOfExperience
// }, 0);
//
// console.log(years);// 35
//
// let averageExp = years / users.length;
// console.log(averageExp);// NaN
//



//  Use reduce to get the longest email from the list of users.

const longestEmail  = users.reduce(function (longest, currentEmail) {
    if(currentEmail.email.length > longest.length) {
        return currentEmail.email;
    } else {
        return longest;
    }
}, "");

console.log(longestEmail);



    // Use reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.


const singleString = users.reduce(function(previous, current){
    return  `${previous},${current.name}`
}, "Your instructors are: ");
console.log(singleString);




//Use reduce to get the unique list of languages from the list of users.

// console.log(users[0].languages);

// const uniqueLangs = users.reduce(function(person, currentLang){
//     if(typeof currentLang.languages === 'undefined') {
//         currentLang.languages =1;
//     } else {
//         currentLang.languages += 1;
//     }
//     return currentLang.languages;
//
// }, '');
// console.log(uniqueLangs);
//


// const uniqueLangs = users.reduce(function(person, currentLang){
//
//     person += currentLang.languages + ",";
//
//     let languages = person.split(',');
//
//     for(let i = 0; i < languages.length; i += 1) {
//
//         for(let x = 0; x < languages.length; x += 1) {
//             console.log(languages[i]);
//             console.log(languages[x]);
//             // console.log('this is dumb')
//             if(languages[i]===languages[x]){
//
//             // console.log("they match");
//             } else {
//
//                 languages.splice(x, 1)
//
//             }
//
//         }
//
//     }
//     return languages;//languages but repeats
//
// }, []);
// console.log(uniqueLangs);









// Lecture Practice 3/11/19


//MAP

// let numbers = [1, 2, 3, 4, 5];
//
// const newNumbers = numbers.map(function(n){
//     // return n + n;
//     // return n + 2;
//     // return n += 2;
//     // return n + (n+1);
//     return n + (n-1)
// })

// es6 syntax
// const newNumbers = numbers.map(n => n + numbers.indexOf(n));



// console.log(newNumbers)// [2,4,6,8,10]

// console.log(newNumbers);// [3,4,5,6,7]
//
// console.log(newNumbers);// [3,4,5,6,7]
//
// console.log(newNumbers);// (5) [3, 5, 7, 9, 11]
//
// console.log(newNumbers);// (5) [1, 3, 5, 7, 9]



//FILTER
// const numbers = [1,2,3,4,5,6,7,8,9,10];
//
// const oddNumbers = numbers.filter(function(n){
//     return n %2 !== 0;
// });
//
// //es6 syntax
// const oddNumbers = numbers.filter(n => n %2 !== 0);
// console.log(oddNumbers)
//
// const onesZeros = [1,0,1,0,0,0,0,1,1,0,1,0];
//
// const bools = onesZeros.filter(function(n) {
//     if (n === 1) {
//         return true;
//     } else if (n === 0){
//         return false;
//     }
// });
//
//
// console.log(bools); only getting back the ones
//
//
// const ones = onesZeros.filter(n => n == true);
// const zeros = onesZeros.filter(n => n == false);
//
//
// console.log(ones, zeros);

// FILTER
const numbers = [11,25,34,47,5,6,7,8,9,10];

const sum = numbers.reduce((total, currentNumber) => total + currentNumber, 25);



//break down of above const sum

// const sum = numbers.reduce(function(total, currentNumber){
//     return total + currentNumber;
// });
console.log(sum);//162

//total and currentNumber have inherent values because reduce is a higher order function

// var sum = 0;//this represents total
// sum + numbers[number];


//current number is whatever I am on in iteration of array, the value you are starting at!


//REDUCE

// const colors = ['red', 'orange', 'red', 'blue', 'blue', 'green', 'red'];
//
// function countColors(array) {
//
//     const colorCountObject = array.reduce((totalColors, color) =>{
//
//         if(typeof totalColors[color] ==='undefined') {
//
//             totalColors[color] = 1;
//
//         } else {
//
//             totalColors[color] += 1;
//
//         }
//
//         return totalColors;
//
//     }, {});
//
//     return colorCountObject;
//
// }
//
// console.log(countColors(colors));


// const lyrics = ['we', 'all', 'live', 'in', 'a', 'yellow', 'submarine'];
//
// const oneLine = lyrics.reduce((previous, current) => previous + '' + current);









