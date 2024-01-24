import { useContext, useEffect, useState } from "react";
import { AutenticacaoContext } from "../AuthContext";
import { api } from "../../../lib/axios";
import Menu from "../../../pages/Menu";

interface Usuario {
	usuario: string;
	authority: "FUNCAO_ADMIN" | "FUNCAO_GARCOM" | "FUNCAO_ATENDENTECAIXA";
}

const AdminAuthority = ({ children }: { children: JSX.Element }) => {
	const { user } = useContext(AutenticacaoContext);
	const [isAdmin, setIsAdmin] = useState(false);
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

	if (!isAdmin) {
		return <Menu />;
	}
	return children;
};

export default AdminAuthority;
