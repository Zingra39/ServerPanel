import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { SideBar } from '../../components/SideBar'
import { SideBarItem } from '../../components/SideBarItem'

import { useContext } from 'react'
import { SideBarContext } from '../../context/SideBarContext'

import { ContentContainer, Container} from './styles'

import { 
    House,
    SignOut,
    User,
    Envelope,
} from 'phosphor-react'



export function DefaultLayout(){
    const { extend } = useContext(SideBarContext)
    const navigate = useNavigate()


    return(
        <Container>
            <SideBar>
                <SideBarItem path='/home' icon={ <House/> } item='Home'/>
                <SideBarItem path='/home/clientes' icon={ <User/> } item='Clientes'/>
                <SideBarItem path='/home/clientes' icon={ <Envelope/> } item='Email'/>
            </SideBar>
            <ContentContainer SideBarExtend={extend}>
                <header>
                    <SignOut style={{cursor:'pointer'}} onClick={() => navigate('/')}/>
                </header>
                <Outlet />
            </ContentContainer>
        </Container>
    )
}