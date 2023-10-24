import { ReactNode, createContext, useState } from "react";
import { api } from "../lib/axios";

interface ItemPedido {
    item: {
        id: number;
    };
    acrescimos: {
        id: number;
    }[];
    observacoes: string;
    quantidade: number;
}

interface Lancamento {
    id: number;
    itemPedido: ItemPedido[];
    lancamento: {
        garcom: {
            id: number;
        };
        pedido: {
            numeroMesa: number;
        };
    };
}

interface CreateLancamento {
    itemPedido: ItemPedido[];
    lancamento: {
        garcom: {
            id: number;
        };
        pedido: {
            numeroMesa: number;
        };
    };
}

interface LancamentosContextType {
    lancamentos: Lancamento[];
    lancamentoGet: (id: number) => Promise<void>;
    createLancamento: (lancamento: CreateLancamento) => Promise<void>
    deleteLancamento: (id: number) => Promise<void>;
}

interface LancamentosProviderProps {
    children: ReactNode;
}

export const LancamentoContext = createContext({} as LancamentosContextType);

const LancamentosProvider = ({ children }: LancamentosProviderProps) => {
    const [lancamentos, setLancamentos] = useState<Lancamento[]>([])

    async function lancamentoGet(id: number) {
        const response = await api.get(`lancamento/${id}`);
        setLancamentos(response.data)
    }

    async function createLancamento(lancamento: CreateLancamento) {
        const response = await api.post("/lancamentoController", lancamento);
        setLancamentos((state) => [response.data, ...state])
    }

    async function deleteLancamento(id: number) {
        await api.delete(`/lancamento/${id}`)
        setLancamentos(lancamentos.filter(lancamento => lancamento.id !== id))
    }
    
    return (<LancamentoContext.Provider value={{
        lancamentos,
        lancamentoGet,
        createLancamento,
        deleteLancamento,
    }}>{children}</LancamentoContext.Provider>);
}

export default LancamentosProvider;