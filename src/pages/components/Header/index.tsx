import { AlignJustify } from "lucide-react";
import { HeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";

interface headerProps{
    children: string,
}

const Header = ({ children }: headerProps) => {
  return (
    <HeaderContainer>
      <NavLink to="/menu" title="Menu">
        <AlignJustify size={40}/>
      </NavLink>
      <h1>{children}</h1>
      <span></span>
    </HeaderContainer>
  );
};

export default Header;
