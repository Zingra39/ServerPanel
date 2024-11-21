import styled from "styled-components";

export const Container = styled.div`
    flex-grow: 1;
    padding: 1rem 4rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1{
        color: ${(props) => props.theme["blue-700"]};
        font-weight: 500;
        letter-spacing: 0.25rem;
        font-size: 3rem;
    }
`;

export const FilterContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1rem;
    margin-bottom: 1rem;
    padding-right: 1rem;

    label{
        position: relative;

        span{
            position: absolute;
            left: 0;
            top: 0;
            padding: 0rem 1rem;
            margin: 0.55rem 1rem;
            background: pink;
            white-space: nowrap;
            transform: translate(0, 0);
            transform-origin: 0 0;
            background: ${(props) => props.theme['white']};
            transition: transform 120ms ease-in;
            line-height: 1.2;
        }

        input{
            box-sizing: border-box;
            display: block;
            width: 20rem;
            border: 2px solid ${(props) => props.theme['gray-300']};
            padding: 0.5rem;
            color: ${(props) => props.theme['blue-300']};
            background: transparent;
            border-radius: 4px;
            
            &:focus,
            &:not(:placeholder-shown) {
            & ~ span {
                transform: translate(.1rem, -89%) scale(.8);
                color: ${(props) => props.theme['orange-500']};
            }
            }
        }
    }

    select{
        appearance: none;
        border: 0;
        outline: 0;
        font: inherit;

        width: 20rem;
        padding: 0.47rem 1.5rem;
        background: no-repeat right 0.8em center / 1.4em, linear-gradient(to left, ${(props) => props.theme['orange-600']} 3em, ${(props) => props.theme['white']} 3em);
        
        border: 2px solid ${(props) => props.theme['gray-300']};
        border-radius: 4px;
        cursor: pointer;

        option{
            color: ${(props) => props.theme['gray-600']};
            background-color: ${(props) => props.theme['white']};
        }
    }
`;

export const Gallery = styled.table`
    text-align: center;
    overflow:hidden;
    border-collapse:separate;

    border: 1px solid ${(props) => props.theme['gray-100']};
    
    -webkit-border-radius: 25px;
       -moz-border-radius: 25px;
            border-radius: 25px;

    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    th{
        color: ${(props) => props.theme['white']};
        background-color: ${(props) => props.theme['blue-700']};
        font-weight: normal;
        text-align: center;
        padding: 10px;
        font-size: 1.5rem;
    }
    
    td{
        color: ${(props) => props.theme['gray-600']};
        background-color: ${(props) => props.theme['gray-200']};
        border-bottom: 1px solid ${(props) => props.theme['gray-300']};
        padding: 15px;
    }
`;

export const Active = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 999999px;
    background-color: green;
`;

export const Inactive = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 999999px;
    background-color: red;
`;