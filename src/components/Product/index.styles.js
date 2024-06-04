import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductsContainer = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
`;

export const DiscountedPrice = styled.div`
    color: red;
    font-size: 24px;
`;

export const Price = styled.div`
    color: grey;
    font-size: 22px;
    text-decoration: line-through;
`;

export const Button = styled.button`
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
    &:hover {
        background-color: #555;
    }
`;

export const StyledLink = styled(Link)`
    color: black;
    background-color: blue;
    text-decoration: none;
    font-size: 20px;
    &:hover {
        color: red;
    }
`;

