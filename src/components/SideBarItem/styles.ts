import styled from "styled-components";
import { NavLink as BaseNavLink } from "react-router-dom";

interface SideBarItemProps {
    extend: boolean
}

export const NavLink = styled(BaseNavLink)`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: ${props => props.theme.white};
    font-size: 1.25rem;
    font-weight: 300;

    span{
        display: flex;
    }
`

export const Link = styled.p<SideBarItemProps>`
    opacity: ${(props) => (props.extend ? 0 : 1)};
    visibility: ${(props) => (props.extend ? 'hidden' : 'visible')};
    transform: ${(props) => (props.extend ? 'translateX(-5px)' : 'translateX(0)')};
    transition: opacity 0.5s ease, transform 0.5s ease, visibility 0.5s;
`;
