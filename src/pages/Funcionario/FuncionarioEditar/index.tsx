import { zodResolver } from "@hookform/resolvers/zod";
import Header from "../../../components/Header";
import { AddEmployee } from "../FuncionarioAdicionar/styles";
import { EmployeeEditContain } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  editFuncionario,
  funcionarioGetId,
} from "../../../data/funcionarioContext";
import { useEffect } from "react";

const FuncionarioFormSchema = z.object({
  nome: z.string().nonempty(),
  idade: z.coerce.number(),
  funcao: z.enum(["ADMIN", "GARCOM", "ATENDENTE"]),
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
  const idParams = id ?? "";
  const navigate = useNavigate();

  const { data: funcionarios, refetch } = useQuery({
    queryKey: ["funcionario"],
    queryFn: () => funcionarioGetId(idParams),
  });
	
  useEffect(() => {
    if (funcionarios) {
      reset({
        nome: funcionarios?.nome ?? "",
        idade: funcionarios?.idade ?? 0,
        funcao: funcionarios?.funcao ?? "",
        usuario: funcionarios?.usuario ?? "",
        email: funcionarios?.email ?? "",
        senha: funcionarios?.senha ?? "",
      });
    }
  }, [funcionarios, reset]);

  const { mutateAsync: edicaoFuncionario } = useMutation({
    mutationFn: (data: FuncionarioFormData) => editFuncionario(idParams, data),
    onSuccess: () => {
      refetch();
    },
  });

  async function handleEditFuncionario(data: FuncionarioFormData) {
    await edicaoFuncionario(data);
    navigate("/funcionarioAdicionar");
  }

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
                <option value="ADMIN">ADMIN</option>
                <option value="GARCOM">GARCOM</option>
                <option value="ATENDENTE">ATENDENTE</option>
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
