import React, { useContext } from "react";
import { Link, NavLink } from "./styles";
import { SideBarContext } from "../../context/SideBarContext";

interface SideBarItemProps {
    icon: React.ReactNode,
    item: string,
    path: string
}

export function SideBarItem({icon, item, path}:SideBarItemProps){
    const { extend } = useContext(SideBarContext)

    return(
        <li>
            <NavLink to={path} title={extend ? item : ""}>
                <span>{icon}</span>
                <Link extend={extend}>{item}</Link>
            </NavLink>
        </li>
    )
}