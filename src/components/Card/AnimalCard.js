import React from "react";
import 'antd/dist/antd.css';
import {Card} from "antd";

export const AnimalCard = (props) => (
    <Card
        style={{width: "150px", margin:"10px"}}
        hoverable
        cover={<img src={props.image} alt="example" style={{height:'150px'}}  />}>
        <Card.Meta
            title={props.name}
            description={
                <div>
                    <p>Price: {props.price} $</p>
                    <p>Weight: {props.weight} kg</p>
                </div>
            }
        />
    </Card>
);
