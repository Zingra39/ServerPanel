import styled from "styled-components";
import { NavLink as BaseNavLink } from "react-router-dom";

export const EmptyListContainer = styled.div`
    width: 100%;
    height: 90%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
        color: ${(props) => props.theme["red-500"]};
        font-size: 3rem;
        font-weight: 500;
    }

    p{
        font-size: 1.25rem;
        letter-spacing: 4px;
        color: ${(props) => props.theme["gray-400"]};
        font-weight: 300;
    }

    img{
        width: 14rem;
    }
`

export const NavLink = styled(BaseNavLink)`
    width: 10rem;
        height: 2rem;

        margin-top: 1rem;

        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;

        text-decoration: none;
        font-size: 1rem;
        color: ${(props) => props.theme.white};

        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        background-color: ${(props) => props.theme["blue-500"]};
        border: 0;
        border-radius: 8px;

        transition: 0.5s;

        &:hover{
            cursor: pointer;
            background-color: ${(props) => props.theme["blue-700"]};
        }
`