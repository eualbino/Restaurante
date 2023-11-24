import { ReactNode, createContext, useState, useEffect, memo, useCallback } from "react";
import { api } from "../lib/axios";

interface Mesa {
  numeroMesa: number;
}

interface MesaContextType {
  mesas: Mesa[];
  mesaGet: () => Promise<void>;
  createMesa: (data: Mesa) => Promise<void>;
  deleteMesa: (numeroMesa: number) => Promise<void>;
}

interface MesasProviderProps {
  children: ReactNode;
}

export const MesasContext = createContext({} as MesaContextType);

const MesasProvider: React.FC<MesasProviderProps> = memo(({ children }) => {
const [mesas, setMesas] = useState<Mesa[]>([]);

const mesaGet = useCallback(async () => {
  const response = await api.get("/mesa/mesas");
  setMesas(response.data);
}, [])

const createMesa = useCallback(async (data: Mesa) => {
  const { numeroMesa } = data;
  const response = await api.post("/mesa", {
    numeroMesa,
  });
  setMesas((state) => [response.data, ...state]);
}, [])

const deleteMesa = useCallback(async (numeroMesa: number) => {
  await api.delete(`/mesa/${numeroMesa}`);
  setMesas(mesas.filter((mesa) => mesa.numeroMesa !== numeroMesa));
}, [])

useEffect(() => {
  mesaGet();
})

return (
  <MesasContext.Provider value={{ mesas, mesaGet, createMesa, deleteMesa }}>
    {children}
  </MesasContext.Provider>
);

});

export default MesasProvider;
