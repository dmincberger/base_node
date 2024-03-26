import { Animal, animalsArray, addAnimal } from "./model"
const controller = {
    add: (name, color) => {
        let animal = new Animal(name, color) // stworzylem obiekt z otrzymanych danych
        addAnimal(animal) // dodaje go do tablicy
    },
    delete: (id) => {
        // usuwanie po id z animalsArray
    },
    update: (id) => {
        // update po id elementu animalsArray
    },
    getall: () => {
        return animalsArray
    }

}
export default controller