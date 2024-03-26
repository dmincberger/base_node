class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    // inne potrzebne funkcje

}

async function addAnimal(animal) {
    animalsArray.push(animal)
}

let animalsArray = []

export { Animal, animalsArray, addAnimal };