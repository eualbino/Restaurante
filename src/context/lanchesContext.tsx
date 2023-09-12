import { ReactNode, createContext, useEffect, useState } from "react";
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
}

interface LanchesProviderProps {
  children: ReactNode;
}

export const LanchesContext = createContext({} as LancheContextType);

const LanchesProvider = ({ children }: LanchesProviderProps) => {
  const [lanches, setLanches] = useState<Lanche[]>([]);

  async function lancheGet() {
    const response = await api.get("/menu/lanches")
    setLanches(response.data);
  }

  async function createLanche(data: CreateLancheInput) {
    const { nome, preco, ingredientes } = data;

    const response = await api.post("/menu/lanche", {
      nome,
      preco,
      ingredientes,
    });
    setLanches((state) => [response.data, ...state]);
    console.log("Seila");
  }

  useEffect(() => {
    lancheGet();
  }, []);

  return (
    <LanchesContext.Provider value={{ lanches, lancheGet, createLanche }}>
      {children}
    </LanchesContext.Provider>
  );
};

export default LanchesProvider;
