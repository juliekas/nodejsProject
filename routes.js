const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Hi</title></head>');
        res.write('<body><h1>Hello my friends! Lets create user </h1> </body>');
        res.write('<body><form action="/create-user" method="POST"><input type "text" name="username"><button type = "submit">Send</button></body>');
        res.write('<body><ul><li> User1 </li></ul></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
        res.write('</html>');
        return res.end();
      }
      
    // Send a HTML response with some "Page not found text
    if (url === '/create-user') {
        const body = [];
        req.on('data', chunk => {
          body.push(chunk);
        });
        req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          console.log(parsedBody.split('=')[1]); // username=whatever-the-user-entered
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
      }

};

module.exports = {
    handler: requestHandler
};

