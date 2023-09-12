import { ReactNode, createContext, useEffect, useState} from "react";
import { api } from "../lib/axios";

interface Lanche {
  id: number;
  nome: string;
  preco: number;
  ingredientes: string;
}

interface LancheContextType {
  lanches: Lanche[];
  LancheGet: () => Promise<void>;
}

interface LanchesProviderProps {
  children: ReactNode;
}

export const LanchesContext = createContext({} as LancheContextType);

const LancheProvider = ({ children }: LanchesProviderProps) => {

  const [lanches, setLanches] = useState<Lanche[]>([]);

  async function LancheGet() {
    const response = await api.get("/menu/lanches", {
      params: {
        _oreder: "desc",
      },
    });
    setLanches(response.data);
  }

  useEffect(() => {
    LancheGet();
  }, []);

  return (
    <LanchesContext.Provider value={{ lanches, LancheGet}}></LanchesContext.Provider>
  );
};

export default LancheProvider;