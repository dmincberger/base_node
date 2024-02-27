import { createServer } from "http";
import tracer from "tracer"
const logger = tracer.colorConsole();
const PORT = 3000;
const server = createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain;charset=utf-8" })
    switch (decodeURI(req.url).toLowerCase()) {
        case "/żółć":
            logger.info("żółć")
            break
        case "/czerwień":
            logger.error("czerwień")
            break
        case "/zieleń":
            logger.info("zieleń")
            break
        default:
            logger.debug("inny")
    }
    res.end(decodeURI(req.url))
})

server.listen(PORT, () => {
    console.log(`serwer startuje na porcie ${PORT}`)
});