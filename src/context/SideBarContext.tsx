import { createContext, ReactNode, useState } from "react"

interface SideBarsContext{
    extend: boolean,
    toggleSidebar: () => void
}

export const SideBarContext = createContext({} as SideBarsContext)

interface SideBarContextProviderProps{
    children: ReactNode
}

export function SideBarContextProvider({children}: SideBarContextProviderProps){

    const [extend, setExtend] = useState(true)

    function toggleSidebar(){
        setExtend((prev) => !prev);
    }

    return(
        <SideBarContext.Provider value={{ extend, toggleSidebar }}>
            {children}
        </SideBarContext.Provider>
    )
}