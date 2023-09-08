import { styled } from "styled-components";

export const TableSetupContain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 85vh;
  width: 100vw;
  gap: 10rem;   
`;

export const AddTable = styled.div`
  border: 4px solid ${(props) => props.theme["purple-500"]};
  border-radius: 12px;
  width: 400px;
  background: ${(props) => props.theme["blue-500"]};
  text-align: center;
  div {
    margin-top: 2.5rem;
    span {
      font-size: 22px;
    }
    input {
      border: 3px solid ${(props) => props.theme["purple-500"]};
      border-radius: 10px;
      background: transparent;
      color: ${(props) => props.theme.white};
      margin-left: 1rem;
      width: 170px;
      height: 40px;
      outline: none;
      padding: 10px;
    }
  }

  button {
    background: ${(props) => props.theme["purple-500"]};
    border: none;
    border-radius: 6px;
    margin-top: 1rem;
    margin-bottom: 2.5rem;
    height: 35px;
    color: ${(props) => props.theme.white};
    width: 308px;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 12px -5px ${(props) => props.theme["purple-500"]};
    }
  }
`;

export const CreatedTablesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CreatedTablesContain = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 1rem;
`;

export const CreatedTablesText = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 10px;
  border: 3px solid ${(props) => props.theme["purple-500"]};
  border-radius: 8px;
  width: 13rem;
  span{
    font-size: 20px;
  }
`;

export const CreatedTablesDelete = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  border: 3px solid ${(props) => props.theme["purple-500"]};
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
