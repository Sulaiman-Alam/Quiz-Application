const http = require("http");
const fs = require("fs");

const port = 3500;
const server = http.createServer();

server.on("listening", () => {
    console.log(`Server listening on port ${port}`)
});

let urlObjects = [
    { url: "/", filepath: "home.html" },
    { url: "/home.css", filepath: "home.css" },
    { url: "/Images/james_holzhauer.jpg", filepath: "Images/james_holzhauer.jpg" },
    { url: "/Images/ken_jennings.jpg", filepath: "Images/ken_jennings.jpg" },
    { url: "/Images/brad_rutter.jpg", filepath: "Images/brad_rutter.jpg" }
];

server.on("request", (req, res) => {
    const url = req.url;
    console.log(url);
    for (let i = 0; i < urlObjects.length; i++) {
        if (url === urlObjects[i].url) {
            fs.createReadStream(urlObjects[i].filepath).pipe(res);
        }
    }
});

server.listen(port);