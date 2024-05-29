import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  background-color: red;
  display: flex;
  justify-content: right;
`;

export const NavList = styled.ul`
    display: flex;
`;

export const NavItem = styled.li`
    list-style-type: none;
    margin: 0 20px;
`;

export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 20px;
    &:hover {
        color: black;
    }
`;

