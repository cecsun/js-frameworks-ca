import styled from "styled-components";

export const CheckoutContainer = styled.div`
    text-align: center;
    min-height: 100vh;
    margin: 40px 0;
    h1 {
        margin-bottom: 20px;
    }
`;

export const Total = styled.div`
    margin-top: 20px;
    font-size: 25px;
    font-weight: 600;
    text-decoration: underline;
`;

export const Button = styled.button`
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
    background-color: black;
    font-size: 18px;
    color: white;
    border: none;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;