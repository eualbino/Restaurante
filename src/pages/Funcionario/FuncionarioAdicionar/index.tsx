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
import {
	createFuncionario,
	deleteFuncionario,
	funcionarioGet,
} from "../../../data/funcionarioContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";

const newFuncionarioFormSchema = z.object({
	nome: z.string().nonempty(),
	idade: z.coerce.number(),
	funcao: z.enum(["ADMIN", "GARCOM", "ATENDENTE"]),
	usuario: z.string().nonempty(),
	email: z.string().nonempty(),
	senha: z.string().nonempty(),
});

type newFuncionarioFormData = z.infer<typeof newFuncionarioFormSchema>;

const FuncionarioAdicionar = () => {
	const { register, handleSubmit, reset } = useForm<newFuncionarioFormData>({
		resolver: zodResolver(newFuncionarioFormSchema),
	});

	const { data: funcionarios, refetch } = useQuery({
		queryKey: ["funcionarios"],
		queryFn: funcionarioGet,
	});

	const { mutateAsync: criacaoFuncionario} = useMutation({
		mutationFn: createFuncionario,
		onSuccess: () => {
			refetch()
		}
	});

	const { mutateAsync: deletarFuncionario } = useMutation({
		mutationFn: deleteFuncionario,
		onSuccess: () => {
			refetch()
		}
	});

	async function handleCreateNewFuncionario(data: newFuncionarioFormData) {
		await criacaoFuncionario(data);
		reset();
	}

	async function handleDeleteFuncionario(id: number) {
		await deletarFuncionario(id);
	}
	return (
		<div>
			<Header
				children="CONFIGURAÇÕES DE FUNCIONARIOS"
				childrenLanche=""
				childrenBebida=""
				childrenPorcao=""
			/>
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
						<button type="submit">ADICIONAR</button>
					</AddEmployee>
				</form>
				<CreatedEmployeesContainer>
					{funcionarios?.map((funcionario) => {
						return (
							<CreatedEmployeesContain key={funcionario.id}>
								<CreatedEmployeesText>
									<span>{funcionario.nome}</span>
								</CreatedEmployeesText>
								<CreatedEmployeesDelete>
									<button
										type="submit"
										onClick={() => handleDeleteFuncionario(funcionario.id)}
									>
										<X />
									</button>
								</CreatedEmployeesDelete>
								<CreatedEmployeesEdit>
									<button type="button">
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
