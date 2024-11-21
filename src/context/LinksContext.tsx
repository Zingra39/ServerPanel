import { createContext, ReactNode, useState } from "react"

interface Links{
    client: string;
    provider: string;
    device: string;
    ip: string;
}

type LinkData = {
    client: string;
    provider: string;
    device: string;
    ip: string;
}

interface LinkContextType {
    links: Links[]
    createLink: (data: LinkData) => void
}

export const LinkContext = createContext({} as LinkContextType)

interface LinkContextProviderProps{
    children: ReactNode
}

export function LinkContextProvider({ children } : LinkContextProviderProps){

    const[links, setLinks] = useState<Links[]>([])

    function createLink(data: LinkData){
        const newLink: Links ={
            client: data.client,
            provider: data.provider,
            device: data.device,
            ip: data.ip
        }

        setLinks((state) => [...state, newLink])
    }

    return(
        <LinkContext.Provider
            value={{
                links,
                createLink
            }}
        >
         {children}
        </LinkContext.Provider>
    )
}