// Synchronous or blocking
// -line by line execution

// const fs = require("fs");
// let text = fs.readFileSync("Tutorials/dele.txt", "utf-8");
// console.log(text)


// Asynchronous or non-blocking
// -line by line execution not guaranteed.
// -callbacks will fire 
const fs = require("fs");
fs.readFile("Tutorials/dele.txt", "utf-8", (a,b)=> {
    console.log(a,b)
    // this is a call back function and will only run when the file has been read. 
});
// a is error and b is data 
// therefore, a will be null and b will be the content 
// console.log(text)
console.log('this is a message')

// after running above, due to asynchronous function used in nodejs, 
// 'this is a message' will be printed first, unlike when using synchronous function.  