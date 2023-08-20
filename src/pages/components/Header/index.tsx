import { AlignJustify } from "lucide-react";
import { HeaderContainer } from "./styles";

interface headerProps{
    children: string,
}

const Header = ({ children }: headerProps) => {
  return (
    <HeaderContainer>
      <span>
        <AlignJustify size={40}/>
      </span>
      <h1>{children}</h1>
     <span></span>
    </HeaderContainer>
  );
};

export default Header;
