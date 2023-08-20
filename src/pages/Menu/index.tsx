import { NavLink } from "react-router-dom";
import { MenuContainer } from "./styles";

const Menu = () => {
  return (
    <MenuContainer>
      <nav>
        <NavLink to="/mesas">MESAS</NavLink>
        <NavLink to="/lanchesMenu">MENU</NavLink>
        <NavLink to="/lancheAdicionar">CONFIGURAÇÕES DO MENU</NavLink>
        <NavLink to="/funcionarioAdicionar">
          CONFIGURAÇÕES DE FUNCIONÁRIOS
        </NavLink>
        <NavLink to="/mesaAdicionarDeletar">CONFIGURAÇÕES DE MESAS</NavLink>
        <NavLink to="/">SAIR</NavLink>
      </nav>
    </MenuContainer>
  );
};

export default Menu;
