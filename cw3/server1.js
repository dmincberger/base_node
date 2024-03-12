import { createServer } from "http";
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

            break;
    }
})

server.listen(3000, () => {
    console.log(`serwer startuje na porcie ${PORT}`)
});
