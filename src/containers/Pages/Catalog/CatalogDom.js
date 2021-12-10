import React from "react";
import {AnimalCard} from "../../../components/Card/AnimalCard";
import monkey from "../../../images/monkey.jpg";
import animal1 from "../../../images/animal.jpg";
import tiger from "../../../images/tiger.jpg";


export const createAnimalCard = (animal) => {
    let image;
    if (animal.animal_type.toString().toLocaleLowerCase().search("tiger") !== -1) {
        image = tiger;
    }
    else if (animal.animal_type.toString().toLocaleLowerCase().search("monkey") !== -1) {
        image = monkey;
    }
    else {
        image = animal1;
    }
    return (
        <AnimalCard image = {image}
                    name = {animal.name}
                    price ={animal.price}
                    weight={animal.weight_in_kg}
        />
    )
}


export const getAnimalCards = (animalList) => {
    return animalList.map(createAnimalCard);
}
