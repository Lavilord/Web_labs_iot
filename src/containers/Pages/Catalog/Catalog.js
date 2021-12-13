import React, {useEffect, useState} from "react";
import {PageStyled} from "../Page.styled";
import {CardStorage} from "../../../components/Card/CardStorage/CardStorage";
import {ANIMAL_CARD_SIZE} from "../../../const/Constants";
import {ActionPanelStyled} from "../../../components/ActionPannel/ActionPanel.styled";
import {FilterInput} from "../../../components/ActionPannel/FilterInput";

export const Catalog = () => {
    const [filterTitle, setFilterTitle] = useState("");
    const [filterWeight, setFilterWeight] = useState(undefined);
    const [filterPrice, setFilterPrice] = useState(undefined);
    const [filters, setFilters] = useState(undefined);

    useEffect(() => {
        setFilters({
            title: filterTitle,
            weight: filterWeight,
            price: filterPrice
        })
    }, [filterTitle, filterWeight, filterPrice])

    return (
        <PageStyled>
            <ActionPanelStyled>
                <FilterInput id="title" placeholder="Enter title..."
                             onSearch={(value) => setFilterTitle(value)}/>
                <FilterInput id="weight" placeholder="Enter weight..."
                             onSearch={(value) => setFilterWeight(Number(value))}/>
                <FilterInput id="price" placeholder="Enter price..."
                             onSearch={(value) => setFilterPrice(Number(value))}/>
            </ActionPanelStyled>
            <CardStorage filters={filters} style={{width: ANIMAL_CARD_SIZE*6}}/>
        </PageStyled>
    )
}

