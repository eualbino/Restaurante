import { styled } from "styled-components";

export const EmployeeContain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 85vh;
  width: 100vw;
  gap: 10rem;
`;

export const AddEmployee = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border: 4px solid ${(props) => props.theme["purple-500"]};
  border-radius: 12px;
  padding-top: 1rem;
  width: 400px;
  background: ${(props) => props.theme["blue-500"]};
  div {
    margin-right: 18%;
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
      width: 170px;
      height: 40px;
      outline: none;
      padding: 10px;
      &[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
    }
    select{
      border: 3px solid ${(props) => props.theme["purple-500"]};
      border-radius: 10px;
      background: transparent;
      color: ${(props) => props.theme.white};
      width: 170px;
      height: 40px;
      outline: none;
      padding: 10px;
      font-size: 15px;
      option{
        font-size: 15px;
        background-color: ${(props) => props.theme["blue-700"]};
        border-color: ${(props) => props.theme["blue-700"]};
      }
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

export const CreatedEmployeesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CreatedEmployeesContain = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`;

export const CreatedEmployeesText = styled.div`
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

export const CreatedEmployeesDelete = styled.div`
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

export const CreatedEmployeesEdit = styled.div`
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
