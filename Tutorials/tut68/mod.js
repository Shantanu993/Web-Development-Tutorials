console.log('this is module')

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    })

    return sum/arr.length;
}

// module.exports is an object 

// module.exports = average;

// to export multiple items, create it as an object

// module.exports = {
//     avg: average,
//     name: 'ab',
//     repo: 'git'
// }
// OR 
module.exports.name = 'abc'