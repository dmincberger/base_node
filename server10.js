import { createServer } from "http";
import { readFile } from "fs";
import path from "path";
import tracer from "tracer"
const PORT = 3000;
const __dirname = path.resolve();
const server = createServer((req, res) => {
    console.log(`żądany przez przeglądarkę adres: ${req.url}`)

    if (req.url === "/index.html") {
        let mypath = path.join(__dirname, "static", "index.html")

        readFile(mypath, (error, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        })
    }
    else if (req.url === "/style.css") {
        readFile(mypath, (error, data) => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(data);
            res.end();
        })
    }
    else if (req.url === "/script.js") {
        readFile(mypath, (error, data) => {
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.write(data);
            res.end();
        })
    }
})

server.listen(3000, () => {
    console.log(`serwer startuje na porcie ${PORT}`)
});