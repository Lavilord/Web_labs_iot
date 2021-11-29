
const ANIMALS =[
    {id:1,title:'Animal-1',price:10,weight_in_grams:235},
    {id:2,title:'Animal-2',price:1000,weight_in_grams:242476},
    {id:3,title:'Animal-3',price:22,weight_in_grams:2424},
    {id:4,title:'Animal-4',price:34,weight_in_grams:1342},
    {id:5,title:'Animal-5',price:66,weight_in_grams:43},
    {id:6,title:'Animal-6',price:90,weight_in_grams:1332},
    {id:7,title:'Animal-7',price:200,weight_in_grams:3768},
    {id:8,title:'Animal-8',price:349,weight_in_grams:5779},
    {id:9,title:'Animal-9',price:12,weight_in_grams:3565},
    {id:10,title:'Animal-10',price:1,weight_in_grams:5768}
]
export const getAllAnimals = () => {
    return ANIMALS;
}
export const postAnimal = (body) => {
    ANIMALS.push(body);
}

export const updateAnimal = (id, body) => {
    let idx = ANIMALS.findIndex(x => x.id === id);
    ANIMALS[idx].title = body.title;
    ANIMALS[idx].price = body.price;
    ANIMALS[idx].weight_in_grams = body.weight_in_grams;
}
