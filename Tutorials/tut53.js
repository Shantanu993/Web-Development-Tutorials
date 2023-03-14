console.log('This is tut 53');

let name = 'ab';
let name1 = 'ab1';
let name2 = 'ab2';
let name3 = 'ab3';
let text = 'Good Morning';
// console.log(name + ' is very good')
// console.log(name1 + ' is very good')
// console.log(name2 + ' is very good')
// console.log(name3 + ' is very good')

// Using function instead

// keyname and hello are just parameters, anything can be written instead of them
function greet(keyname, hello='Greetings from JS'){
    console.log(hello + ' ' + keyname);  // empty quotes are for space 
    console.log(keyname + ' is very good');
}
greet(name);
greet(name1, text);
greet(name2, text);
greet(name3, text);

// let returnval = greet(name)
// console.log(returnval)
// Here, greet does not return anything so it shows undefined

function sum(a,b,c) {
    let d = a + b + c;
    return d;
    // anything written after return will never get executed. it will be unreachable code
}

 let returnVal = sum(1,2,3);
 console.log(returnVal);