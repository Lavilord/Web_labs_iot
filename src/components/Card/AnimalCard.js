import React from "react";
import 'antd/dist/antd.css';
import {Button, Card} from "antd";
import {NavLink} from "react-router-dom";
import {ANIMAL_CARD_MARGIN, ANIMAL_CARD_WIDTH} from "../../const/Constants";

export const AnimalCard = ({image, title, price, weight, id, addOns=null}) => (
    <Card
        style={{width: ANIMAL_CARD_WIDTH, margin:ANIMAL_CARD_MARGIN}}
        hoverable
        cover={<img src={image} alt="example" style={{height:'150px'}}  />}>
        <Card.Meta
            title={title}
            description={
                <div>
                    <p>Price: {price} $</p>
                    <p>Weight: {weight} grams</p>
                    <NavLink to={`/catalog/animal/${id}`}>
                        <Button>
                            View more...
                        </Button>
                    </NavLink>
                    <p>
                        {addOns}
                    </p>
                </div>
            }
        />
    </Card>
);
