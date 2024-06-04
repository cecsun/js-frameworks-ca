import styled from "styled-components";

export const SearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    input {
        padding: 10px;
        font-size: 16px;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
            padding: 10px;
            font-size: 16px;
            cursor: pointer;
            &:hover {
                background-color: #f9f9f9;
            }
        }
    }
`;
