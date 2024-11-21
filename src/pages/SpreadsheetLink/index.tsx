import { useNavigate } from 'react-router-dom';
import { CloudArrowUp } from 'phosphor-react'

import { 
    Container,
    DropzoneContainer,
    DropzoneArea,
    DropzoneBox,
    DropzoneAction,
    DropzoneIcon,
    DropzoneButton
} from "./styles";

export function SpreadsheetLink(){

    const navigate = useNavigate();

    function navigatePage(){
        navigate('/home/link');
    }

    return(
        <Container>
            <h1>Adicionar Dados</h1>
            <DropzoneContainer>
                <DropzoneBox>
                    <h2>Upload de Dados</h2>
                    <p>Clique para fazer upload ou arraste a planilha</p>
                    <DropzoneArea>
                        <DropzoneIcon>
                            <CloudArrowUp />
                        </DropzoneIcon>
                        <input 
                            type="file"
                            id="upload"
                            name="uploaded"
                            accept=".xlsx" 
                        />
                        <p>Nenhum arquivo selecionado</p>
                    </DropzoneArea>
                    <DropzoneAction>
                        <div>
                            <DropzoneButton variant='reset' type="reset" onClick={navigatePage}>Cancelar</DropzoneButton>
                            <DropzoneButton variant='submit' type="submit">Salvar</DropzoneButton>
                        </div>
                    </DropzoneAction>
                </DropzoneBox>
            </DropzoneContainer>
        </Container>
    )
}