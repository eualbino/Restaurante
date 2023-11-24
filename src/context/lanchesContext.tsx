import { ReactNode, createContext, useEffect, useState, memo, useCallback } from "react";
import { api } from "../lib/axios";

interface Lanche {
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

interface LancheContextType {
  lanches: Lanche[];
  lancheGet: () => Promise<void>;
  createLanche: (data: CreateLancheInput) => Promise<void>;
  deleteLanche: (id: number) => Promise<void>;
  editLanche: (id: number, data: CreateLancheInput) => Promise<void>;
}

interface LanchesProviderProps {
  children: ReactNode;
}

export const LanchesContext = createContext({} as LancheContextType);

const LanchesProvider: React.FC<LanchesProviderProps> = memo(({ children }) => {
  const [lanches, setLanches] = useState<Lanche[]>([]);

  const lancheGet = useCallback(async () => {
    const response = await api.get("/menu/lanches");
    setLanches(response.data);
  }, [])

  const createLanche = useCallback(async (data: CreateLancheInput) => {
    const { nome, preco, ingredientes } = data;

    const response = await api.post("/menu/lanche", {
      nome,
      preco,
      ingredientes,
    });
    setLanches((state) => [response.data, ...state]);
  }, [])

  const deleteLanche = useCallback(async (id: number) => {
    await api.delete(`/menu/lanche/${id}`);
    setLanches(lanches.filter((lanche) => lanche.id !== id));
  }, [])

  const editLanche = useCallback(async (id: number, data: CreateLancheInput) => {
    const { nome, preco, ingredientes } = data;
    const response = await api.put(`/menu/lanche/${id}`, {
      nome,
      preco,
      ingredientes,
    });
    setLanches((state) => [response.data, ...state]);
  }, [])

  useEffect(() => {
    lancheGet();
  });

  return (
    <LanchesContext.Provider
      value={{ lanches, lancheGet, createLanche, deleteLanche, editLanche }}
    >
      {children}
    </LanchesContext.Provider>
  );
});

export default LanchesProvider;
