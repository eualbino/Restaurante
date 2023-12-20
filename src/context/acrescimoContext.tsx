import {
	ReactNode,
	createContext,
	useEffect,
	useState,
	memo,
	useCallback,
} from "react";
import { api } from "../lib/axios";

interface Acrescimo {
	id: number;
	item: string;
	valor: number;
}

interface CreateAcrescimoInput {
	item: string;
	valor: number;
}

interface AcrescimoContextType {
	acrescimos: Acrescimo[];
	createAcrescimo: (data: CreateAcrescimoInput) => Promise<void>;
	deleteAcrescimo: (id: number) => Promise<void>;
	editAcrescimo: (id: number, data: CreateAcrescimoInput) => Promise<void>;
}

interface AcrescimoProviderProps {
	children: ReactNode;
}

export const AcrescimosContext = createContext({} as AcrescimoContextType);

const AcrescimosProvider: React.FC<AcrescimoProviderProps> = memo(
	({ children }) => {
		const [acrescimos, setAcrescimos] = useState<Acrescimo[]>([]);

		const acrescimoGet = useCallback(async () => {
			const response = await api.get("/acrescimo/acrescimos");
			setAcrescimos(response.data);
		}, []);

		const createAcrescimo = useCallback(
			async (data: CreateAcrescimoInput) => {
				const { item, valor } = data;
				await api.post("/acrescimo", {
					item,
					valor,
				});
				await acrescimoGet();
			},
			[acrescimoGet],
		);

		const deleteAcrescimo = useCallback(
			async (id: number) => {
				await api.delete(`/acrescimo/${id}`);
				setAcrescimos(acrescimos.filter((acrescimo) => acrescimo.id !== id));
			},
			[acrescimos],
		);

		const editAcrescimo = useCallback(
			async (id: number, data: CreateAcrescimoInput) => {
				const { item, valor } = data;
				await api.put(`/acrescimo/${id}`, {
					item,
					valor,
				});
				await acrescimoGet();
			},
			[acrescimoGet],
		);

		useEffect(() => {
			acrescimoGet();
		}, [acrescimoGet]);

		return (
			<AcrescimosContext.Provider
				value={{ acrescimos, createAcrescimo, deleteAcrescimo, editAcrescimo }}
			>
				{children}
			</AcrescimosContext.Provider>
		);
	},
);

export default AcrescimosProvider;
