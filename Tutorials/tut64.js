const fs = require("fs");
let text = fs.readFileSync("Tutorials/dele.txt", "utf-8");
text = text.replace('browser', 'shanu') 


console.log('The content of the file is')
console.log(text)

console.log('Creating a new file') 
fs.writeFileSync("Tutorials/shanu.txt", text)
