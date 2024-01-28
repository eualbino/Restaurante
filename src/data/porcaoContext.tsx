import { api } from "../lib/axios";

interface GetPorcaoSchema {
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

export async function porcaoGet() {
	const response = await api.get<GetPorcaoSchema[]>("/menu/porcoes");
	return response.data;
}

export async function porcaoGetId(id: string) {
	const response = await api.get<GetPorcaoSchema>(`/menu/porcao/${id}`);
	return response.data;
}

export async function createPorcao(data: CreatePorcaoInput) {
	await api.post("/menu/porcao", data);
}

export async function deletePorcao(id: number) {
	await api.delete(`/menu/porcao/${id}`);
}

export async function editPorcao(id: string, data: CreatePorcaoInput) {
	await api.put(`/menu/porcao/${id}`, data);
}
