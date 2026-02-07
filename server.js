// Import the built-in http module from Node.js
// This module helps us create a web server
const http = require("http");

// Create a server using http.createServer()
// This function runs every time a browser makes a request
const server = http.createServer((req, res) => {

    // Send a message from the server to the browser
    res.write("Hello, this text is coming from Node.js server");

    // End the response
    // This tells the browser that the server has finished sending data
    res.end();
});

// Start the server on port 3000
// Port 3000 is where the browser will connect
server.listen(3000, () => {
    // This message is shown in the terminal when the server starts
    console.log("Server is running on port 3000");
});
