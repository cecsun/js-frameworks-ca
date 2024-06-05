import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
    background-color: rebeccapurple;
    display: flex;
    justify-content: space-between;

    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

export const Logo = styled.div`
    color: white;
    font-size: 30px;
    display: flex;
    align-items: center;
    margin-left: 20px;
    font-weight: bold;

    @media (max-width: 700px) {
        font-size: 20px;
        justify-content: center;
    }
`;

export const NavList = styled.ul`
    display: flex;

    @media (max-width: 500px) {
        display: flex;
        justify-content: center;
    }
`;

export const NavItem = styled.li`
    list-style-type: none;
    margin-right: 40px;
    margin-left: 20px;
`;

export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 600;
    &:hover {
        color: black;
    }

    @media (max-width: 700px) {
        font-size: 16px;
    }
`;

