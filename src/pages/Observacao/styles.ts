import { styled } from "styled-components";

export const ObservationContainer = styled.div`
  display: flex;
  header {
    align-items: flex-start;
  }
`;

export const ObservationContain = styled.div`
  flex-wrap: wrap;
  margin-top: 2.8rem;
  border: 4px solid ${(props) => props.theme["green-300"]};
  border-radius: 10px;
  width: 80vw;
`;

export const SepareteObservationFromInsert = styled.div`
  display: flex;
`;

export const TextObservacao = styled.div`
  margin-left: 2.7rem;
  margin-top: 2rem;
  span {
    font-size: 30px;
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
`;

export const InsertedAddition = styled.div`
  margin-left: 16.5%;
  border: 3px solid ${(props) => props.theme["purple-500"]};
  border-radius: 12px;
  width: 25rem;
  height: 25rem;
  margin-top: 2rem;
`;

export const InsertAddition = styled.div`
  span {
    margin-top: 2.5rem;
    margin-left: 2.7rem;
    font-size: 30px;
  }
`;

export const ProductsInsert = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 auto;
  margin-top: 2rem;
  width: 75%;
  text-align: center;
  div {
    button {
      width: 17rem;
      height: 4rem;
      background: transparent;
      outline: none;
      cursor: pointer;
      border: 4px solid ${(props) => props.theme["purple-500"]};
      border-radius: 14px;
      font-size: 22px;
      color: ${props => props.theme.white};
      span {
        font-size: 22px;
        color: ${props => props.theme["green-300"]};
      }
    }
  }
`;
