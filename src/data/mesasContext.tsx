import { api } from "../lib/axios";

interface Mesa {
	numeroMesa: number;
}

export async function mesaGet() {
	const response = await api.get<Mesa[]>("/mesa/mesas");
	return response.data;
}

export async function createMesa({ numeroMesa }: Mesa) {
	await api.post("/mesa", {
		numeroMesa,
	});
}

export async function deleteMesa(numeroMesa: number) {
	await api.delete(`/mesa/${numeroMesa}`);
}
