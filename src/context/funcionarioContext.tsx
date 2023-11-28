import { ReactNode, createContext, useEffect, useState, memo, useCallback } from "react";
import { api } from "../lib/axios";

interface Funcionarios {
  id: number;
  nome: string;
  idade: number;
  funcao: "ADMIN" | "GARCOM" | "ATENDENTE";
  usuario: string;
  email: string;
  senha: string;
}

interface CreateFuncionarioInput {
  nome: string;
  idade: number;
  funcao: "ADMIN" | "GARCOM" | "ATENDENTE";
  usuario: string;
  email: string;
  senha: string;
}

interface FuncionariosContextType {
  funcionarios: Funcionarios[];
  createFuncionario: (data: CreateFuncionarioInput) => Promise<void>;
  deleteFuncionario: (id: number) => Promise<void>;
  editFuncionario: (id: number, data: CreateFuncionarioInput) => Promise<void>;
}

interface FuncionariosProviderProps {
  children: ReactNode;
}

export const FuncionariosContext = createContext({} as FuncionariosContextType);

const FuncionariosProvider: React.FC<FuncionariosProviderProps> = memo(({ children}) => {
  const [funcionarios, setFuncionarios] = useState<Funcionarios[]>([]);

  const funcionarioGet = useCallback(async () => {
    const response = await api.get("/pessoa/pessoas");
    setFuncionarios(response.data);
  }, [setFuncionarios])

  const createFuncionario = useCallback(async (data: CreateFuncionarioInput) => {
    const { nome, idade, funcao, usuario, email, senha } = data;
    await api.post("/auth/register", {
      nome,
      idade,
      funcao,
      usuario,
      email,
      senha,
    });

    await funcionarioGet()
  }, [funcionarioGet])

  const deleteFuncionario = useCallback(async (id: number) => {
    await api.delete(`/pessoa/${id}`);
    setFuncionarios(funcionarios.filter((funcionario) => funcionario.id !== id));
  }, [setFuncionarios, funcionarios])

  const editFuncionario = useCallback(async (id: number, data: CreateFuncionarioInput) => {
    const { nome, idade, funcao, usuario, email, senha } = data;
    await api.put(`/pessoa/${id}`, {
      nome,
      idade,
      funcao,
      usuario,
      email,
      senha,
    });
    await funcionarioGet()
  }, [funcionarioGet])

  useEffect(() => {
    funcionarioGet();
  },[funcionarioGet]);

  return (
    <FuncionariosContext.Provider
      value={{
        funcionarios,
        createFuncionario,
        deleteFuncionario,
        editFuncionario,
      }}
    >
      {children}
    </FuncionariosContext.Provider>
  );
});

export default FuncionariosProvider;
