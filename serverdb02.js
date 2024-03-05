import { createServer } from "http";

import { totalmem, freemem } from "os"

import { writeFile, readFileSync } from "fs";

import path, { resolve } from "path";
const __dirname = path.resolve();
let folder_glowny = path.join(__dirname, "logi")
const PORT = 3000;
let tablica_nazw = []
let zawartosci = []
const server = createServer((req, res) => {
    // parametr res oznacza obiekt odpowiedzi serwera (response)
    // parametr req oznacza obiekt żądania klienta (request)
    console.log("request");
    res.end("response")
})

server.listen(3000, async () => {
    console.log(`serwer startuje na porcie ${PORT}`)
    await oczekiwanie(2)
    await czytanie_plikow()
    console.log(zawartosci);
});

let oczekiwanie = async (ilosc) => {
    let i = 0
    return new Promise((resolve, reject) => {
        setInterval(() => {
            if (i >= ilosc) {
                resolve("Koniec")
            } else {
                i++
                wpisywanie_danych()
            }
        }, 200);

    })
}

let wpisywanie_danych = async () => {
    try {
        let data = new Date()
        let godzina = data.getHours()
        let sekunda = data.getSeconds()
        let milisekunda = data.getMilliseconds()
        let nazwa_pliku = godzina + "_" + sekunda + "_" + milisekunda
        tablica_nazw.push(nazwa_pliku)
        let sciezka = path.join(folder_glowny, nazwa_pliku)
        let wpis_obiekt = {
            totalmem: totalmem(),
            freemem: freemem()
        }
        let wpis_string = JSON.stringify(wpis_obiekt)
        writeFile(sciezka, wpis_string, (err) => {
            if (err) throw err
            console.log("plik nadpisany");
        })
    } catch (error) {
        throw (error)
    }

}

let czytanie_plikow = async () => {
    for (const plik of tablica_nazw) {
        let sciecha = path.join(folder_glowny, plik)
        let data = readFileSync(sciecha)
        console.log(data.toString());
        zawartosci.push(data.toString())
    }
}