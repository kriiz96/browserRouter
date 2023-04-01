import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <ContenedorHeader>
      <Titulo>Blog de Deportes</Titulo>
      <Menu>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/acerca-de">Acerca de</NavLink>
      </Menu>
    </ContenedorHeader>
  );
};

const ContenedorHeader = styled.header`
text-align: center;
margin-bottom: 40px;
margin-top: 40px;
`

const Titulo = styled.h1`
font-size: 26px;
margin-bottom: 20px;
text-transform:uppercase;
color: #FF0000;
`

const Menu = styled.nav`
a{
    text-decoration: none;
    color: #165168;
    margin: 0 10px;
}
a:hover{
    color: #165168;
    background-color: yellow;
}
a:active{
    border-bottom: 2px solid #165168;
    padding-bottom: 5px;
}
`

export default Header;
