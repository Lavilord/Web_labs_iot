import React from "react";
import {FooterStyled, LinkSection,RightsSection, VerticalLine, InfoSection} from "./Footer.styled";
import {IconStyled} from "../../../components/Icon/Icon.styled";
import {InstagramOutlined, FacebookFilled, TwitterCircleFilled} from "@ant-design/icons";
import {Logo} from "../../../components/Logo/Logo";

export const Footer = () => (
    <FooterStyled>
        <InfoSection>
            <Logo style={{fontSize:'1em'}} />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ad at atque commodi cupiditate doloremque dolores illo mollitia necessitatibus nemo reprehenderit?
            </p>
        </InfoSection>
        <LinkSection>
            <IconStyled component = {InstagramOutlined} color='#000'/>
            <IconStyled component = {FacebookFilled} color='#05f'/>
            <IconStyled component = {TwitterCircleFilled} color='#0af'/>
        </LinkSection>
        <VerticalLine />
        <RightsSection>
            @AnimalStore. All rights reserved
        </RightsSection>
    </FooterStyled>
);
