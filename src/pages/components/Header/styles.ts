import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  a {
    text-decoration: none;
    color: ${props => props.theme.white};
    margin-left: 8rem;
  }
  h1 {
    margin-right: 10.5rem;
    font-size: 2.6rem;
  }
`;
