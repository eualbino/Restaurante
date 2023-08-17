import styled from "styled-components";
import * as lucide from "lucide-react";

export const LoginContainer = styled.main`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: transparent;
`;

export const Content = styled.div`
  border-radius: 15px;
  padding: 2.5rem 3rem;
  border: 4px solid ${(props) => props.theme["purple-500"]};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  p {
    padding-bottom: 0.4rem;
    color: ${(props) => props.theme["purple-500"]};
  }

  p:nth-child(n + 2) {
    margin-top: 1rem;
  }

  button {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme["purple-500"]};
    border: none;
    border-radius: 10px;
    padding: 0.775rem 7.6rem;
    text-align: center;
    margin-top: 2rem;
    cursor: pointer;

    &:disabled{
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  div {
    position: relative;
    display: flex;
    align-items: center;
    

    input {
      color: white;
      background-color: transparent;
      border: 4px solid rgb(140, 82, 255, 0.5);
      border-radius: 12px;
      padding: 0.7rem 2.5rem 0.7rem 36px;
      width: 100%;
    }
    input:focus {
      outline: none;
    }
  }
`;

export const User2 = styled(lucide.User2)`
    margin-left: 1rem;
    position: absolute;
`;

export const Lock2 = styled(lucide.Lock)`
    margin-left: 1rem;
    position: absolute;
`
