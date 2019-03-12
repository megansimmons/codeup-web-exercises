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


const languages = users.filter(user =>  users.length);


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
// emailsArr.push(users[0].email);
// console.log(emailsArr);// ["ryan@codeup.com"]

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

const emails = users.map(({email}) => email);
console.log(emails);


// Use reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
//
const years = users.reduce((yearsOfExperience, user) => {
    return yearsOfExperience + user.yearsOfExperience
}, 0);

console.log(years);// 35

let averageExp = years / users.yearsOfExperience;
console.log(averageExp);// NaN


// const avgYears = users.reduce((yearsOfExperience, user, index, array) => {
//     yearsOfExperience += user;
//     if( index === array.length -1) {
//         return yearsOfExperience/array.length;
//     } else {
//         return yearsOfExperience;
//     }
// });
//
// console.log(avgYears);// NaN

//     Use reduce to get the longest email from the list of users.
    // Use reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
