import { styled } from "styled-components";

export const MesasContainer = styled.main`
`

export const MessasAcessiveis = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 2rem;
max-width: 1280px;
margin: 0 auto;
    div{
        display: block;
        text-align: center;
        align-items: center;
        border: 1px solid ${props => props.theme["purple-500"]};
        border-radius: 8px;
        margin-top: 2rem;
        

        h2{
            margin-top: 0.1rem;
        }
        button{
            margin-top: 0.3rem;
            margin-bottom: 0.8rem;
        }
    }
`