import { ReactNode, createContext, memo, useCallback, useState } from "react";
import { api } from "../lib/axios";

interface Item {
    id: number;
    preco: number;
    nome: string;
    ingredientes?: string;
    litragem?: string;
    tamanho?: string;
    tipo?: string;
}

interface Acrescimo {
    id: number;
    item: string;
    valor: number;
}

interface ItemPedido {
    id: number;
    item: Item;
    acrescimos: Acrescimo[];
    quantidade: number;
    observacoes: string;
}

interface Lancamento {
    id: number;
    itemPedido: ItemPedido[];
    garcom: null | number;
    hora: string;
    numeroMesa: number;
}

interface CreateLancamento {
    itemPedido: [
        item: {
            id: number
        },
        acrescimos: [
            {
                id: number
            }
        ],
        observacoes: string,
        quantidade: number
    ],
    lancamento: {
        garcom: {
            id: number | null
        },
        pedido: {
            numeroMesa: number
        }
    }
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

const LancamentosProvider: React.FC<LancamentosProviderProps> = memo(({ children }) => {

    const [lancamentos, setLancamentos] = useState<Lancamento[]>([])

    const lancamentoGet = useCallback(async (id: number) => {
        const response = await api.get(`lancamento/${id}`);
        setLancamentos(response.data)
    }, [])

    const createLancamento = useCallback(async (lancamento: CreateLancamento) => {
        const response = await api.post("/lancamentoController", lancamento);
        setLancamentos((state) => [response.data, ...state])
    }, [])

    const deleteLancamento = useCallback(async (id: number) => {
        await api.delete(`/lancamento/${id}`)
        setLancamentos(lancamentos.filter(lancamento => lancamento.id !== id))
    }, [setLancamentos, lancamentos])

    return (<LancamentoContext.Provider value={{
        lancamentos,
        lancamentoGet,
        createLancamento,
        deleteLancamento,
    }}>{children}</LancamentoContext.Provider>);
})

export default LancamentosProvider;