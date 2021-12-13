import React from "react";
import {PageStyled} from "../Page.styled";
import {WelcomeSection} from "../../../components/WelcomeSection/WelcomeSection";
import {CardStorage} from "../../../components/Card/CardStorage/CardStorage";
import {ANIMAL_CARD_SIZE} from "../../../const/Constants";

export const Homepage = () => (
    <PageStyled>
        <WelcomeSection />
        <CardStorage style={{width: ANIMAL_CARD_SIZE*3}} animalNum={3} animalIncrement={3} />
    </PageStyled>
);
