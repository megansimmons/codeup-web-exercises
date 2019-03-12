//way 1

// const message = () => {
//     console.log("This is a nice message.")
// }
//
// export default message;
//
//

//way 2

// export default {message};



//way 3

// export const message = () => {
//     console.log("This is a nice message.")
// }


//require way

const message = () => {
    console.log("This is a nice message.")
}


// way 1 for require
    // this way explicitly states the name to use in the import file (index.js)

// module.exports = message;

// way 2 for require

module.exports.newBinding = message;
