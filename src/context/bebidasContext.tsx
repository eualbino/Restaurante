import { ReactNode, createContext, useEffect, useState, memo, useCallback } from "react";
import { api } from "../lib/axios";

interface Bebidas {
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

interface BebidasContextType {
  bebidas: Bebidas[];
  bebidaGet: () => Promise<void>;
  createBebida: (data: CreateBebidaInput) => Promise<void>;
  deleteBebida: (id: number) => Promise<void>;
  editBebida: (id: number, data: CreateBebidaInput) => Promise<void>;
}

interface BebidasProviderProps {
  children: ReactNode;
}

export const BebidasContext = createContext({} as BebidasContextType);

const BebidasProvider: React.FC<BebidasProviderProps> = memo(({ children }) => {
  const [bebidas, setBebidas] = useState<Bebidas[]>([]);

  const bebidaGet = useCallback(async () => {
    const response = await api.get("/menu/bebidas");
    setBebidas(response.data);
  }, [])

  const createBebida = useCallback(async (data: CreateBebidaInput) => {
    const { nome, litragem, preco } = data;

    const response = await api.post("/menu/bebida", {
      nome,
      litragem,
      preco,
    });
    setBebidas((state) => [response.data, ...state]);
  }, [])

  const deleteBebida = useCallback(async (id: number) => {
    await api.delete(`/menu/bebida/${id}`);
    setBebidas(bebidas.filter((bebida) => bebida.id !== id));
  }, [])

  const editBebida = useCallback(async (id: number, data: CreateBebidaInput) => {
    const { nome, litragem, preco } = data;
    const response = await api.put(`/menu/bebida/${id}`, {
      nome,
      litragem,
      preco,
    });
    setBebidas((state) => [response.data, ...state]);
  }, [])

  useEffect(() => {
    bebidaGet();
  });

  return (
    <BebidasContext.Provider
      value={{ bebidas, bebidaGet, createBebida, deleteBebida, editBebida }}
    >
      {children}
    </BebidasContext.Provider>
  );
});

export default BebidasProvider;
