import { useContext, useEffect, useState } from "react";
import { AutenticacaoContext } from "../AuthContext";
import { api } from "../../../lib/axios";
import Menu from "../../../pages/Menu";

const AdminAuthority = ({ children }: { children: JSX.Element }) => {
	const { user } = useContext(AutenticacaoContext);
	const [isAdmin, setIsAdmin] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			const response = await api.get("/pessoa/pessoas");
			const pessoas = response.data;
			const pessoa = pessoas.find((p: any) => p.usuario === user?.usuario);
			if (pessoa) {
				const { id } = pessoa;
				const responseId = await api.get(`pessoa/${id}`);
				const authorities = responseId.data.authorities;
				const hasAdminAuthority = authorities.some(
					(auth: any) => auth.authority === "FUNCAO_ADMIN",
				);

				setIsAdmin(hasAdminAuthority);
			}
		};
		fetchData();
	}, [user]);

	if (!isAdmin) {
		return <Menu />;
	} else {
		return children;
	}
};

export default AdminAuthority;
