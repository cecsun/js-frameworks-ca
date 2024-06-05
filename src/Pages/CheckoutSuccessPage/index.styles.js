import styled from "styled-components";
import { Link } from "react-router-dom";

export const CheckoutSuccessPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    h1 {
        margin-top: 100px;
`;

export const StyledLink = styled(Link)`
        padding: 20px;
        margin-top: 40px;
        color: black;
`;