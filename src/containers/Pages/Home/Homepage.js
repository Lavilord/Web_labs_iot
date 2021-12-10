import React from "react";
import {PageStyled} from "../Page.styled";
import {WelcomeSection} from "../../../components/WelcomeSection/WelcomeSection";
import {CardStorage} from "../../../components/Card/CardStorage";
import {AnimalCard} from "../../../components/Card/AnimalCard";
import animal from "../../../images/animal.jpg";
import monkey from "../../../images/monkey.jpg";


export const Homepage = () => (
    <PageStyled>
        <WelcomeSection />
        <CardStorage>
            <AnimalCard image={animal}
                        name="Gary"
                        price="3"
                        weight="40"
            />
            <AnimalCard image={monkey}
                        name="Gary"
                        price="1"
                        weight="3"
            />
            <AnimalCard image={monkey}
                        name="Lorem"
                        price="2"
                        weight="1"
            />
        </CardStorage>
    </PageStyled>
);
