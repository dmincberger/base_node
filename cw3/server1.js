import { createServer, ServerResponse } from "http";
import { readFile } from "fs";
import path from "path";
const __dirname = path.resolve();

const mypath = path.join(__dirname, "static", "index.html")
const PORT = 3000;
const server = createServer((req, res) => {

    switch (req.method) {
        case "GET":

            readFile(mypath, (error, data) => {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);

                res.end();
            })

            break;
        case "POST":
            Odpowiedz(req, res)
            break;
    }
})

server.listen(3000, () => {
    console.log(`serwer startuje na porcie ${PORT}`)
});

function Odpowiedz(req, res) {
    let body = "";

    req.on("data", (data) => {
        console.log("data: " + data)
        body += data.toString();
    })

    req.on("end", (data) => {
        console.log(body)
        res.writeHead(200, { "Content-type": "text/plain;charset=utf-8" });
        res.end(body);
    })
}