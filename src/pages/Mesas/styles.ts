import { styled } from "styled-components";

export const MessasContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  max-width: 71rem;
  margin: 0 auto;
  margin-top: 3rem;

  div {
    display: block;
    text-align: center;
    align-items: center;
    border: 2px solid ${(props) => props.theme["purple-500"]};
    border-radius: 8px;
    padding: 0.1rem;

    h2 {
      margin-top: 0.1rem;
    }

    button {
      margin-top: 0.3rem;
      margin-bottom: 0.8rem;
      border: none;
      font-size: 12px;
      padding: 0.4rem;
      border-radius: 5px;
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme["purple-500"]};
    }
  }
`;
