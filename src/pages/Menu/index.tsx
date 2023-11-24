import { NavLink, useNavigate} from "react-router-dom";
import { MenuContainer } from "./styles";
import { AutenticacaoContext } from "../../context/Auth/AuthContext"
import { useContext } from "react"

const Menu = () => {
  const navigate = useNavigate()
  const { signout } = useContext(AutenticacaoContext)

  async function handleLogoutUser() {
    await signout()
    navigate("/")
  }

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
        <button onClick={handleLogoutUser}>SAIR</button>
      </nav>
    </MenuContainer>
  );
};

export default Menu;
