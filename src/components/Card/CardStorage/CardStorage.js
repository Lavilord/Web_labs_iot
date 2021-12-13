import React, {useEffect, useState} from 'react';
import {getAnimalList} from "../../../api/Api";
import {CardStorageStyled} from "./CardStorage.styled";
import {getAnimalCards} from "../../../containers/Pages/Catalog/CatalogDom";
import {Button} from "antd";
import {Loader} from "../../loader/Loader";

export const CardStorage = ({animalNum, animalIncrement= 1, style, filters}) => {
    const [animalListSize, setAnimalListSize] = useState(animalNum ? animalNum: 0);
    const [animalList, setAnimalList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [filter, setFilter] = useState({});

    useEffect( () => {
        setFilter(filters ? filters : {})
    }, [filters]);
        useEffect (() => {
            getAnimalList(filter.weight, filter.title, filter.price)
                .then(
                    receivedAnimalList => {
                        if (animalListSize === 0) {
                            setAnimalList(receivedAnimalList)
                        }
                        else setAnimalList(receivedAnimalList.slice(0, animalListSize))
                        setIsLoaded(true)
                    }
                )
                .catch( () =>  {
                    console.log("Error occurred during loading data from server");
                })
        }, [animalListSize, filter]);
        return (
            <div style={style}>
                <CardStorageStyled>
                    {
                        (animalList.length !== 0) ?
                            getAnimalCards(animalList) :
                            isLoaded ? <h2>Nothing found</h2> : <Loader />
                    }
                </CardStorageStyled>
                {
                    !(animalListSize === 0 || animalListSize > animalList.length) &&
                    <Button onClick={() => setAnimalListSize(animalListSize+animalIncrement)}>Show more...</Button>
                }
            </div>
        );
    }