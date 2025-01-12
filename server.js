const http = require("http");
const fs = require("fs");

const port = 3000;
const server = http.createServer();
server.on("listening", () => {
    console.log(`Server is listening on port: ${port}`);
});

server.on("request", (requ, resp) => {
    const url = requ.url;
    console.log(url);
    if (url === "/") { //serve the form html page
        fs.createReadStream("home.html").pipe(resp);
    }
});