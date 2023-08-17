import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: ${props => props.theme["blue-700"]};
        color: ${props => props.theme.white};
        -webkit-font-smoothing: antialiased;
    }
    body, input, button{
        font: 1rem Poppins, sans-serif;
    }
`