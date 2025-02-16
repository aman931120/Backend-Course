// we are going to create a web server based on NODE
const http = require("http");
// this http module help us to create a web server

const hostname = "127.0.0.1";
const port = 3000;
// A port in a web server is a communication endpoint that helps a computer handle multiple network connections at the same time.

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello ice tea");
  } else if (req.url === "/ice-tea") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Thanks for ordering ice tea, its really hot");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 Not found");
  }
});
// req (request) represents the incoming request (from the browser)
// res (response) is used to send a response back to the client.
// now we have http server

server.listen(port, hostname, () => {
  console.log(`Server is listeening at http://${hostname}:${port}`);
});
