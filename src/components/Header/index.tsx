import { AlignJustify, ArrowLeft } from "lucide-react";
import { HeaderContainer, HeaderMenuContain } from "./styles";
import { NavLink, useLocation } from "react-router-dom";

interface headerProps {
  children?: string;
  location?: typeof useLocation;
}

const Header = ({ children }: headerProps) => {
  function backPagePrevious() {
    window.history.back()
  }
  return (
    <HeaderContainer>
      {location.pathname === "/mesas" ||
      location.pathname === "/pedidosMesas" ? (
        <NavLink to="/menu" title="Menu">
          <AlignJustify size={40} />
        </NavLink>
      ) : (
        <button onClick={backPagePrevious}>
          <ArrowLeft size={40} />
        </button>
      )}
      {location.pathname === "/lanchesMenu" || location.pathname === "/bebidasMenu" || location.pathname === "/porcoesMenu" ? 
      <HeaderMenuContain>
        <button>
          <span>Lanches</span>
        </button>
        <button>
          <span>Bebidas</span>
        </button>
        <button>
          <span>Porcoes</span>
        </button>
      </HeaderMenuContain>
      : 
      (<h1>{children}</h1>)}
      
      <span></span>
    </HeaderContainer>
    
  );
};

export default Header;
