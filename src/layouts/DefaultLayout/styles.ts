import styled from "styled-components";

interface ContentContainerProps {
    SideBarExtend: boolean;
}

export const Container = styled.div`
    display:flex;
`;

export const ContentContainer = styled.div<ContentContainerProps>`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    margin-left: ${(props) => props.SideBarExtend ? '5rem' : '15rem'};
    transition: 0.75s;

    header{

        width: 100%;
        height: 1rem;
        padding: 2rem 4rem;

        display: flex;
        align-items: center;
        justify-content: end;

        font-size: 2rem;
        color: ${(props) => props.theme["blue-700"]};
    }
`
