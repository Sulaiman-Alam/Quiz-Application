const http = require("http");
const fs = require("fs");

const port = 3500;
const server = http.createServer();

server.on("listening", () => {
    console.log(`Server listening on port ${port}`)
});


server.listen(port);