import styled from "styled-components";

export const HomeContainer = styled.div`
    flex-grow: 1;
    padding: 1rem 2rem;
    width: 180vh;

    h1{
        color: ${(props) => props.theme["blue-700"]};
        font-size: 3rem;
        font-weight: 400;
        letter-spacing: 10px;
        padding-bottom: 1.5rem;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 3rem 7rem;
    width: 100%;
    padding: 1rem;

    div{
        width: 35rem;
        height: 20rem;

        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border: 1px solid ${(props) => props.theme['gray-100']};
            box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
            border-radius: 1rem;
            cursor: pointer;
            transition: 0.5s;

            &:hover{
                transform: scale(1.05);
                transition: transform 0.3s ease-in-out;
            }
        }
    }
`;