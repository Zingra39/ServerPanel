import { useContext } from "react"
import { ClientContext } from "../../context/ClientContetxt";
import { Pagination } from "../../components/Pagination";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

import { 
    Active,
    Container, 
    FilterContainer, 
    Gallery,
    Inactive
} from "./style";


export function Clientes(){

    const newClientSchema = z.object({
        name: z.string().min(2).max(100),
        status: z.boolean().optional()
    });

    type SearchFormInput = z.infer<typeof newClientSchema>;

    const { clients, fetchClients } = useContext(ClientContext);

    const { 
        register,
        setValue
    } = useForm<SearchFormInput>({
        resolver: zodResolver(newClientSchema)
    });

    async function handleSearchClient(){
        await fetchClients()
    }

    return(
        <Container>
            <h1>Clientes</h1>

            <FilterContainer>
                <label>
                    <input 
                        type="text" 
                        id="filter"
                        placeholder="" 
                        {...register('name')}
                        onChange={e => fetchClients(e.target.value)}
                    />
                    <span>Cliente</span>
                </label>

                
                <select 
                    id="dropStatus" 
                    {...register('status')}
                >
                    <option value="">Todos</option>
                    <option value="true">Ativos</option>
                    <option value="false">Inativos</option>
                </select>
            </FilterContainer>

            <Gallery cellSpacing={0}>
                <tr>
                    <th>Cliente</th>
                    <th>Solicitante</th>
                    <th>E-mail</th>
                    <th/>
                </tr>
                {clients.map(client =>{
                    return(
                        <tr key={client.id}>
                            <td>{client.location}</td>
                            <td>{client.requester}</td>
                            <td>{client.email}</td>
                            <td>
                                {
                                    client.enabled ? 
                                    <Active/> : 
                                    <Inactive/>
                                }
                            </td>
                        </tr>
                    )
                })}
            </Gallery>

            <Pagination/>
        </Container>
    )
}