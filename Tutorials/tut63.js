// console.log('hello world');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');

res.setHeader('Content-Type', 'text/html');
// html from tut22 in backticks
  res.end(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Pseudo selectors & more designing</title>
      <style>
        .container {
          border: 2px solid rgb(5, 150, 41);
          background-color: rgb(230, 138, 217);
          padding: 34px;
          margin: 34px auto;
          width: 666px;
        }
        .btn {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          font-weight: bold;
          background-color: crimson;
          padding: 6px;
          border: none;
          cursor: pointer;
          font-size: 13px;
          border-radius: 4px;
        }
  
        /* To remove the underline in the link part we have to style the anchor tag as- */
  
        a {
          text-decoration: none;
          color: black;
        }
  
        /* Let us now see what Pseudo Selectors are. A pseudo class is used to define a special state of an element. */
  
        /* Hover is used to change the color of text or background of a button as soon as you hover that part. The code for this is as below. */
        a:hover {
          color: rgb(65, 195, 13);
          background-color: rgb(221, 166, 38);
        }
        /* The next Pseudo selector is Visited. As soon as you visit the anchor tag button and click the link mentioned, it changes its color. To apply this property, write the code as follows- */
        a:visited {
          background-color: yellow;
        }
        /* The next selector is Active. If you visit any button, and click it, it becomes active and showcases with different properties. The code for this is- */
        a:active {
          background-color: darkblue;
        }
  
        button:hover {
          color: darkgoldenrod;
          background-color: rgb(223, 245, 201);
          border: 2px solid black;
        }
        h3 {
          color: rgb(55, 17, 161);
        }
      </style>
    </head>
    <body>
      <div class="container" id="cont1">
        <h3>This is my Heading</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nisi nihil
          sapiente placeat enim quod repudiandae, repellat qui, voluptas quaerat
          numquam unde suscipit vel voluptatum, itaque hic dignissimos iusto sint.
        </p>
        <a href="https://yahoo.com" class="btn" target="blank">Read More</a>
        <button class="btn">Contact Us</button>
  
        <!-- You will observe that both the buttons will look different. Therefore, to make it look little attractive, we will do some styling in it with CSS. -->
      </div>
    </body>
  </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Important things in node :

// REPL - Read Evaluate Print Loop

// '_' means previous evaluated variable

// when we press tab twice, it prints all the variables available in nodejs in the terminal


