import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getAnimal} from "../../../api/Api";
import monkey from "../../../images/monkey.jpg";
import animal1 from "../../../images/animal.jpg";
import tiger from "../../../images/tiger.jpg";
import {AnimalPageStyled} from "./AnimalPage.styled";
import {Loader} from "../../../components/loader/Loader";

export const AnimalPage = () => {
    const {animalId} =  useParams();
    const [animal, setAnimal] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect( () => {
        getAnimal(animalId)
            .then(receivedAnimal => {
                setAnimal(receivedAnimal);
                setIsLoaded(true)
            })
    }, [animalId] );

    if (animal === undefined) {
        return isLoaded ?  <h1> Not Found </h1> : <Loader />
    }

    let image;
    if (animal.weight_in_grams > 3000) {
        image = tiger;
    }
    else if (animal.weight_in_grams > 500) {
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
                    <li>Weight: {animal.weight_in_grams} grams</li>
                </ul>
            </div>
        </AnimalPageStyled>
    );
}