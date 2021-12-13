import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getAnimal} from "../../../api/Api";
import monkey from "../../../images/monkey.jpg";
import animal1 from "../../../images/animal.jpg";
import tiger from "../../../images/tiger.jpg";
import {AnimalPageStyled} from "./AnimalPage.styled";

export const AnimalPage = () => {
    const {animalId} =  useParams();
    const [animal, setAnimal] = useState();

    useEffect( () => {
        getAnimal(animalId)
            .then(receivedAnimal => {
                setAnimal(receivedAnimal);
            })
    }, [animalId] );

    if (animal === undefined) {
        return <h1> Not Found </h1>
    }

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
        <AnimalPageStyled>
            <img src={image} alt={animal.title}/>
            <div className="description">
                <h1>{animal.title}</h1>
                <ul>
                    <li>Price: {animal.price} $</li>
                    <li>Weight: {animal.weight} kg</li>
                </ul>
            </div>
        </AnimalPageStyled>
    );
}