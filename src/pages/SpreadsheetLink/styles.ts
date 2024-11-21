import styled from "styled-components";

export const Container = styled.main`
    height: 100vh;
    width: 100vw;
    padding: 1rem 6rem;

    h1{
        color: ${(props) => props.theme["blue-700"]};
        font-weight: 500;
        letter-spacing: 0.25rem;
        font-size: 3rem;

        margin-bottom: 2.75rem;
    }
`

export const DropzoneContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DropzoneBox = styled.form`
    width: 100%;
    max-width: 60rem;
    padding: 2rem;
    
    display: flex;
    justify-content: center;
    flex-direction: column;

    border-radius: 6px;
    border: 1px solid ${(props) => props.theme["gray-300"]};
    background: ${(props) => props.theme["gray-200"]};

    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    h2{
        margin-bottom: 0.6rem;

        font-size: 1.7rem;
        color: ${(props) => props.theme["blue-500"]};
    }

    p{
        font-size: 1.15rem;
        color: ${(props) => props.theme["gray-400"]};
    }
`

export const DropzoneArea = styled.div`
    min-height: 16rem;
    padding: 1rem;
    
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    position: relative;
    margin-top: 1.5rem;
    
    border: 2px dashed ${(props) => props.theme["gray-400"]};
    border-radius: 1rem;

    cursor: pointer;
    transition: all 0.2s ease;

    &:hover{
        background-color: ${(props) => props.theme["gray-300"]};
    }

    p{
        font-size: 1.1rem;
    }

    input[type="file"]{
        cursor: pointer;
        position: absolute;
        opacity: 0;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
`;

export const DropzoneIcon = styled.div`
    svg{
        height: 6rem;
        max-width: 6rem;
        width: 100%;
        margin-bottom: 6px;
    }
`

export const DropzoneAction = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    margin-top: 2rem;
    gap: 1rem;
    flex-wrap: wrap;

    div{
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`

interface ButtonProps {
    variant: 'reset' | 'submit'
}

export const DropzoneButton = styled.button<ButtonProps>`
    flex-grow: 1;
    min-height: 3rem;
    padding: 0.5rem 1rem;

    border: none;
    border-radius: 0.5rem;
    
    font-size: 1.2rem;
    color: white;

    cursor: pointer;
    transition: all 0.2s ease;

    background-color: ${
        (props) =>
            props.variant ==='reset'?
            props.theme["red-700"] :
            props.theme["blue-700"]
    };

    &:hover{
        background-color: ${
        (props) =>
            props.variant ==='reset'?
            props.theme["red-500"] :
            props.theme["blue-500"]
        };
    }
`