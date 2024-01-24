import React, {
	ReactNode,
	createContext,
	memo,
	useCallback,
	useState,
} from "react";
import { api } from "../../lib/axios";
import axios, { AxiosError } from "axios";

interface User {
	usuario: string;
	senha: string;
}

interface AutenticacaoContextType {
	user: User | null;
	signin: (data: User) => Promise<boolean>;
	signout: () => void;
	errorMenssage: string | null;
}

interface AutenticacaoProviderProps {
	children: ReactNode;
}

export const AutenticacaoContext = createContext({} as AutenticacaoContextType);

const AutenticacaoProvider: React.FC<AutenticacaoProviderProps> = memo(
	({ children }) => {
		const [user, setUser] = useState<User | null>(null);
		const [errorMenssage, setErrorMenssage] = useState<string | null>(null);

		const signin = useCallback(async (data: User): Promise<boolean> => {
			const { usuario, senha } = data;
			try {
				const response = await api.post("/auth/login", { usuario, senha });
				const token = response.data;
				if (token) {
					setToken(token);
					setUser(data);
					axios.defaults.headers.common.Authorization = `Bearer ${token}`;
					setErrorMenssage(null);
					return true;
				}
				return false;
			} catch (error: unknown) {
				if (error instanceof AxiosError) {
					if (error.response && error.response.status === 403) {
						setErrorMenssage("A senha ou usuário está incorreto");
					}
				}
				return false;
			}
		}, []);

		const signout = useCallback(async () => {
			localStorage.removeItem("authToken");
			axios.defaults.headers.common.Authorization = undefined;
			setUser(null);
		}, []);

		const setToken = (token: string) => {
			localStorage.setItem("authToken", token);
		};

		return (
			<AutenticacaoContext.Provider
				value={{ user, signin, errorMenssage, signout }}
			>
				{children}
			</AutenticacaoContext.Provider>
		);
	},
);

export default AutenticacaoProvider;
