import React from "react";
import {AnimalCard} from "../../../components/Card/AnimalCard";
import monkey from "../../../images/monkey.jpg";
import animal1 from "../../../images/animal.jpg";
import tiger from "../../../images/tiger.jpg";


export const createAnimalCard = (animal) => {
    let image;
    if (animal.weight_in_grams > 3000) {
        image = tiger;
    }
    else if (animal.weight_in_grams> 500) {
        image = monkey;
    }
    else {
        image = animal1;
    }
    return (
        <AnimalCard key={animal.id}
                    image = {image}
                    title= {animal.title}
                    price ={animal.price}
                    weight={animal.weight_in_grams}
                    id={animal.id}
        />
    )
}


export const getAnimalCards = (animalList) => {
    return animalList.map(createAnimalCard);
}
