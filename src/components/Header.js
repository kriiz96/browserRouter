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
text-transform: uppercase;
color: #FF0000;
`

const Menu = styled.nav`
a{
  display: inline-block;
  background-color: #199319;
  color: white;
  padding: 15px 25px;
  text-decoration: none;
  margin: 0 20px;
  border-radius: 10px;
}
a:hover{
    background-color: yellow;
}
a:active{
    border-bottom: 2px solid #165168;
    padding-bottom: 5px;
    transition: all 0.3s ease;
}
`

export default Header;
