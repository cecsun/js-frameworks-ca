import styled from "styled-components";

export const SingleProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
    ul {
        list-style: none;
        padding: 0;
        li {
            margin: 10px;
        }
    }
    button {
        margin: 20px;
        padding: 10px;
        border-radius: 5px;
        background-color: black;
        font-size: 18px;
        color: white;
        border: none;
        cursor: pointer;
        &:hover {
            opacity: 0.7;
        }
    }
`;

export const Image = styled.div`
    img {
        max-width: 400px;
        width: 100%;
        height: 400px;
        margin: auto;
        text-align: center;
        border-radius: 10px;
    }
`;

export const Title = styled.li`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`;

export const Description = styled.li`
    text-align: center;
`;

export const DiscountedPrice = styled.div`
    text-align: center;
    color: red;
`;

export const DiscountPercentage = styled.span`
    color: red;
    font-weight: bold;
    margin-left: 10px;
`;

export const Price = styled.li`
    text-align: center;
`;

export const Reviews = styled.div`
    background-color: #f9f9f9;
    border-radius: 10px;
    p {
        font-weight: 600;
        font-size: 20px;
        padding: 5px;
    }
`;