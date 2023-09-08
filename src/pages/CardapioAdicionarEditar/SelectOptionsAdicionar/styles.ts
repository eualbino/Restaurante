import styled from "styled-components";

export const SelectOptionsAdicionarEditarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const SelectOptionsAdicionarEditarContain = styled.div`
  nav {
    display: flex;
  }
  a {
    border: 3px solid ${(props) => props.theme["purple-500"]};

    button {
      cursor: pointer;
      padding: 0.55rem;
      font-size: 25px;
      color: ${(props) => props.theme.white};
      border: none;
      background-color: transparent;

      &:hover {
        color: ${(props) => props.theme["green-300"]};
      }
    }

    &:first-child {
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
    }

    &:last-child {
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
    }

    &.active button{
      color: ${(props) => props.theme["green-500"]};
    }
  }
`;
