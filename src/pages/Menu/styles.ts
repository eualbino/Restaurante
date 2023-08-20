import { styled } from "styled-components";

export const MenuContainer = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  nav{
    display: flex;
    flex-direction: column;
  }
  a{
    text-align: center;
    font-size: 3.2rem;
    font-weight: bold;
    padding: 0.15rem 0rem;
    text-decoration: none;
    color: ${props => props.theme.white};
    cursor: pointer;
  }
  a:hover{
    color: ${props => props.theme["green-300"]};
    transition: 0.5s;
  }
`;
