import { zodResolver } from "@hookform/resolvers/zod";
import Header from "../../../components/Header";
import { AddEmployee } from "../FuncionarioAdicionar/styles";
import { EmployeeEditContain } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { FuncionariosContext } from "../../../context/funcionarioContext";
import { api } from "../../../lib/axios";

const FuncionarioFormSchema = z.object({
  nome: z.string().nonempty(),
  idade: z.coerce.number(),
  funcao: z.enum(["Admin", "Garçom", "Atendente"]),
  usuario: z.string().nonempty(),
  email: z.string().nonempty(),
  senha: z.string().nonempty(),
});

type FuncionarioFormData = z.infer<typeof FuncionarioFormSchema>;

const FuncionarioEditar = () => {
  const { register, handleSubmit, reset } = useForm<FuncionarioFormData>({
    resolver: zodResolver(FuncionarioFormSchema),
  });

  const { id } = useParams();
  const { editFuncionario } = useContext(FuncionariosContext);
  const navigate = useNavigate();

  async function handleEditFuncionario(data: FuncionarioFormData) {
    const { nome, idade, funcao, usuario, email, senha } = data;
    await editFuncionario(id, {
      nome,
      idade,
      funcao,
      usuario,
      email,
      senha,
    });
    navigate("/funcionarioAdicionar");
  }

  useEffect(() => {
    api.get(`/pessoa/${id}`).then((response) => {
      reset(response.data);
    });
  }, [id, reset]);

  return (
    <div>
      <Header
        children="EDITAR FUNCIONARIOS"
        childrenLanche=""
        childrenBebida=""
        childrenPorcao=""
      />
      <EmployeeEditContain>
        <form onSubmit={handleSubmit(handleEditFuncionario)}>
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
              <select required {...register("funcao")}>
                <option value="Admin">Admin</option>
                <option value="Garçom">Garçom</option>
                <option value="Atendente">Atendente</option>
              </select>
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
            <button type="submit">EDITAR</button>
          </AddEmployee>
        </form>
      </EmployeeEditContain>
    </div>
  );
};

export default FuncionarioEditar;
