import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  
  a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
  }
  
  a:nth-child(1){
     margin-left: 5rem;
  }
  
  button {
    color: ${(props) => props.theme.white};
    margin-left: 5rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  h1 {
    margin-right: 7.5rem;
    font-size: 2.6rem;
  }
`;

export const HeaderMenuContain = styled.div`
  display: flex;
  margin-right: 12.9rem;
  margin-top: 1rem;

  nav{
    display: flex;
  }

  a {
    border: 3px solid ${(props) => props.theme["purple-500"]};

    button {
      margin: 0px;
      justify-content: center;
      cursor: pointer;
      padding: 0.55rem;
      font-size: 25px;

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

    &.active span{
      color: ${(props) => props.theme["green-500"]};
    }
  }
`;
