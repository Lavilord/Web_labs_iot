import React from "react";
import {Input, Select} from "antd";
import {ActionPanelStyled} from "./ActionPanel.styled";

export const ActionPanel = () => (
    <ActionPanelStyled>
        <div>
            <label htmlFor="sort">Sort by:</label>
            <Select id="sort" value="name" style={{width: "400px", margin: "0 10px"}}>
                <Select.Option value="name">Name</Select.Option>
                <Select.Option value="price">Price</Select.Option>
                <Select.Option value="type">Type</Select.Option>
                <Select.Option value="weight">Weight</Select.Option>
            </Select>
        </div>
        <Input allowClear
               placeholder="Search for animal..."
               style={{width: "400px"}}
               id="search"/>
    </ActionPanelStyled>
)
