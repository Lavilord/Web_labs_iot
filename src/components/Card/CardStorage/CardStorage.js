import React, {useEffect, useState} from 'react';
import {getAnimalList} from "../../../api/Api";
import {CardStorageStyled} from "./CardStorage.styled";
import {getAnimalCards} from "../../../containers/Pages/Catalog/CatalogDom";
import {Button} from "antd";

export const
    CardStorage = ({animalNum, animalIncrement= 1, style, filters}) => {
        const [animalListSize, setAnimalListSize] = useState(animalNum ? animalNum: 0);
        const [animalList, setAnimalList] = useState([]);
        useEffect (() => {
            getAnimalList()
                .then(
                    receivedAnimalList => {
                        if (filters) {
                            receivedAnimalList = receivedAnimalList.filter( (animal) =>
                                {
                                    const isProperName = animal.title.toLowerCase().search(filters.title) !== -1;
                                    let isProperWeight;
                                    if (filters.weight){
                                        isProperWeight = animal.weight === filters.weight
                                    }
                                    else {
                                        isProperWeight = true
                                    }
                                    let isProperPrice;
                                    if (filters.price) {
                                        isProperPrice = animal.price === filters.price;
                                    }
                                    else {
                                        isProperPrice = true;
                                    }
                                    return (isProperName && isProperWeight && isProperPrice);
                                }
                            )
                        }
                        console.log(receivedAnimalList)
                        if (animalListSize >= receivedAnimalList.length) {
                            setAnimalListSize(0);
                        }
                        if (animalListSize === 0) {
                            setAnimalList(receivedAnimalList)
                        }
                        else setAnimalList(receivedAnimalList.slice(0, animalListSize))
                    }
                )
                .catch( () =>  {
                    console.log("Error occurred during loading data from server");
                })
        }, [animalListSize, filters]);
        return (
            <div style={style}>
                <CardStorageStyled>
                    {
                        (animalList.length !== 0) ?
                            getAnimalCards(animalList) : <h2>Nothing found</h2>
                    }
                </CardStorageStyled>
                {
                    !(animalListSize === 0 || animalListSize > animalList.length) &&
                    <Button onClick={() => setAnimalListSize(animalListSize+animalIncrement)}>Show more...</Button>
                }
            </div>
        );
    }