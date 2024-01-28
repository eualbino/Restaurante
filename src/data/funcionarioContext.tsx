import { api } from "../lib/axios";

interface FuncionarioGetSchema {
	id: number;
	nome: string;
	idade: number;
	funcao: "ADMIN" | "GARCOM" | "ATENDENTE";
	usuario: string;
	email: string;
	senha: string;
}

interface CreateFuncionarioInput {
	nome: string;
	idade: number;
	funcao: "ADMIN" | "GARCOM" | "ATENDENTE";
	usuario: string;
	email: string;
	senha: string;
}

export async function funcionarioGet() {
	const response = await api.get<FuncionarioGetSchema[]>("/pessoa/pessoas");
	return response.data;
}

export async function funcionarioGetId(id: string) {
	const response = await api.get<FuncionarioGetSchema>(`/pessoa/${id}`);
	return response.data;
}

export async function createFuncionario(data: CreateFuncionarioInput) {
	await api.post("/auth/register", data);
}

export async function deleteFuncionario(id: number) {
	await api.delete(`/pessoa/${id}`);
}

export async function editFuncionario(
	id: string,
	data: CreateFuncionarioInput,
) {
	await api.put(`/pessoa/${id}`, data);
}
