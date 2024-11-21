import { createContext, ReactNode, useEffect, useState } from "react"
import api from "../services/api";

interface Client{
    id: number;
    email: [];
    enabled: boolean;
    location: string;
    requester: string;
}

interface ClientContextType {
    clients: Client[];
    totalPages: number;
    paginate: (pageNumber: number) => void; 
    fetchClients: (name?: string) => Promise<void>;
}
  
export const ClientContext = createContext({} as ClientContextType);

interface ClientContextProviderProps {
    children: ReactNode;
}

export function ClientContextProvider({ children }: ClientContextProviderProps) {
    const [clients, setClients] = useState<Client[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [clientsPerPage] = useState(20);

    const indexOfLastClient = currentPage * clientsPerPage;
    const indexOfFirstClient = indexOfLastClient - clientsPerPage;
    const currentClients = clients.slice(indexOfFirstClient, indexOfLastClient);

    const totalPages = Math.ceil(clients.length / clientsPerPage);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    async function fetchClients(name?: string, status?: string) {

        const enable = status === 'true';

        console.log(enable)

        const response = await api.get('/requesters', {
            params: {
                q: name
            }
        })

        setClients(response.data);
    }

    useEffect(() => {
        fetchClients();
    }, []);

    return (
        <ClientContext.Provider
            value={{ clients: currentClients, totalPages, paginate, fetchClients }}
        >
            {children}
        </ClientContext.Provider>
    );
}
