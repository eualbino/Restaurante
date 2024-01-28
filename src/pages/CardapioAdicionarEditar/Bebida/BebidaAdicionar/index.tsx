import { PencilLine, X } from "lucide-react";
import Header from "../../../../components/Header";
import SelectOptionsAdicionar from "../../SelectOptionsAdicionar";
import {
	AddBebida,
	BebidaContain,
	CreatedBebidaContain,
	CreatedBebidaContainer,
	CreatedBebidaDelete,
	CreatedBebidaEdit,
	CreatedBebidaText,
} from "./styles";
import { NavLink } from "react-router-dom";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
	bebidaGet,
	createBebida,
	deleteBebida,
} from "../../../../data/bebidasContext";

const newBebidaFormSchema = z.object({
	nome: z.string().nonempty("É preciso colocar nome em bebida!"),
	litragem: z.string().nonempty("É preciso colocar a litragem da bebida!"),
	preco: z.coerce.number(),
});

type newBebidaFormData = z.infer<typeof newBebidaFormSchema>;

const BebidaAdicionar = () => {
	const { register, handleSubmit, reset } = useForm<newBebidaFormData>({
		resolver: zodResolver(newBebidaFormSchema),
	});

	const { data: bebidas, refetch } = useQuery({
		queryKey: ["bebidas"],
		queryFn: bebidaGet,
	});

	const { mutateAsync: adicionaBebida } = useMutation({
		mutationFn: createBebida,
		onSuccess: () => {
			refetch()
		}
	});

	const { mutateAsync: removeBebida } = useMutation({
		mutationFn: deleteBebida,
		onSuccess: () => {
			refetch()
		}
	});

	async function handleCreateNewBebida(data: newBebidaFormData) {
		await adicionaBebida(data);
		reset();
	}

	async function handleDeleteBebida(id: number) {
		await removeBebida(id);
	}

	return (
		<div>
			<Header
				children="ADICIONAR BEBIDA"
				childrenLanche=""
				childrenBebida=""
				childrenPorcao=""
			/>
			<SelectOptionsAdicionar />
			<BebidaContain>
				<form onSubmit={handleSubmit(handleCreateNewBebida)}>
					<AddBebida>
						<div>
							<span>Nome:</span>
							<input type="text" required {...register("nome")} />
						</div>
						<div>
							<span>Litragem:</span>
							<input type="text" required {...register("litragem")} />
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
						<button type="submit">ADICIONAR</button>
					</AddBebida>
				</form>

				<CreatedBebidaContainer>
					{bebidas?.map((bebida) => {
						return (
							<CreatedBebidaContain key={bebida.id}>
								<CreatedBebidaText>
									<span>{bebida.nome}</span>
								</CreatedBebidaText>
								<CreatedBebidaDelete>
									<button
										type="submit"
										onClick={() => handleDeleteBebida(bebida.id)}
									>
										<X />
									</button>
								</CreatedBebidaDelete>
								<CreatedBebidaEdit>
									<button type="button">
										<NavLink
											to={{ pathname: `/bebidaEditar/${bebida.id}` }}
											title="Editar Funcionario"
										>
											<PencilLine />
										</NavLink>
									</button>
								</CreatedBebidaEdit>
							</CreatedBebidaContain>
						);
					})}
				</CreatedBebidaContainer>
			</BebidaContain>
		</div>
	);
};

export default BebidaAdicionar;
