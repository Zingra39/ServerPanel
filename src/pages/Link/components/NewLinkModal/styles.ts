import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: #00000075;
`

export const ModalHeader = styled.header`
    margin-bottom: 1.75rem;

    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 1rem;
`

export const CloseButton = styled(Dialog.Close)`
    color: ${(props) => props.theme["red-700"]};
    font-size: 1.5rem;
    font-weight: bold;

    background-color: transparent;
    border: none;

    transition: 0.5s;
    
    &:hover{
        color: ${(props) => props.theme["red-500"]};
        cursor: pointer;
    }
`

export const TitleModal = styled(Dialog.Title)`
    color: ${(props) => props.theme.white};
    font-size: 2rem;
`

export const Description = styled(Dialog.Description)`
    color: ${(props) => props.theme["gray-400"]};
    font-size: 1rem;
`

export const Content = styled(Dialog.Content)`
    min-width: 40rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background: ${props => props.theme["blue-700"]};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form{
        display: flex;
        flex-direction: column;
        gap: 1.75rem;

        background-color: ${props => props.theme["gray-300"]};
        padding: 1rem;
        border-radius: 6px;

        input{
            width: 100%;
            padding: 0.75rem;
            background-color: ${props => props.theme["gray-500"]};

            border-radius: 5px;
            border: none;

            color: ${(props) => props.theme.white};

            &::placeholder{
                color: ${props => props.theme["gray-100"]};
            }
        }
    }
`

export const ButtonContainer = styled.div`
    display: grid;
    justify-content: end;
    gap: 1rem;
`

export const ButtonModal = styled.button`
    
    padding: 0.6rem 4rem;

    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme["green-700"]};
    border: none;
    border-radius: 5px;
    
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    transition: 0.5s;

    &:hover{
        cursor: pointer;
        background-color: ${props =>  props.theme["green-500"]};
    }

    &:disabled{
        opacity: 0.7;
        cursor: not-allowed;
    }
`