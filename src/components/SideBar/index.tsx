import React, { useContext } from 'react';
import LogoFast from '../../assets/Grupo-9@2x-1 (1).png'
import { SideBarContext} from '../../context/SideBarContext';

import { 
    MenuItem,
    SideBarContainer, 
    SideBarHeader
} from "./styles";


interface SideBarProps{
    children: React.ReactNode;
}

export function SideBar({children}: SideBarProps){
    
    const {extend, toggleSidebar} = useContext(SideBarContext)

    return(
        <SideBarContainer extend={extend}>
            <nav>
                <SideBarHeader extend={extend}>
                    <img src={LogoFast} onClick={toggleSidebar}/>
                </SideBarHeader>
                <MenuItem>
                    {children}
                </MenuItem>
            </nav>
        </SideBarContainer>
    )
}