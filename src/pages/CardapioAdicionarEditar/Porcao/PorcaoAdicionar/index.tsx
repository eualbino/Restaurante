import { PencilLine, X } from "lucide-react";
import Header from "../../../../components/Header";
import SelectOptionsAdicionar from "../../SelectOptionsAdicionar";
import { NavLink } from "react-router-dom";
import {
	AddPorcao,
	CreatedPorcaoContain,
	CreatedPorcaoContainer,
	CreatedPorcaoDelete,
	CreatedPorcaoEdit,
	CreatedPorcaoText,
	PorcaoContain,
} from "./styles";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
	createPorcao,
	deletePorcao,
	porcaoGet,
} from "../../../../data/porcaoContext";

const newPorcaoFormSchema = z.object({
	tipo: z.string().nonempty(),
	preco: z.coerce.number(),
	tamanho: z.string().nonempty(),
});

type NewPorcaoFormInputs = z.infer<typeof newPorcaoFormSchema>;

const PorcaoAdicionar = () => {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
		reset,
	} = useForm<NewPorcaoFormInputs>({
		resolver: zodResolver(newPorcaoFormSchema),
	});

	const { data: porcoes, refetch } = useQuery({
		queryKey: ["porcao"],
		queryFn: porcaoGet,
	});

	const { mutateAsync: adicionaPorcao } = useMutation({
		mutationFn: createPorcao,
		onSuccess: () => {
			refetch()
		}
	});

	const { mutateAsync: removePorcao } = useMutation({
		mutationFn: deletePorcao,
		onSuccess: () => {
			refetch()
		}
	});

	async function handleCreateNewPorcao(data: NewPorcaoFormInputs) {
		await adicionaPorcao(data);
		reset();
	}

	async function handleDeletePorcao(id: number) {
		await removePorcao(id);
	}

	return (
		<div>
			<Header
				children="ADICIONAR PORÇÃO"
				childrenLanche=""
				childrenBebida=""
				childrenPorcao=""
			/>
			<SelectOptionsAdicionar />
			<PorcaoContain>
				<form onSubmit={handleSubmit(handleCreateNewPorcao)}>
					<AddPorcao>
						<div>
							<span>Nome:</span>
							<input type="text" required {...register("tipo")} />
						</div>
						<div>
							<span>Tamanho:</span>
							<input type="text" required {...register("tamanho")} />
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
						<button type="submit" disabled={isSubmitting}>
							ADICIONAR
						</button>
					</AddPorcao>
				</form>
				<CreatedPorcaoContainer>
					{porcoes?.map((porcao) => {
						return (
							<CreatedPorcaoContain key={porcao.id}>
								<CreatedPorcaoText>
									<span>{porcao.tipo}</span>
								</CreatedPorcaoText>
								<CreatedPorcaoDelete>
									<button
										type="submit"
										onClick={() => handleDeletePorcao(porcao.id)}
									>
										<X />
									</button>
								</CreatedPorcaoDelete>
								<CreatedPorcaoEdit>
									<button type="button">
										<NavLink
											to={{ pathname: `/porcaoEditar/${porcao.id}` }}
											title="Editar Porção"
										>
											<PencilLine />
										</NavLink>
									</button>
								</CreatedPorcaoEdit>
							</CreatedPorcaoContain>
						);
					})}
				</CreatedPorcaoContainer>
			</PorcaoContain>
		</div>
	);
};

export default PorcaoAdicionar;
