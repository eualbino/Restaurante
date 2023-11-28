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
  }, [setBebidas])

  const createBebida = useCallback(async (data: CreateBebidaInput) => {
    const { nome, litragem, preco } = data;

    await api.post("/menu/bebida", {
      nome,
      litragem,
      preco,
    });
    await bebidaGet()
  }, [bebidaGet])

  const deleteBebida = useCallback(async (id: number) => {
    await api.delete(`/menu/bebida/${id}`);
    setBebidas(bebidas.filter((bebida) => bebida.id !== id));
  }, [setBebidas, bebidas])

  const editBebida = useCallback(async (id: number, data: CreateBebidaInput) => {
    const { nome, litragem, preco } = data;
    await api.put(`/menu/bebida/${id}`, {
      nome,
      litragem,
      preco,
    });
    await bebidaGet()
  }, [bebidaGet])

  useEffect(() => {
    bebidaGet();
  },[bebidaGet]);

  return (
    <BebidasContext.Provider
      value={{ bebidas, createBebida, deleteBebida, editBebida }}
    >
      {children}
    </BebidasContext.Provider>
  );
});

export default BebidasProvider;
