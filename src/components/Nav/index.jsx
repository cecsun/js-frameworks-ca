import React from "react"
import * as S from "./index.styles.js";
import CartIcon from "../CartIcon/index.jsx";

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
            <CartIcon />
        </S.NavList>
    </S.Navbar>
  )
}

export default Nav;