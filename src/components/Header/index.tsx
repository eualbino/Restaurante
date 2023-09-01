import { AlignJustify, ArrowLeft } from "lucide-react";
import { HeaderContainer } from "./styles";
import { NavLink, useLocation } from "react-router-dom";

interface headerProps{
    children?: string,
    location?: typeof useLocation;
}

const Header = ({ children }: headerProps) => {
  console.log(location.pathname)
  return (
    <HeaderContainer>
      {location.pathname === "/mesas" ? 
        <NavLink to="/menu" title="Menu">
          <AlignJustify size={40}/>
        </NavLink>  
       : 
        <NavLink to="/menu" title="Menu">
          <ArrowLeft size={40}/>
        </NavLink>}  
      
      <h1>{children}</h1>
      <span></span>
    </HeaderContainer>
  );
};

export default Header;
