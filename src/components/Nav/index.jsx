import React from "react";
import * as S from "./index.styles.js";
import CartIcon from "../CartIcon/index.jsx";

/**
 * Navigation bar component for the eCom store.
 * Displays logo, navigation links, and a cart icon.
 *
 * @component
 * @returns {JSX.Element} The navigation bar element.
 */
function Nav() {
  return (
    <S.Navbar>
      <S.Logo><div>eCom store</div></S.Logo>
      <S.NavList>
        <S.NavItem>
          <S.StyledLink to="/">Home</S.StyledLink>
        </S.NavItem>
        <S.NavItem>
          <S.StyledLink to="/contactPage">Contact</S.StyledLink>
        </S.NavItem>
        <CartIcon />
      </S.NavList>
    </S.Navbar>
  );
}

export default Nav;
