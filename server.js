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
    // if (url === "/") { //serve the form html page
    //     fs.createReadStream("home.html").pipe(res);
    // } else if (url === "/home.css") {
    //     fs.createReadStream("home.css").pipe(res);
    // } else if (url === "/Images/james_holzhauer.jpg") {
    //     fs.createReadStream("Images/james_holzhauer.jpg").pipe(res);
    // } else if (url === "/Images/ken_jennings.jpg") {
    //     fs.createReadStream("Images/ken_jennings.jpg").pipe(res);
    // } else if (url === "/Images/brad_rutter.jpg") {
    //     fs.createReadStream("Images/brad_rutter.jpg").pipe(res);
    // } else {
    //     for (let i = 0; i < 3; i++) {
    //         if (url === `/${imageLinks[i]}`) {
    //             fs.createReadStream(imageLinks[i]).pipe(res);
    //         }
    //     }
    // }
});

server.listen(port);