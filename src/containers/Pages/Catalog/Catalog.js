import React from "react";
import {PageStyled} from "../Page.styled";
import {CardStorage} from "../../../components/Card/CardStorage";
import {getAnimalCards} from "./CatalogDom";
import {ActionPanel} from "../../../components/ActionPannel/ActionPanel";

const animals = [
    {name:"Dori", price: 1, animal_type: "BabyMonkey", weight_in_kg: 10},
    {name:"Andrew", price: 1, animal_type: "Tiger", weight_in_kg: 3},
    {name:"Lorem", price: 0.5, animal_type: "Clownfish", weight_in_kg: 3},
    {name:"Tormentor", price: 8, animal_type: "Gray Monkey", weight_in_kg: 50},
    {name:"Patric", price: 4, animal_type: "Dinosaur", weight_in_kg: 3},
    {name:"Lary", price: 1, animal_type: "Animal", weight_in_kg: 0.3},
    {name:"Hu", price: 4, animal_type: "Black Monkey", weight_in_kg: 5},
    {name:"Chunk", price: 2, animal_type: "Super tiger", weight_in_kg: 2},
    {name:"Olive", price: 4, animal_type: "Gorilla monkey", weight_in_kg: 5},
    {name:"Giddy", price: 0.8, animal_type: "Gold tiger", weight_in_kg: 0.1},
]

export const Catalog = () => (
    <PageStyled>
        <ActionPanel />
        <CardStorage id="catalog">
            {
                getAnimalCards(animals)
            }
        </CardStorage>
    </PageStyled>
)
