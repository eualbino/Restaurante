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
						<button type="button">Lanches</button>
					</NavLink>
					<NavLink to="/bebidaAdicionar" title="Adicionar Bebidas">
						<button type="button">Bebidas</button>
					</NavLink>
					<NavLink to="/porcaoAdicionar" title="Adicionar Bebidas">
						<button type="button">Porções</button>
					</NavLink>
					<NavLink to="/acrescimoAdicionar" title="Adicionar Acrescimo">
						<button type="button">Acréscimo</button>
					</NavLink>
				</nav>
			</SelectOptionsAdicionarEditarContain>
		</SelectOptionsAdicionarEditarContainer>
	);
};

export default SelectOptionsAdicionar;
