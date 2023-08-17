import { NavLink } from "react-router-dom";
import { MenuContainer } from "./styles";

const Menu = () => {
  return (
    <MenuContainer>
      <NavLink to="/mesas">
        <a>MESAS</a>
      </NavLink>
      <NavLink to="/lanchesMenu">
        <a>MENU</a>
      </NavLink>
      <NavLink to="/lancheAdicionar">
        <a>CONFIGURAÇÕES DO MENU</a>
      </NavLink>
      <NavLink to="/funcionarioAdicionar">
        <a>CONFIGURAÇÕES DE FUNCIONÁRIOS</a>
      </NavLink>
      <NavLink to="/mesaAdicionarDeletar">
        <a>CONFIGURAÇÕES DE MESAS</a>
      </NavLink>
      <NavLink to="/">
        <a>SAIR</a>
      </NavLink>
    </MenuContainer>
  );
};

export default Menu;
