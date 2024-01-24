import { NavLink, useNavigate } from "react-router-dom";
import { MenuContainer } from "./styles";
import { useContext, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { AutenticacaoContext } from "../../data/Auth/AuthContext";

interface Usuario {
	usuario: string;
	authority: "FUNCAO_ADMIN" | "FUNCAO_GARCOM" | "FUNCAO_ATENDENTECAIXA";
}

const Menu = () => {
	const navigate = useNavigate();
	const { signout, user } = useContext(AutenticacaoContext);
	const [isAdmin, setIsAdmin] = useState<null | boolean>(null);

	async function handleLogoutUser() {
		await signout();
		navigate("/");
	}

	useEffect(() => {
		const fetchData = async () => {
			const response = await api.get("/pessoa/pessoas");
			const pessoas = response.data;
			const pessoa = pessoas.find((p: Usuario) => p.usuario === user?.usuario);
			if (pessoa) {
				const { id } = pessoa;
				const responseId = await api.get(`pessoa/${id}`);
				const authorities = responseId.data.authorities;
				const hasAdminAuthority = authorities.some(
					(auth: Usuario) => auth.authority === "FUNCAO_ADMIN",
				);
				setIsAdmin(hasAdminAuthority);
			}
		};
		fetchData();
	}, [user]);

	if (isAdmin === null) {
		return null;
	}
	return (
		<MenuContainer>
			{isAdmin ? (
				<nav>
					<NavLink to="/mesas">MESAS</NavLink>
					<NavLink to="/lanchesMenu">MENU</NavLink>
					<NavLink to="/lancheAdicionar">CONFIGURAÇÕES DO MENU</NavLink>
					<NavLink to="/funcionarioAdicionar">
						CONFIGURAÇÕES DE FUNCIONÁRIOS
					</NavLink>
					<NavLink to="/mesaAdicionarDeletar">CONFIGURAÇÕES DE MESAS</NavLink>
					<button type="submit" onClick={handleLogoutUser}>
						SAIR
					</button>
				</nav>
			) : (
				<nav>
					<NavLink to="/mesas">MESAS</NavLink>
					<NavLink to="/lanchesMenu">MENU</NavLink>
					<button type="submit" onClick={handleLogoutUser}>
						SAIR
					</button>
				</nav>
			)}
		</MenuContainer>
	);
};

export default Menu;
