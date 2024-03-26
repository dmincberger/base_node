import { readFile } from 'fs'
import path from "path";
import getRequestData from './utils.js';
import { addAnimal, Animal, animalsArray } from './model.js';

const router = async (request, response) => {
    switch (request.method) {
        case "GET":
            let __dirname = path.resolve()
            const index_path = path.join(__dirname, "views", "index.html")
            console.log("SCIEZKA: " + index_path);
            readFile(index_path, (error, data) => {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.write(data);
                response.end();
            })
            break;

        case "POST":
            if (request.url == "/addone") {
                let dane = await getRequestData(request) // dostaje dane z posta
                console.log(JSON.parse(dane))
                // let nazwa = dane["nazwa"]
                // let kolor = dane["kolor"]
                // console.log("NAZWA: " + nazwa);
                // console.log("kolor: " + kolor);
            }
    }
}

export default router