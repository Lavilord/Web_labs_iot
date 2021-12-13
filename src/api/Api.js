const animals = [
    {id:1,title:"Dori", price: 1, animal_type: "BabyMonkey", weight: 10},
    {id:2,title:"Andrew", price: 1, animal_type: "Tiger", weight: 3},
    {id:3,title:"Lorem", price: 0.5, animal_type: "Clownfish", weight: 3},
    {id:4,title:"Tormentor", price: 8, animal_type: "Gray Monkey", weight: 50},
    {id:5,title:"Patric", price: 4, animal_type: "Dinosaur", weight: 3},
    {id:6,title:"Lary", price: 1, animal_type: "Animal", weight: 0.3},
    {id:7,title:"Hu", price: 4, animal_type: "Black Monkey", weight: 5},
    {id:8,title:"Chunk", price: 2, animal_type: "Super tiger", weight: 2},
    {id:9,title:"Olive", price: 4, animal_type: "Gorilla monkey", weight: 5},
    {id:10,title:"Giddy", price: 0.8, animal_type: "Gold tiger", weight: 0.1},
]

export const getAnimalList = async () => {

    return animals;
};

export const getAnimal = async (id) => {


    return animals[id-1];
}
