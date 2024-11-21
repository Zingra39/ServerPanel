import styled from "styled-components";

export const LinkContainer = styled.div`
    flex-grow: 1;
    height: 100vh;
    width: 100vw;
    padding: 1rem 6rem;

    h1{
        color: ${(props) => props.theme["blue-700"]};
        font-weight: 500;
        letter-spacing: 0.25rem;
        font-size: 3rem;

        margin-bottom: 1.7rem;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 1.75rem;

    
`

interface ButtonProps{
    varinat: 'primary' | 'secondary'
}

export const NewLinkButton = styled.button<ButtonProps>`
    padding: 0.5rem 2rem;
    
    text-decoration: none;
    font-size: 1rem;
    color: ${(props) => props.theme["white"]};

    background-color: ${
        (props) =>
            props.varinat === 'primary' ?
            props.theme["blue-700"] :
            props.theme["green-700"]
    };

    border-radius: 10px;
    border: none;
    
    transition: 0.5s;

    &:hover{
        background-color: ${
            (props) =>
                props.varinat === 'primary' ?
                props.theme["blue-500"] :
                props.theme["green-500"]
        };

        cursor: pointer;
    }
`;

export const GalleryContainer = styled.div`
    padding: 1.25rem;
    width: 70.3rem;

    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;

    overflow: visible;
`