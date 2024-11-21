import { Eye, User, EyeClosed } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { 
    LoginContainer, 
    FormContainer,
    LoginInput,
    WelcomeContainer,
    LogoContainer,
    LoginButton
} from './styles'
import { useState } from 'react'


interface User{
    name: string,
    password: string
}

const authFormSchema = zod.object({
    name: zod.string().min(1, "Inform o nome do usuário"),
    password: zod.string().min(1,"Informe a senha")
})

type authFormData = zod.infer<typeof authFormSchema>


export function Login(){
    const [showSenha, setShowSenha] = useState(false);
    const navigate = useNavigate()

    const authForm = useForm<authFormData>({
        resolver: zodResolver(authFormSchema) 
    })

    const { register, handleSubmit } = authForm

    function handleAuthenticateUser(data: authFormData) {
        if (data.name !== "suporte" || data.password !== "12!@asSA") {
            alert(data.name)
        } else {
            navigate('/home');
        }
    }

    function handleToggleSenha(){
        setShowSenha(!showSenha);
    }

    return(
        <LoginContainer>
            <LogoContainer>
                <img src="https://fastcompany.com.br/imgemail/logo.png"/>
            </LogoContainer>
            <form>
                <WelcomeContainer>
                    <h3>Seja,</h3>
                    <h2>Bem Vindo</h2>
                </WelcomeContainer>
                <FormContainer>
                    <LoginInput htmlFor='name'>
                        <User size={16}/>
                        <input 
                            id="name"
                            type='text'
                            placeholder='Usuário'
                            required
                            {...register('name')} 
                        />
                    </LoginInput>
                    <LoginInput htmlFor='password'>
                        <button onMouseDown={handleToggleSenha}>
                            {showSenha ? <Eye size={16}/> : <EyeClosed size={16}/>}
                        </button>
                        <input 
                            type={showSenha === false ? 'password' : 'text'}
                            id='password'
                            placeholder='Senha'
                            required
                            {...register('password')} 
                        />
                    </LoginInput>
                </FormContainer>
                <LoginButton onClick={handleSubmit(handleAuthenticateUser)}>
                    Entrar
                </LoginButton>
            </form>
        </LoginContainer>
    )
}