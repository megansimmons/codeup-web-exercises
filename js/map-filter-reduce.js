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

const emails = users.map(({email}) => email);
console.log(emails);

// Use reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
//     Use reduce to get the longest email from the list of users.
    // Use reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
