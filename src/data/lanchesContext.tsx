import { api } from "../lib/axios";

interface GetLancheInput {
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

export async function lancheGet() {
  const response = await api.get<GetLancheInput[]>("/menu/lanches");
  return response.data;
}

export async function lancheGetId(id: string) {
  const response = await api.get<GetLancheInput>(`/menu/lanche/${id}`);
  return response.data;
}

export async function createLanche(data: CreateLancheInput) {
  await api.post("/menu/lanche", data);
}

export async function deleteLanche(id: number) {
  await api.delete(`/menu/lanche/${id}`);
}

export async function editLanche(id: string, data: CreateLancheInput) {
  await api.put(`/menu/lanche/${id}`, data);
}
