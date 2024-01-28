import { api } from "../lib/axios";

interface GetBebidasSchema {
	id: number;
	nome: string;
	litragem: string;
	preco: number;
}

interface CreateBebidaInput {
	nome: string;
	litragem: string;
	preco: number;
}

export async function bebidaGet() {
	const response = await api.get<GetBebidasSchema[]>("/menu/bebidas");
	return response.data;
}

export async function bebidaGetId(id: string) {
	const response = await api.get<GetBebidasSchema>(`/menu/bebida/${id}`);
	return response.data;
}

export async function createBebida(data: CreateBebidaInput) {
	await api.post("/menu/bebida", data);
}

export async function deleteBebida(id: number) {
	await api.delete(`/menu/bebida/${id}`);
}

export async function editBebida(id: string, data: CreateBebidaInput) {
	await api.put(`/menu/bebida/${id}`, data);
}
