import { createServer } from "http";
const PORT = 3000;
const server = createServer((req, res) => {
    res.writeHead(200, { "content-type": "audio/mpeg;charset=utf-8" })
    res.end(`<h2> ${JSON.stringify(req.headers, null, 5)}</h2>`)
})

server.listen(PORT, () => {
    console.log(`serwer startuje na porcie ${PORT}`)
});