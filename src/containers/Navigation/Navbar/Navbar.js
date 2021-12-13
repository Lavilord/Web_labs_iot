import React from "react";
import {NavbarStyled, NavLinkStyled} from "./Navbar.styled";

export const Navbar = () => (
   <NavbarStyled>
       <NavLinkStyled to={'/'}>
           Home
       </NavLinkStyled>
       <NavLinkStyled to={'/catalog'}>
           Catalog
       </NavLinkStyled>
       <NavLinkStyled to={'/cart'}>
           Cart
       </NavLinkStyled>
   </NavbarStyled>
)


