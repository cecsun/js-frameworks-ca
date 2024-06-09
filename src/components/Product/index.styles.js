import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductsContainer = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    width: 100%;
    height: 500px;
    margin: auto;
    text-align: center;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const DiscountedPrice = styled.div`
    color: red;
    font-size: 20px;
`;

export const DiscountPercentage = styled.span`
    color: red;
    font-weight: bold;
    margin-left: 10px;
`;

export const Price = styled.div`
    color: black;
    font-size: 20px;
    margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    }
    button {
        border: none;
        outline: 0;
        padding: 12px;
        color: white;
        background-color: blue;
        text-align: center;
        cursor: pointer;
        width: 100%;
        font-size: 18px;
        &:hover {
            opacity: 0.7;
        }
    }
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
    border-radius: 0 0 10px 10px;
    &:hover {
        opacity: 0.7;
    }
`;



