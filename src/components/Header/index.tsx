import { AlignJustify, ArrowLeft } from "lucide-react";
import { HeaderContainer, HeaderMenuContain } from "./styles";
import { NavLink, useLocation } from "react-router-dom";

interface headerProps {
  children?: string;
  childrenLanche: string;
  childrenPorcao: string;
  childrenBebida: string;
  location?: typeof useLocation;
}

const Header = ({ children, childrenLanche, childrenBebida, childrenPorcao }: headerProps) => {
  function backPagePrevious() {
    window.history.back();
  }
  return (
    <HeaderContainer>
      {location.pathname === "/mesas" ||
      location.pathname === "/pedidosMesas" ||
      location.pathname === "/mesaAdicionarDeletar" ||
      location.pathname === "/funcionarioAdicionar" ||
      location.pathname === "/lancheAdicionar" ||
      location.pathname === "/porcaoAdicionar" ||
      location.pathname === "/bebidaAdicionar" ||
      location.pathname === "/acrescimoAdicionar" ? (
        <NavLink to="/menu" title="Menu">
          <AlignJustify size={40} />
        </NavLink>
      ) : (
        <button onClick={backPagePrevious}>
          <ArrowLeft size={40} />
        </button>
      )}
      {location.pathname === "/lanchesMenu" ||
      location.pathname === "/bebidasMenu" ||
      location.pathname === "/porcoesMenu" ||
      location.pathname === "/lancheComprar" ||
      location.pathname === "/bebidaComprar" ||
      location.pathname === "/porcaoComprar" ? (
        <HeaderMenuContain>
          <nav>
            <NavLink to={childrenLanche} title="Menu de lanches">
              <button>
                <span>Lanches</span>
              </button>
            </NavLink>
            <NavLink to={childrenBebida} title="Menu de bebidas">
              <button>
                <span>Bebidas</span>
              </button>
            </NavLink>
            <NavLink to={childrenPorcao} title="Menu de porcoes">
              <button>
                <span>Porções</span>
              </button>
            </NavLink>
          </nav>
        </HeaderMenuContain>
      ) : (
        <h1>{children}</h1>
      )}

      <span></span>
    </HeaderContainer>
  );
};

export default Header;
