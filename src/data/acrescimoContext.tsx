import { api } from "../lib/axios";

interface GetAcrescimoInput {
  id: number;
  item: string;
  valor: number;
}

interface CreateAcrescimoInput {
  item: string;
  valor: number;
}

export async function acrescimoGet() {
  const response = await api.get<GetAcrescimoInput[]>("/acrescimo/acrescimos");
  return response.data;
}

export async function acrescimoGetId(id: string) {
  const response = await api.get<GetAcrescimoInput>(`/acrescimo/${id}`);
  return response.data;
}

export async function createAcrescimo(data: CreateAcrescimoInput) {
  await api.post("/acrescimo", data);
}

export async function deleteAcrescimo(id: number) {
  await api.delete(`/acrescimo/${id}`);
}

export async function editAcrescimo(id: string, data: CreateAcrescimoInput) {
  await api.put(`/acrescimo/${id}`, data);
}
