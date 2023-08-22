import { styled } from "styled-components";

export const PedidosMesasContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 71rem;
  margin: 0 auto;
  margin-top: 3rem;
  h1 {
    font-size: 2rem;
  }
`;

export const PedidosMesaLanches = styled.div`
  text-align: center;
  border-right: 4px solid ${(props) => props.theme["purple-500"]};

  div {
    margin-top: 1.5rem;
    border: 2px solid ${(props) => props.theme["purple-500"]};
    border-radius: 8px;
    width: 19rem;
    margin-left: 2.2rem;
    margin-right: 2.2rem;
  }

  span {
    color: ${(props) => props.theme["green-300"]};
  }

  button {
    position: absolute;
    margin-left: 4rem;
    margin-top: -1rem;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme["red-400"]};
    border: none;
    border-radius: 9999rem;
    height: 1.5rem;
  }
`;

export const PedidosMesaBebidas = styled.div`
  text-align: center;
  border-right: 4px solid ${(props) => props.theme["purple-500"]};

  div {
    margin-top: 1.5rem;
    border: 2px solid ${(props) => props.theme["purple-500"]};
    border-radius: 8px;
    width: 19rem;
    margin-left: 2.2rem;
    margin-right: 2.2rem;
  }

  span {
    color: ${(props) => props.theme["green-300"]};
  }

  button {
    position: absolute;
    margin-left: 4rem;
    margin-top: -1rem;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme["red-400"]};
    border: none;
    border-radius: 9999rem;
    height: 1.5rem;
  }
`;

export const PedidosMesaPorcoes = styled.div`
  text-align: center;

  div {
    margin-top: 1.5rem;
    border: 2px solid ${(props) => props.theme["purple-500"]};
    border-radius: 8px;
    width: 19rem;
    margin-left: 2.2rem;
    margin-right: 2.2rem;
  }

  span {
    color: ${(props) => props.theme["green-300"]};
  }

  button {
    position: absolute;
    margin-left: 4rem;
    margin-top: -1rem;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme["red-400"]};
    border: none;
    border-radius: 9999rem;
    height: 1.5rem;
  }
`;

export const TotalAndButtonOptions = styled.div`
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.3rem;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 2.5rem;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme["purple-500"]};
    border: none;
    border-radius: 6px;
    gap: 0.5rem;
  }
`;

export const TotalPrice = styled.div`
  width: 60%;
  margin-top: -1rem;
  h2{
    float: right;
  }
  
`;
