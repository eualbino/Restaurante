import {
	ReactNode,
	createContext,
	memo,
	useCallback,
	useEffect,
	useState,
} from "react";
import { api } from "../lib/axios";

interface Porcao {
	id: number;
	tipo: string;
	preco: number;
	tamanho: string;
}

interface CreatePorcaoInput {
	tipo: string;
	preco: number;
	tamanho: string;
}

interface PorcaoContextType {
	porcoes: Porcao[];
	createPorcao: (data: CreatePorcaoInput) => Promise<void>;
	deletePorcao: (id: number) => Promise<void>;
	editPorcao: (id: number, data: CreatePorcaoInput) => Promise<void>;
}

interface PorcaoProviderProps {
	children: ReactNode;
}

export const PorcoesContext = createContext({} as PorcaoContextType);

const PorcaoProvider: React.FC<PorcaoProviderProps> = memo(({ children }) => {
	const [porcoes, setPorcoes] = useState<Porcao[]>([]);

	const porcaoGet = useCallback(async () => {
		const response = await api.get("/menu/porcoes");
		setPorcoes(response.data);
	}, []);

	const createPorcao = useCallback(
		async (data: CreatePorcaoInput) => {
			const { tipo, preco, tamanho } = data;
			await api.post("/menu/porcao", {
				tipo,
				preco,
				tamanho,
			});
			await porcaoGet();
		},
		[porcaoGet],
	);

	const deletePorcao = useCallback(
		async (id: number) => {
			await api.delete(`/menu/porcao/${id}`);
			setPorcoes(porcoes.filter((porcao) => porcao.id !== id));
		},
		[setPorcoes, porcoes],
	);

	const editPorcao = useCallback(
		async (id: number, data: CreatePorcaoInput) => {
			const { tipo, preco, tamanho } = data;
			await api.put(`/menu/porcao/${id}`, {
				tipo,
				preco,
				tamanho,
			});
			await porcaoGet();
		},
		[porcaoGet],
	);

	useEffect(() => {
		porcaoGet();
	}, [porcaoGet]);

	return (
		<PorcoesContext.Provider
			value={{ porcoes, createPorcao, deletePorcao, editPorcao }}
		>
			{children}
		</PorcoesContext.Provider>
	);
});

export default PorcaoProvider;
