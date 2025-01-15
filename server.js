const http = require("http");
const fs = require("fs");

const port = 3500;
const server = http.createServer();

server.on("listening", () => {
    console.log(`Server listening on port ${port}`)
});

let urlObjects = [
    { url: "/", filepath: "Home/home.html" },
    { url: "/home.css", filepath: "Home/home.css" },
    { url: "/home.js", filepath: "Home/home.js" },
    { url: "/Images/james_holzhauer.jpg", filepath: "Images/james_holzhauer.jpg" },
    { url: "/Images/ken_jennings.jpg", filepath: "Images/ken_jennings.jpg" },
    { url: "/Images/brad_rutter.jpg", filepath: "Images/brad_rutter.jpg" },
    { url: "/Game/game.html", filepath: "Game/game.html" },
    { url: "/Game/game.css", filepath: "Game/game.css" },
    { url: "/Game/game.js", filepath: "Game/game.js" },
    { url: "/app.css", filepath: "app.css" }
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