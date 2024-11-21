import { PlusCircle } from "phosphor-react"
import EmptyLogo from "../../assets/empty-box.png"
import { 
    EmptyListContainer,
    NavLink 
} from "./styles";

interface EmptyListProps{
    path: string
}

export function EmptyList({path}: EmptyListProps){
    return(
        <EmptyListContainer>
            <img src={EmptyLogo} />
            <h2>Lista Vazia</h2>
            <p>comece a preencher sua lista</p>
            <NavLink to={path}>
                Adicionar 
                <PlusCircle/>
            </NavLink>
        </EmptyListContainer>
    )
}