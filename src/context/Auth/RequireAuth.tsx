import { useContext } from "react";
import { AutenticacaoContext } from "./AuthContext";
import Login from "../../pages/Login";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
	const { user } = useContext(AutenticacaoContext);
	if (!user) {
		return <Login />;
	}
	return children;
};

export default RequireAuth;
