import React from "react";
import {LogoStyled} from "./Logo.styled";
import {RiseOutlined} from "@ant-design/icons";

export const Logo = (props) => (
    <LogoStyled style={props.style}>
        <RiseOutlined />
        AnimalStore
    </LogoStyled>
);
