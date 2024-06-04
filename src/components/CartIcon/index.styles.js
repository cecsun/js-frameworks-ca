import styled from "styled-components";

export const CartWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    cursor: pointer;
`;

export const CartIcon = styled.div`
    font-size: 25px;
`;

export const CartNumber = styled.div`
    background: blue;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -10px;
    right: -10px;
    width: 18px;
    height: 18px;
`;

