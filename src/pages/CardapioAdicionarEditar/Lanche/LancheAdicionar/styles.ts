import styled from "styled-components";

export const LancheContain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 74vh;
  width: 99vw;
  gap: 10rem;
`;

export const AddLanche = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border: 4px solid ${(props) => props.theme["purple-500"]};
  border-radius: 12px;
  padding-top: 1rem;
  width: 400px;
  background: ${(props) => props.theme["blue-500"]};
  div {
    margin-right: 40px;
    margin-top: 1rem;
    span {
      font-size: 22px;
      margin-right: 0.7rem;
    }
    input {
      border: 3px solid ${(props) => props.theme["purple-500"]};
      border-radius: 10px;
      background: transparent;
      color: ${(props) => props.theme.white};
      width: 230px;
      height: 40px;
      outline: none;
      padding: 10px;
      &[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
    }
    textarea {
      border: 3px solid ${(props) => props.theme["purple-500"]};
      border-radius: 10px;
      background: transparent;
      font-size: 18px;
      margin-top: 0.75rem;
      padding: 10px 10px;
      color: ${(props) => props.theme.white};
      font-weight: bolder;
      outline: none;
    }
  }

  button {
    background: ${(props) => props.theme["purple-500"]};
    border: none;
    border-radius: 6px;
    margin: 1.5rem 5.55rem 2rem 0;
    height: 35px;
    color: ${(props) => props.theme.white};
    width: 210px;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 12px -5px ${(props) => props.theme["purple-500"]};
    }
  }
`;

export const IngredientesCreate = styled.div`
    margin-left: 3rem;
`

export const CreatedLancheContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CreatedLancheContain = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`;

export const CreatedLancheText = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 10px;
  border: 3px solid ${(props) => props.theme["purple-500"]};
  border-radius: 8px;
  width: 13rem;
  span {
    font-size: 20px;
  }
`;

export const CreatedLancheDelete = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  border: 3px solid ${(props) => props.theme["purple-500"]};
  margin-left: 1rem;
  button {
    cursor: pointer;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme["red-400"]};
    border: none;
    border-radius: 9999rem;
    height: 1.5rem;
    margin-top: 3px;
  }
`;

export const CreatedLancheEdit = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  border: 3px solid ${(props) => props.theme["purple-500"]};
  margin-left: 0.5rem;
  button {
    margin-top: 2px;
    border: none;
    background: transparent;
    svg {
      color: ${(props) => props.theme["red-400"]};
      &:hover {
        color: ${(props) => props.theme["green-300"]};
      }
    }
  }
`;
