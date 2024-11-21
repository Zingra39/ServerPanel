import styled from "styled-components"

interface SideBarProps {
    extend: boolean
}

export const SidebarWidth = (props : SideBarProps) => props.extend ? '5rem' : '15rem';

export const SideBarContainer = styled.aside<SideBarProps>`
    width: ${SidebarWidth};
    height: 100%;
    padding: 1rem;

    position: fixed;
    
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    box-shadow: -1px 0 32px 6px rgba(0,0,0,1);

    background-color: ${props => props.theme["blue-700"]};
    
    transition: 0.75s;
    nav{
        display: flex;
        gap: 2rem;
        flex-direction: column;
        justify-content: center;
        align-items: start;
    }
`

export const SideBarHeader = styled.header<SideBarProps>`
    gap: 10px;
    width: 100%;
    overflow: hidden;
    
    img{
        width: 12.5rem;
        height: auto;
        object-fit: ${(props) => (props.extend ? 'cover' : 'contain')}; /* Ajusta a imagem para se comportar corretamente em ambos os estados */

        &:hover{
            cursor: pointer;
        }
    }
`

export const MenuItem = styled.ul`
    list-style: none;
    padding-left: 0.5rem;
    display: flex;
    gap: 4rem;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`