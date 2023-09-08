import { NavLink } from "react-router-dom";
import {
  SelectOptionsAdicionarEditarContain,
  SelectOptionsAdicionarEditarContainer,
} from "./styles";

const SelectOptionsAdicionar = () => {
  return (
    <SelectOptionsAdicionarEditarContainer>
      <SelectOptionsAdicionarEditarContain>
        <nav>
          <NavLink to="/lancheAdicionar" title="Adicionar lanches">
            <button>Lanches</button>
          </NavLink>
          <NavLink to="/bebidaAdicionar" title="Adicionar Bebidas">
            <button>Bebidas</button>
          </NavLink>
          <NavLink to="/porcaoAdicionar" title="Adicionar Bebidas">
            <button>Porções</button>
          </NavLink>
          <NavLink to="/acrescimoAdicionar" title="Adicionar Acrescimo">
            <button>Acréscimo</button>
          </NavLink>
        </nav>
      </SelectOptionsAdicionarEditarContain>
    </SelectOptionsAdicionarEditarContainer>
  );
};

export default SelectOptionsAdicionar;
