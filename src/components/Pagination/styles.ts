import styled from "styled-components";

interface ButtonProps{
    activie: true | false
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 0.25rem;

    padding: 2rem 1rem 0 0;
`;

export const ButtonPagination = styled.button<ButtonProps>`
    padding: 0.5rem;

    background-color: ${
        (props) => props.activie 
        ? props.theme['blue-300']
        : props.theme["blue-700"]
    }; 

    color: ${props => props.theme.white};
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover{
        background-color: ${props => props.theme["blue-500"]};
    }
`;