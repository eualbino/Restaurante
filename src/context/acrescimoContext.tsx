import { ReactNode, createContext, useEffect, useState, memo, useCallback } from "react";
import { api } from "../lib/axios";

interface Acrescimo {
  id: number;
  item: string;
  valor: number;
}

interface CreateAcrescimoInput {
  item: string;
  valor: number;
}

interface AcrescimoContextType {
  acrescimos: Acrescimo[]
  acrescimoGet: () => Promise<void>;
  createAcrescimo: (data: CreateAcrescimoInput) => Promise<void>;
  deleteAcrescimo: (id: number) => Promise<void>;
  editAcrescimo: (id: number, data: CreateAcrescimoInput) => Promise<void>
}

interface AcrescimoProviderProps {
  children: ReactNode;
}

export const AcrescimosContext = createContext({} as AcrescimoContextType);

const AcrescimosProvider: React.FC<AcrescimoProviderProps> = memo(({ children }) => {
  const [acrescimos, setAcrescimos] = useState<Acrescimo[]>([]);

  const acrescimoGet = useCallback(async () => {
    const response = await api.get("/acrescimo/acrescimos");
    setAcrescimos(response.data);
  }, [])

  const createAcrescimo = useCallback(async (data: CreateAcrescimoInput) => {
    const { item, valor } = data;
    const response = await api.post("/acrescimo", {
      item,
      valor,
    });
    setAcrescimos((state) => [response.data, ...state]);
  }, [])

  const deleteAcrescimo = useCallback(async (id: number) => {
    await api.delete(`/acrescimo/${id}`);
    setAcrescimos(acrescimos.filter(acrescimo => acrescimo.id !== id))
  }, [])

  const editAcrescimo = useCallback(async (id: number, data: CreateAcrescimoInput) => {
    const { item, valor } = data
    const response = await api.put(`/acrescimo/${id}`, {
      item,
      valor
    });
    setAcrescimos((state) => [response.data, ...state]);
  }, [])

  useEffect(() => {
    acrescimoGet();
  })

  return (
    <AcrescimosContext.Provider value={{ acrescimos, acrescimoGet, createAcrescimo, deleteAcrescimo, editAcrescimo }}>
      {children}
    </AcrescimosContext.Provider>
  );
});

export default AcrescimosProvider;
