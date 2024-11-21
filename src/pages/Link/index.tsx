import * as Dialog from "@radix-ui/react-dialog";
import { NewLinkModal } from "./components/NewLinkModal";
 
import { 
    LinkContainer,
    NewLinkButton,
    ButtonContainer
} from "./styles";
import { useNavigate } from "react-router-dom";

export function Link(){

    const navigate = useNavigate()

    function navigatePage(){
        navigate('/home/link/addmultipleslinks');
    }

    return(
        <LinkContainer>
            <h1>Link Area</h1>
            <ButtonContainer>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewLinkButton varinat="primary">Inserir Link</NewLinkButton>
                    </Dialog.Trigger>
                    <NewLinkModal />
                </Dialog.Root>

                <NewLinkButton varinat="secondary" onClick={navigatePage}>
                    Inserir em Massa
                </NewLinkButton>
            </ButtonContainer>

        </LinkContainer>
    )
}