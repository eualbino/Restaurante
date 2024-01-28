import { NavLink } from "react-router-dom";
import Header from "../../../../components/Header";
import SelectOptionsAdicionar from "../../SelectOptionsAdicionar";
import { PencilLine, X } from "lucide-react";
import {
	AddLanche,
	CreatedLancheContain,
	CreatedLancheContainer,
	CreatedLancheDelete,
	CreatedLancheEdit,
	CreatedLancheText,
	IngredientesCreate,
	LancheContain,
} from "./styles";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
	createLanche,
	deleteLanche,
	lancheGet,
} from "../../../../data/lanchesContext";
import toast from "react-hot-toast";

const newLancheFormSchema = z.object({
	nome: z.string().nonempty("É necessário ter o nome do lanche!"),
	preco: z.coerce.number(),
	ingredientes: z
		.string()
		.nonempty("É necessário ter os ingredientes do lanche!"),
});

type NewLancheFormInputs = z.infer<typeof newLancheFormSchema>;

const LancheAdicionar = () => {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
		reset,
	} = useForm<NewLancheFormInputs>({
		resolver: zodResolver(newLancheFormSchema),
	});

	const { data: lanches, refetch } = useQuery({
		queryKey: ["lanche"],			
		queryFn: lancheGet,
	});

	const { mutateAsync: adicionaLanche } = useMutation({
		mutationFn: createLanche,
		onSuccess: () => {
			refetch()
		}
	});

	const { mutateAsync: deleteLancheFn } = useMutation({
		mutationFn: deleteLanche,
		onSuccess: () => {
			refetch()
		}
	});

	async function handleCreateNewLanche(data: NewLancheFormInputs) {
		try {
			await adicionaLanche(data);
			toast.success("Cadastrado com sucesso!");
		} catch (err) {
			toast.error("Erro ao cadastrar um lanche!");
		}
		reset();
	}

	async function handleDeleteLanche(id: number) {
		await deleteLancheFn(id);
	}

	return (
		<div>
			<Header
				children="ADICIONAR LANCHE"
				childrenLanche=""
				childrenBebida=""
				childrenPorcao=""
			/>
			<SelectOptionsAdicionar />
			<LancheContain>
				<form onSubmit={handleSubmit(handleCreateNewLanche)}>
					<AddLanche>
						<div>
							<span>Nome:</span>
							<input type="text" required {...register("nome")} />
						</div>
						<div>
							<span>Preço:</span>
							<input
								type="number"
								required
								step="0.01"
								{...register("preco")}
							/>
						</div>
						<IngredientesCreate>
							<span>Ingredientes</span>
							<textarea
								cols={27}
								rows={5}
								placeholder="Ex: Dois Hamburguer, frango, catupiry..."
								required
								{...register("ingredientes")}
							/>
						</IngredientesCreate>
						<button type="submit" disabled={isSubmitting}>
							ADICIONAR
						</button>
					</AddLanche>
				</form>
				<CreatedLancheContainer>
					{lanches?.map((lanche) => {
						return (
							<CreatedLancheContain key={lanche.id}>
								<CreatedLancheText>
									<span>{lanche.nome}</span>
								</CreatedLancheText>
								<CreatedLancheDelete>
									<button
										type="submit"
										onClick={() => handleDeleteLanche(lanche.id)}
									>
										<X />
									</button>
								</CreatedLancheDelete>
								<CreatedLancheEdit>
									<button type="button">
										<NavLink
											to={{ pathname: `/lancheEditar/${lanche.id}` }}
											title="Editar Funcionario"
										>
											<PencilLine />
										</NavLink>
									</button>
								</CreatedLancheEdit>
							</CreatedLancheContain>
						);
					})}
				</CreatedLancheContainer>
			</LancheContain>
		</div>
	);
};

export default LancheAdicionar;
