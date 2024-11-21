import styled from "styled-components";

export const LoginContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('https://fastcompany.com.br/imgemail/fundoemailreplica.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* background: linear-gradient(to top, #09203f 0%, #537895 100%); */

    form{
        width: 24rem;
        height: 32rem;
        padding: 1.5rem;

        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2.5rem;

        background-color: ${props => props.theme.white};
    }
`

export const LogoContainer = styled.div`
    width: 30rem;
    height: 32rem;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: radial-gradient(circle, ${(props) => props.theme['blue-700']} 30%, ${(props) => props.theme['blue-500']} 89%);

    img{
        width: 20rem;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    justify-content: center;
    align-items: center;
`

export const WelcomeContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: left;
    align-items: start;

    transform: translateY(-20%);
    
    h2{
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: 0.2rem;
        color: ${(props) => props.theme['orange-600']};
    }

    h3{
        font-size: 2.7rem;
        font-weight: 300;
    }
    
`

export const LoginInput = styled.label`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;

    width: 18rem;
    height: 1rem;
    padding: 1rem;

    border: 1px solid ${props => props.theme["gray-500"]};
    border-radius: 8px;

    input{
        border:none;
        flex: 1;
        height: 1rem;
    }

    button{
        border: none;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`

export const LoginButton = styled.button`
    width: 18rem;
    height: 2.5rem;

    border-radius: 10px;
    outline: none;
    border: 0;

    background-color: ${props => props.theme["blue-700"]};
    color: ${props => props.theme["gray-100"]};
    font-size: 1.20rem;
    letter-spacing: 0.125rem;

    transition: 0.5s;

    &:hover{
        background-color: ${props => props.theme['blue-500']};
        cursor: pointer;
    }
`;