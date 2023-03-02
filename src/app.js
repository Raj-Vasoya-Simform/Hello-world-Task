const http = require("http");

const reqListener = function (req, res) {
  if (req.method === "GET") {
    res.writeHead(200);
    res.end("Hello World!");
  } else if (req.method === "POST") {
    res.writeHead(200);
    res.end("Created Successfully!");
  }
};

const server = http.createServer(reqListener);
server.listen(4000);
