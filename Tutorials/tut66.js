const http = require('http')
const fs = require('fs')
const fileContent = fs.readFileSync('Tutorials/tut61.html')

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type':'text/html'})
    res.end(fileContent)
})

// port is 80. this port is advised because we do not need to mention the port number in the url, and can directly access website with the url unlike for other port numbers.
// and local host is 127.0.0.1
server.listen(80, '127.0.0.1', ()=>{
    console.log('listening on port 80')
})