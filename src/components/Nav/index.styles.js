import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
    background-color: red;
    display: flex;
    justify-content: space-between;
`;

export const Logo = styled.div`
    color: white;
    font-size: 30px;
    display: flex;
    align-items: center;
    margin-left: 20px;
    font-weight: bold;
`;

export const NavList = styled.ul`
    display: flex;
`;

export const NavItem = styled.li`
    list-style-type: none;
    margin-right: 40px;
    margin-left: 20px;
`;

export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 20px;
    &:hover {
        color: black;
    }
`;

