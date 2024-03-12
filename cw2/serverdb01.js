import { createServer } from "http";
import Datastore from 'nedb';
const coll1 = new Datastore({
    filename: 'kolekcja.db',
    autoload: true
});
let tablica = []
const PORT = 3000;
const server = createServer((req, res) => {
    // parametr res oznacza obiekt odpowiedzi serwera (response)
    // parametr req oznacza obiekt żądania klienta (request)
    console.log("request");
    res.end("response")
})

server.listen(3000, () => {
    console.log(`serwer startuje na porcie ${PORT}`)
    petla()
});

let petla = async () => {
    for (let i = 0; i < 10; i++) {
        await wpisywanie()
    }
    console.log(tablica);
}

let wpisywanie = async () => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                let data = new Date()
                let sekundy = data.getSeconds()
                let milisekundy = data.getMilliseconds()
                tablica.push(milisekundy)
                const doc = {
                    sek: sekundy,
                    milisec: milisekundy
                };
                coll1.insert(doc, function (err, newDoc) {
                    console.log("dodano dokument (obiekt):")
                    console.log(newDoc)
                    console.log("unikalne id dokumentu: " + newDoc._id)
                    resolve("skonczono")
                });
            }, 200);
        } catch (ex) {
            throw (ex)
        }
    })
}