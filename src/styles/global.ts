import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body, input, text-area, button{
        font-family: 'Roboto', sans-serif;
    }

    &:focus{
        outline: none;
        border: 0;
    }
`