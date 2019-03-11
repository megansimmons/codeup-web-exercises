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

module.exports = message;
