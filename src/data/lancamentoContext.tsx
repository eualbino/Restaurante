import { api } from "../lib/axios";


//Não foi terminado pela parte do back!

interface CreateLancamento {
	filter(arg0: (lancamento: CreateLancamento) => boolean): unknown;
	itemPedido: [
		item: {
			id: number;
			nome: string;
			preco: number;
			tipo: string;
			litragem: string;
			tamanho: string;
		},
		acrescimos: [
			{
				id: number;
			},
		],
		observacoes: string,
		quantidade: number,
	];
	lancamento: {
		garcom: {
			id: number | null;
		};
		pedido: {
			numeroMesa: number;
		};
	};
}

export async function lancamentoGet(id: string) {
	const response = await api.get<CreateLancamento[]>(`/lancamento/${id}`);
	return response.data;
}

export async function createLancamento(lancamento: CreateLancamento) {
	await api.post("/lancamentoController", lancamento);
}

export async function deleteLancamento(id: number) {
	await api.delete(`/lancamento/${id}`);
}
