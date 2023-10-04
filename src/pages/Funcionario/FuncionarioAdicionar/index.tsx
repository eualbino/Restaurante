import { PencilLine, X } from "lucide-react";
import Header from "../../../components/Header";
import {
  AddEmployee,
  CreatedEmployeesContain,
  CreatedEmployeesContainer,
  CreatedEmployeesDelete,
  CreatedEmployeesEdit,
  CreatedEmployeesText,
  EmployeeContain,
} from "./styles";
import { NavLink } from "react-router-dom";
import * as z from "zod";
import { useContext } from "react";
import { FuncionariosContext } from "../../../context/funcionarioContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newFuncionarioFormSchema = z.object({
  nome: z.string().nonempty(),
  idade: z.coerce.number(),
  funcao: z.enum(["Admin", "Garçom", "Atendente"]),
  usuario: z.string().nonempty(),
  email: z.string().nonempty(),
  senha: z.string().nonempty(),
});

type newFuncionarioFormData = z.infer<typeof newFuncionarioFormSchema>;

const FuncionarioAdicionar = () => {
  const { createFuncionario, funcionarios, deleteFuncionario } =
    useContext(FuncionariosContext);

  const { register, handleSubmit, reset } = useForm<newFuncionarioFormData>({
    resolver: zodResolver(newFuncionarioFormSchema),
  });

  async function handleCreateNewFuncionario(data: newFuncionarioFormData) {
    const { nome, idade, funcao, usuario, email, senha } = data;
    await createFuncionario({
      nome,
      idade,
      funcao,
      usuario,
      email,
      senha,
    });
    reset();
  }

  async function handleDeleteFuncionario(id: number) {
    await deleteFuncionario(id);
  }
  return (
    <div>
      <Header
        children="CONFIGURAÇÕES DE FUNCIONARIOS"
        childrenLanche=""
        childrenBebida=""
        childrenPorcao=""
      ></Header>
      <EmployeeContain>
        <form onSubmit={handleSubmit(handleCreateNewFuncionario)}>
          <AddEmployee>
            <div>
              <span>Nome:</span>
              <input type="text" required {...register("nome")} />
            </div>
            <div>
              <span>Idade:</span>
              <input type="number" required {...register("idade")} />
            </div>
            <div>
              <span>Função:</span>
              <input type="text" required {...register("funcao")}  />
            </div>
            <div>
              <span>Usuário:</span>
              <input type="text" required {...register("usuario")} />
            </div>
            <div>
              <span>Email:</span>
              <input type="email" required {...register("email")} />
            </div>
            <div>
              <span>Senha:</span>
              <input type="password" required {...register("senha")} />
            </div>
            <button type="submit">ADICIONAR</button>
          </AddEmployee>
        </form>
        <CreatedEmployeesContainer>
          {funcionarios.map((funcionario) => {
            return (
              <CreatedEmployeesContain key={funcionario.id}>
                <CreatedEmployeesText>
                  <span>{funcionario.nome}</span>
                </CreatedEmployeesText>
                <CreatedEmployeesDelete>
                  <button
                    onClick={() => handleDeleteFuncionario(funcionario.id)}
                  >
                    <X />
                  </button>
                </CreatedEmployeesDelete>
                <CreatedEmployeesEdit>
                  <button>
                    <NavLink
                      to={{ pathname: `/funcionarioEditar/${funcionario.id}` }}
                      title="Editar Funcionario"
                    >
                      <PencilLine />
                    </NavLink>
                  </button>
                </CreatedEmployeesEdit>
              </CreatedEmployeesContain>
            );
          })}
        </CreatedEmployeesContainer>
      </EmployeeContain>
    </div>
  );
};

export default FuncionarioAdicionar;
