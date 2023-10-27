import { ReactNode, createContext, useEffect, useState } from "react";
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
  funcionarioGet: () => Promise<void>;
  createFuncionario: (data: CreateFuncionarioInput) => Promise<void>;
  deleteFuncionario: (id: number) => Promise<void>;
  editFuncionario: (id: number, data: CreateFuncionarioInput) => Promise<void>;
}

interface FuncionariosProviderProps {
  children: ReactNode;
}

export const FuncionariosContext = createContext({} as FuncionariosContextType);

const FuncionariosProvider = ({ children }: FuncionariosProviderProps) => {
  const [funcionarios, setFuncionarios] = useState<Funcionarios[]>([]);

  async function funcionarioGet() {
    const response = await api.get("/pessoa/pessoas");
    setFuncionarios(response.data);
  }

  async function createFuncionario(data: CreateFuncionarioInput) {
    const { nome, idade, funcao, usuario, email, senha } = data;
    const response = await api.post("/auth/register", {
      nome,
      idade,
      funcao,
      usuario,
      email,
      senha,
    });
    setFuncionarios((state) => [response.data, ...state]);
  }

  async function deleteFuncionario(id: number) {
    await api.delete(`/pessoa/${id}`);
    setFuncionarios(funcionarios.filter((funcionario) => funcionario.id !== id));
  }

  async function editFuncionario(id: number, data: CreateFuncionarioInput) {
    const { nome, idade, funcao, usuario, email, senha } = data;
    const response = await api.put(`/pessoa/${id}`, {
      nome,
      idade,
      funcao,
      usuario,
      email,
      senha,
    });
    setFuncionarios((state) => [response.data, ...state]);
  }

  useEffect(() => {
    funcionarioGet();
  });

  return (
    <FuncionariosContext.Provider
      value={{
        funcionarios,
        funcionarioGet,
        createFuncionario,
        deleteFuncionario,
        editFuncionario,
      }}
    >
      {children}
    </FuncionariosContext.Provider>
  );
};

export default FuncionariosProvider;
