import { ReactNode, createContext, useState, useEffect } from "react";
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

const MesasProvider = ({ children }: MesasProviderProps) => {
  const [mesas, setMesas] = useState<Mesa[]>([]);

  async function mesaGet() {
    const response = await api.get("/mesa/mesas");
    setMesas(response.data);
  }

  async function createMesa(data: Mesa) {
    const { numeroMesa } = data;
    const response = await api.post("/mesa", {
      numeroMesa,
    });
    setMesas((state) => [response.data, ...state]);
  }

  async function deleteMesa(numeroMesa: number) {
    await api.delete(`/mesa/${numeroMesa}`);
    setMesas(mesas.filter((mesa) => mesa.numeroMesa !== numeroMesa));
  }

  useEffect(() => {
    mesaGet();
  })

  return (
    <MesasContext.Provider value={{ mesas, mesaGet, createMesa, deleteMesa }}>
      {children}
    </MesasContext.Provider>
  );
};

export default MesasProvider;
