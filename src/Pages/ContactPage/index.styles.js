import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #f8f9fa;
`;

export const FormWrapper = styled.div`
    background: white;
    padding: 35px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
    margin: 40px 0;
`;

export const Heading = styled.h1`
    text-align: center;
    padding-bottom: 20px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Label = styled.label`
    font-weight: 600;
`;

export const Input = styled.input`
    padding: 10px;
    margin-top: 3px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
`;

// export const Textarea = styled.textarea`
//     padding: 0.5rem;
//     border: 1px solid #ccc;
//     border-radius: 4px;
//     width: 100%;
// `;

export const Button = styled.button`
    padding: 12px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    width: 50%;
    align-self: center;
    &:hover {
        background-color: #0056b3;
    }
`;

export const Message = styled.p`
    color: green;
    text-align: center;
    font-weight: 600;
`;