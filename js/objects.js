// (function() {
    "use strict";
//mini exercise 2/15/19

// Mini Exercise 3
// PAIR UP!
//     Create a dog object...
//     The dog object should have properties for:
// breed (string),
//     weightInPounds (number),
//     age (number),
//     color (string),
//     sterilized (boolean),
//     shotRecords (array of objects with properties for date and typeOfShot)
// The dog object should have methods to:
//     bark() - will console.log "Woof!"
// getOlder() - will increase age by 1
// fix() - will set sterile to true if dog sterilized property is false
// vaccinate() - takes in an argument for the name of the shot and adds a new shot with the current date to the shotRecords array

// Create a few beverage objects and assign values to each object for the following properties:
//
//     - brandName
//     - type
//     - volumeInLiters
//     - priceInCents
//     - expirationDate
//     - dateTimesOfLastSips
//     - isOpen
//
// Define your objects using both literal syntax to create all properties and values at once and also try defining empty objects and assign property values in separate statements.

var beverages = [

]

var soda = {
    brandName: 'Dr. Pepper',
    type: 'caffeinated',
    volumeInLiters: 1,
    princeInCents: 216,
    dateTimesOfLastSips: [
        '10pm Feb 12, 2019',
        '10pm Feb 13, 2019',
        '10pm Feb 14, 2019'
        ],
    isOpen: true
}

var orangeJuice = {
    brandName: 'Minute Maid',
    type: 'fruit juice',
    volumeInLiters: 1.5,
    princeInCents: 314,
    dateTimesOfLastSips: '8am Feb 15, 2019',
    isOpen: true
}

var coffee = {}
    coffee.brandName = 'Kirkland';
    coffee.type = 'caffeinated';
    coffee.volumeInLiters = .5 ;
    coffee.princeInCents = 157;
    coffee.dateTimesOfLastSips = '8am Feb 15, 2019';
    coffee.isOpen = true;

// Mini Exercise 2
// 1. Log the names of all users in a single console log separated by spaces.
// 2. Change the names of all users to "John Doe"
// 3. Increase the current age of all users by 1

// Can you accomplish each step using iteration?

var users = [
    {
        name: "Sam",
        age: 21
    },
    {
        name: "Cathy",
        age: 34
    },
    {
        name: "Karen",
        age: 43
    }
];

var userMessage = '';
users.forEach(function(element, index, array) {
    userMessage += element.name + ' ';
});

    console.log(userMessage);

users.forEach(function(element){
    element.name ='John Doe';
    element.age = element.age + 1;
})

console.log(users);
    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.


     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

//this is one way to initiate an object and its properties
// var person = {};
// person.firstName = "Megan";
// person.lastName = "Simmons";
    var person = {
        firstName: "Megan",
        lastName: "Simmons",
        sayHello : function(){
            return 'Hey ' + this.firstName + ',' + ' your last name is ' + this.lastName + '!';
        }
    };
    console.log(person.firstName);//"Megan"
    console.log(person.lastName);//"Simmons"

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    //move this INSIDE of the object for organizational purposes!!!!!!
    // person.sayHello = function(){
    //     return 'Hey ' + this.firstName + ',' + ' your last name is ' + this.lastName + '!';
    // };

console.log(person.sayHello());//would still want to keep the property sayHello() with a return statement versus a console.log
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
//This is an array of 3 objects; each object has 2 properties

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320},
        {name: 'Goofy', amount: 400}
    ];

//Practicing accessing nested properties
//     console.log(shoppers[0].name);//'Cameron'
//     console.log(shoppers[1].name);//'Ryan'
//     console.log(shoppers[2].name);//'George'
//     console.log(shoppers[0].amount);//180
//     console.log(shoppers[1].amount);//250
//     console.log(shoppers[2].amount);//320
//     console.log(shoppers.amount);//undefined

//Testing variable
    // var discountTotal = shoppers[0].amount * 0.12;//21.5999...


    // for(var i = 0; i < shoppers.length; i++){
    //     var discountTotal = (shoppers[i].amount * 0.12).toFixed(2);
    //     var newTotal = (shoppers[i].amount - discountTotal).toFixed(2);
    //     // console.log(discountTotal);
    //     if(shoppers[i].amount > 200){
    //         console.log(shoppers[i].name + ' your original price was $' + shoppers[i].amount + ' and your discount is $' + discountTotal + '. Your new total is $' + newTotal + '!');
    //     } else {
    //         console.log(shoppers[i].name + ', you did not spend enough to receive a discount.');
    //     }
    // }

    // use for-each loop with callback function for every item in array shoppers[]



    //
    // shoppers.forEach(function(shopper) {
    //     //could create a var output = ''; in order to stack the info in the console.log versus having a long string. can concatenate a little at a time.
    //     var discountTotal = (shopper.amount * 0.12).toFixed(2);
    //     var newTotal = (shopper.amount - discountTotal).toFixed(2);
    //
    //     if(shopper.amount > 200){
    //         console.log(shopper.name + ' your original price was $' + shopper.amount + ' and your discount is $' + discountTotal + '. Your new total is ' + newTotal + '!');
    //     } else {
    //         console.log(shopper.name + ', you did not spend enough to receive a discount.');
    //     }
    //
    // });

//var output = '';
// var discount = 0;
//output +=   ... here is what will change and concatenate a string

shoppers.forEach(function(shopper){
    var output = " ";
    var discount = 0;
    if(shopper.amount > 200) {
        discount = shopper.amount * .12;
        output += shopper.Name;
        output += "Original bill price: ";
        output += shopper.amount;
        output += ", saved: ";
        output += discount;
        output += "Discounted: ";
        output += shopper.name - discount;
    }
};




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
var books = [];
//             genres: []
// //         {
// //             title: 'Stranger in a Strange Land',
// //             author: {
// //                 firstName: 'Robert',
// //                 lastName: 'Heinlein'
// //             }
//                 genre: books.genres.[mystery],
//
// //         },
//         {
//             title: 'Counting By Sevens',
//             author: {
//                 firstName: 'Holly Goldberg',
//                 lastName: 'Sloan'
//             }
//         },
//         {
//             title: 'The Man in the High Castle',
//             author: {
//                 firstName: 'Phillip K',
//                 lastName: 'Dick'
//             }
//         },
//         {
//             title: 'The Professor and the Madman',
//             author: {
//                 firstName: 'Simon',
//                 lastName: 'Winchester'
//             }
//         },
//         {
//             title: 'Mistress of the Art of Death',
//             author: {
//                 firstName: 'Ariana',
//                 lastName: 'Franklin'
//             },
//         },
//         {
//             title: 'The Devil in the White City',
//             author: {
//                 firstName: 'Erik',
//                 lastName: 'Larson'
//             }
//         }
// ];


// console.log(books[0].title);//testing


// books.forEach(function(element, index, array){
//     // console.log(index, element.title, element.author.firstName, element.author.lastName);//testing
//     console.log('Book # ' + (index + 1));
//     console.log('Title: ' + element.title);
//     console.log('Author: ' + element.author.firstName + ' ' + element.author.lastName);
// });

//WALK THROUGH
//     books.forEach(function(book, i){
//         console.log("Book # " + (i + 1));
//         console.log("Title: " + book.title);
//         console.log("Author: " + book.author.firstName + "" + book.author.lastName);
//         console.log('---');
//     })
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
//WALK THROUGH of first part of bonus
//this function will be available to us from the beginning bc it is a first class citizen and attached to an implementation
// function createBook(title, firstName, lastName) {
//     var book = {};
//     book.title = title;
//     book.author = {};
//     book.author.firstName = firstName;
//     book.author.lastName = lastName;
//     return book;
// };

//then use this function to create individual books
//then...
//books.push(createBook(title: "The Cat in the Hat", firstName: "Dr", lastName: "Suess")

function createBook(title, authorFirst, authorLast) {
        return books.push({
            title: title,
            author: {
                    firstName: authorFirst,
                    lastName: authorLast
                }

        })
    }

console.log(createBook('The Golden Compass', 'Philip', 'Pullman'));
console.log(createBook('Lonesome Dove', 'Larry', 'McMurtry'));
    console.log(books);

//WALK THROUGH of second part of bonus
// function showBookInfo(book, i) {
    // console.log("Book # " + (i + 1));
//         console.log("Title: " + book.title);
//         console.log("Author: " + book.author.firstName + "" + book.author.lastName);
//         console.log('---');
// }

// books.forEach(showBookInfo);

   function showBookInfo(book) {
       books.forEach(function (element, index, array) {
           console.log('Book # ' + (index + 1));
           console.log('Title: ' + element.title);
           console.log('Author: ' + element.author.firstName + ' ' + element.author.lastName);
       });
   }
showBookInfo();
   createBook('Stranger in a Strange Land', 'Robert', 'Heinlein');
   showBookInfo();


// BONUS 1 (expanding on the books object exercise):
//
// Add a property "keywords" that contains an array of possible genres the book may be categorized by

books.genres = ['mystery','sci-fi', 'historical fiction', 'historical-nonfiction'];
books.genres.push('cooking');

// Add a boolean property "available" and set it to true
// books.title.available = 'true';//NO CHANGE

function isAvailable(book) {
    books.forEach(function(element, index, array){
        element.available = true;
    });
}

isAvailable();
console.log(books);
// Add a dateAvailable property that has a string of the date/time when the book will be available
// Add a method lend() that...
// - changes the available property to false if it is not already false
// - sets the dateAvailable to a date exactly two weeks from when the lend() method is called
// (to do this, research the JS Date object and use methods from it in your code)
// Add a method receive() that...
// - changes the available property to true
// - changes the dateAvailable property to the string "now"
//
//
// BONUS 2 (expanding on the books object exercise):
//
// Create an application to take in user input to build the books array of objects.
//     Allow the user to continue adding books or to finish adding books.
//     Once the books have been added, output the books array in the console.
//
//     Allow a user to delete a book or a group of books by title or author last name
//
// Allow a user to edit a book by index number in the books array
// })();
