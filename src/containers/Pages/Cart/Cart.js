import React from "react";
import {PageStyled} from "../Page.styled";
import {useSelector, useDispatch} from "react-redux";
import {removeAnimal, clearCart} from "../../../App/storage/features/animalCart/AnimalSlice";

import {getAnimalCards} from "../../../components/Card/CardStorage/StorageDom";
import {DeleteButtonStyled} from "../../../components/Buttons/DeleteButton.styled";
import {ActionPanelStyled} from "../../../components/ActionPannel/ActionPanel.styled";
import {Button} from "antd";

export const Cart = () => {
    const animalList = useSelector((state) => state.animalInCart.value)
    const totalPrice = useSelector((state) =>
        state.animalInCart.value.reduce((total, animal) => (total + animal.price), 0)
    )
    const dispatch = useDispatch();

    if (animalList.length === 0) {
        return (<h1>Cart is empty</h1>)
    }

    return (
        <PageStyled style={{height:"100%"}}>
            <ActionPanelStyled>
                <h2>Total price: {totalPrice}$</h2>
                <DeleteButtonStyled onClick={() => {dispatch(clearCart())}}>
                    Clear cart
                </DeleteButtonStyled>
                <Button style={{width:"18%", backgroundColor:"lightgreen"}}> Buy </Button>
            </ActionPanelStyled>
            <div style={{display:"flex", flexDirection:"row"}}>
                {
                    getAnimalCards(animalList, (animal) =>
                        (<DeleteButtonStyled onClick={() => {dispatch(removeAnimal(animal.id))}}>
                            Remove
                        </DeleteButtonStyled>)
                    )
                }
            </div>
        </PageStyled>
    )
}