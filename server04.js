import { createServer } from "http"
const PORT = 3000;
const server = createServer((req, res) => {
    console.log("nagłówki żądania:")
    res.writeHead(200, { "content-type": "text/plain;charset=utf-8" })
    if (req.headers["user-agent"].search("Edg") != -1) {
        res.end("To jest przegladarka Edg")
    } else if (req.headers["user-agent"].search("Chrome") != -1) {
        res.end("To jest przegladarka Chrome")
    } else if (req.headers["user-agent"].search("Mozilla") != -1) {
        res.end("To jest przegladarka Mozilla")
    } else {
        res.end("Nie wiem co to za przeglądarka")
    }

})

server.listen(PORT, () => {
    console.log(`serwer startuje na porcie ${PORT}`)
});