import * as Dialog from "@radix-ui/react-dialog";
import { zodResolver } from '@hookform/resolvers/zod' //biblioteca que integra validação de formularios
import * as zod from 'zod' //bibliotecas de validação de formularios
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { LinkContext } from "../../../../context/LinksContext";

import { 
    ButtonContainer,
    ButtonModal,
    CloseButton,
    Content,
    Description,
    ModalHeader,
    Overlay, 
    TitleModal
} from "./styles";

const newLinkFormValidationSchema = zod.object({
    client: zod.string().min(1,"Informe o nome do equipamento"),
    provider: zod.string().min(1,"Informe o cliente do equipamento"),
    device: zod.string().min(1,"Informe a localização do equipamento"),
    ip: zod.string().ip("v4")
})

type NewLinkFormData = zod.infer<typeof newLinkFormValidationSchema>

export function NewLinkModal(){

    const { createLink } = useContext(LinkContext)

    const newLinkForm = useForm<NewLinkFormData>({
        resolver: zodResolver(newLinkFormValidationSchema)
    })

    const { watch, handleSubmit, register, reset} = newLinkForm

    const formDevice = watch(['client','provider','ip','device'])
    const isSubmitDisable = formDevice.includes("")

    function handleCreateLink(data: NewLinkFormData){
        createLink(data)
        reset()
    }

    return(
        <Dialog.Portal>
            <Overlay />

            <Content>
                <ModalHeader>
                    <div>
                        <TitleModal>Adicionar Monitoramento</TitleModal>
                        <Description>Insira informações do Link</Description>
                    </div>
                    <CloseButton>
                        X
                    </CloseButton>
                </ModalHeader>
                <form action="" method="post">
                    <label htmlFor="client">
                        <input 
                            type="text" 
                            id="client"
                            placeholder="Cliente" 
                            required
                            {...register('client')}
                        />
                    </label>
                    <label htmlFor="provider">
                        <input 
                            type="text" 
                            id="provider" 
                            placeholder="Provedor" 
                            required
                            {...register('provider')}
                        />
                    </label>
                    <label htmlFor="device">
                        <input 
                            type="text" 
                            id="device"
                            placeholder="Device" 
                            required
                            {...register('device')}
                        />
                    </label>
                    <label htmlFor="ip">
                        <input 
                            type="text" 
                            id="ip"
                            placeholder="IP" 
                            required
                            {...register('ip')}
                        />
                    </label>

                    <ButtonContainer>
                        <ButtonModal disabled={isSubmitDisable} type="submit" onClick={handleSubmit(handleCreateLink)}>
                            Salvar
                        </ButtonModal>
                    </ButtonContainer>
                </form>
            </Content>
        </Dialog.Portal>
    )
}