
// import { readFile } from "fs";

// const test = async () => {
//     return new Promise((resolve, reject) => {
//         try {
//             readFile("./file01.txt", (err, data) => {
//                 if (err)
//                     resolve(err.message)
//                 else
//                     resolve(data.toString())
//             })
//         }
//         catch (ex) {
//             reject(ex)
//         }
//     })
// }

// const check = async () => {
//     const info = await test()
//     console.log(info);
// }

// check()



// const waitForMe = async (milisec, data) => {
//     return new Promise((resolve, reject) => {
//         try {
//             setTimeout(() => { resolve(data) }, milisec);
//         }
//         catch (error) {
//             reject(error)
//         }
//     })
// }

// const printuj = async () => {

// c) foreach - nie działa porawnie, bo foreach nie
// wykonuje się po kolei tylko równlegle
// let a = 0;
// const t = [1, 2, 3, 4, 5]
// t.forEach(async (item) => {
//     a += await waitForMe(1000, item);
//     console.log("wynik pośredni: " + a);
// });
// console.log("suma: " + a);

// d) zwykły for - poprawnie
// for (let i = 0; i < 5; ++i) {
//     console.log(await waitForMe(1000, i));
// }
// console.log("koniec printowania co 1000 ms- można działać dalej!");
// for (let i = 0; i < 5; ++i) {
//     console.log(await waitForMe(500, i));
// }
// console.log("koniec printowania co 500 ms- można działać dalej!");
// for (let i = 0; i < 5; ++i) {
//     console.log(await waitForMe(100, i));
// }
// console.log("koniec printowania co 100 ms!");
// }
// const printuj = async () => {
//     let a = 0
//     const o = { a: 1, b: 2, c: 3, d: 4, e: 5 }
//     for (const i in o) {
//         console.log("to jest i: " + i);
//         a += await waitForMe(500, o[i]);
//         console.log("wynik pośredni: " + i + o[i]);
//     }
//     console.log("suma wartości w obiekcie: " + a);
// }
// printuj()

import Datastore from 'nedb';

const coll1 = new Datastore({
    filename: 'kolekcja.db',
    autoload: true
});

const getAll = async () => {
    return new Promise((resolve, reject) => {
        try {
            coll1.find({}, (err, docs) => {
                resolve(docs)
            });
        } catch (error) {
            reject(error.message)
        }
    })
}


const show = async () => {
    console.log("pobieram dane 1 raz");
    const x = await getAll()
    console.log(x);
    console.log("pobieram dane 2 raz");
    const y = await getAll()
    console.log(y);
}

show()