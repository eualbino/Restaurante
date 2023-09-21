import { ReactNode, createContext, useEffect, useState } from "react";
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
  porcaoGet: () => Promise<void>;
  createPorcao: (data: CreatePorcaoInput) => Promise<void>;
  deletePorcao: (id:number) => Promise<void>;
}

interface PorcaoProviderProps {
  children: ReactNode;
}

export const PorcoesContext = createContext({} as PorcaoContextType);

const PorcaoProvider = ({ children }: PorcaoProviderProps) => {
  const [porcoes, setPorcoes] = useState<Porcao[]>([]);

  async function porcaoGet() {
    const response = await api.get("/menu/porcoes");
    setPorcoes(response.data);
  }

  async function createPorcao(data: CreatePorcaoInput) {
    const { tipo, preco, tamanho } = data;
    const response = await api.post("/menu/porcao", {
      tipo,
      preco,
      tamanho,
    });
    setPorcoes((state) => [response.data, ...state]);
  }

  async function deletePorcao(id: number) {
    await api.delete(`/menu/porcao/${id}`);
    setPorcoes(porcoes.filter((porcao) => porcao.id !== id));
  }

  useEffect(() => {
    porcaoGet();
  })

  return (
    <PorcoesContext.Provider value={{ porcoes, porcaoGet, createPorcao, deletePorcao }}>
      {children}
    </PorcoesContext.Provider>
  );
};

export default PorcaoProvider;
