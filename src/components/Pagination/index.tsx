import { useContext, useState } from "react";
import { ClientContext } from "../../context/ClientContetxt";
import { ButtonPagination, Container } from "./styles";

export function Pagination() {
    const { totalPages, paginate } = useContext(ClientContext);
    
    const [activieIndex, setActivieIndex] = useState<number | null>(0);

    function ChangePage(value: number){
        paginate(value + 1);

        setActivieIndex(value);
    }

    return (
        <Container>
            {[...Array(totalPages)].map((_, index) => (
                <ButtonPagination key={index} onClick={() => ChangePage(index)} activie={index === activieIndex}>
                    {index + 1}
                </ButtonPagination>
            ))}
        </Container>
    );
}
