import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import * as S from "./Nav.styles";

function Nav() {
  return (
      <S.Navbar>
        <S.NavList>
            <S.NavItem>
                <S.StyledLink to="/">Home</S.StyledLink>
            </S.NavItem>    
            <S.NavItem>
                <S.StyledLink to="/contact">Contact</S.StyledLink>
            </S.NavItem>
            {/* <S.NavItem>
                <S.StyledLink to="/cart">Cart</S.StyledLink>
            </S.NavItem> */}
        </S.NavList>
      </S.Navbar>
   
  )
}

export default Nav;