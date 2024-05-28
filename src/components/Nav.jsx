import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import * as S from "./Nav.styles";

function Nav() {
  return (
    <BrowserRouter>
      <S.Navbar>
        <S.NavList>
            <S.NavItem>
                <S.StyledLink to="/">Home</S.StyledLink>
            </S.NavItem>    
            <S.NavItem>
                <S.StyledLink to="/contact">Contact</S.StyledLink>
            </S.NavItem>
            <S.NavItem>
                <S.StyledLink to="/cart">Cart</S.StyledLink>
            </S.NavItem>
        </S.NavList>
      </S.Navbar>
      <Routes>
        <Route index element={<div></div>} />
        <Route path="contact" element={<div></div>} />
        <Route path="cart" element={<div></div>} />
        <Route path="*" element={<div>Route not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Nav;