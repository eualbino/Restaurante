import { styled } from "styled-components";

export const PorcoesMenuContainer = styled.div`
  padding-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 8rem;
  row-gap: 2rem;
  margin: 0 auto;
  width: 65rem;
  button {
    all: initial;
    all: unset;
    cursor: pointer;
  }
`;

export const MainDivPorcoes = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid ${(props) => props.theme["purple-500"]};
  border-radius: 12px;
  justify-content: space-between;
  height: 9.3rem;
  button {
    all: initial;
    all: unset;
    cursor: pointer;
  }
`;

export const TitlePorcoes = styled.div`
  margin-left: 0.5rem;
  margin-top: 0.3rem;
  font-size: 22px;
  font-weight: bold;
`;

export const TextPorcoes = styled.div`
  margin-left: 0.5rem;
  font-size: 15px;
  padding: 0.3rem;
`;

export const PricePorcoes = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: right;
  margin-right: 0.4rem;
  padding-bottom: 3px;
  color: ${(props) => props.theme["green-300"]};
`;
