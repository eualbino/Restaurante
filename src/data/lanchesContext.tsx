import { ReactNode, createContext, useState, memo } from "react";
import { api } from "../lib/axios";

interface Lanche {
	id: number;
	nome: string;
	preco: number;
	ingredientes: string;
}

interface CreateLancheInput {
	nome: string;
	preco: number;
	ingredientes: string;
}

interface LancheContextType {
	lanches: Lanche[];
	createLanche: (data: CreateLancheInput) => Promise<void>;
	deleteLanche: (id: number) => Promise<void>;
	editLanche: (id: number, data: CreateLancheInput) => Promise<void>;
}

interface LanchesProviderProps {
	children: ReactNode;
}

export const LanchesContext = createContext({} as LancheContextType);

const LanchesProvider: React.FC<LanchesProviderProps> = memo(
	({ children }) => {
		const [lanches, setLanches] = useState<Lanche[]>([]);

		const lancheGet = async () => {
			const response = await api.get("/menu/lanches");
			setLanches(response.data);
		};

		const createLanche = async (data: CreateLancheInput) => {
			const { nome, preco, ingredientes } = data;

			await api.post("/menu/lanche", {
				nome,
				preco,
				ingredientes,
			});
			await lancheGet();
		};

		const deleteLanche = async (id: number) => {
			await api.delete(`/menu/lanche/${id}`);
			setLanches(lanches.filter((lanches) => lanches.id !== id));
		};

		const editLanche = async (id: number, data: CreateLancheInput) => {
			const { nome, preco, ingredientes } = data;

			await api.put(`/menu/lanche/${id}`, {
				nome,
				preco,
				ingredientes,
			});

			await lancheGet();
		};

		return (
			<LanchesContext.Provider
				value={{ lanches, createLanche, deleteLanche, editLanche }}
			>
				{children}
			</LanchesContext.Provider>
		);
	},
);

export default LanchesProvider;
