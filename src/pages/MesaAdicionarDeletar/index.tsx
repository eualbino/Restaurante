import { X } from "lucide-react";
import Header from "../../components/Header";
import {
	AddTable,
	CreatedTablesContain,
	CreatedTablesContainer,
	CreatedTablesDelete,
	CreatedTablesText,
	TableSetupContain,
} from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createMesa, deleteMesa, mesaGet } from "../../data/mesasContext";

const newMesaFormSchema = z.object({
	numeroMesa: z.coerce.number(),
});

type newMesaFormData = z.infer<typeof newMesaFormSchema>;

const MesaAdicionarDeletar = () => {
	const { register, handleSubmit, reset } = useForm<newMesaFormData>({
		resolver: zodResolver(newMesaFormSchema),
	});

	const { data: mesas, refetch } = useQuery({
		queryKey: ["mesas"],
		queryFn: mesaGet,
	});

	const { mutateAsync: criacaoMesa } = useMutation({
		mutationFn: createMesa,
		onSuccess: () => {
			refetch()
		}
	});

	const { mutateAsync: deletarMesa } = useMutation({
		mutationFn: deleteMesa,
		onSuccess: () => {
			refetch()
		}
	});

	async function handleCreateNewMesa(data: newMesaFormData) {
		await criacaoMesa(data);
		reset();
	}

	async function handleDeleteMesa(numeroMesa: number) {
		await deletarMesa(numeroMesa);
	}

	return (
		<div>
			<Header
				children="CONFIGURAÇÕES DE MESAS"
				childrenLanche=""
				childrenBebida=""
				childrenPorcao=""
			/>
			<TableSetupContain>
				<form onSubmit={handleSubmit(handleCreateNewMesa)}>
					<AddTable>
						<div>
							<span>Nº da Mesa:</span>
							<input type="number" required {...register("numeroMesa")} />
						</div>
						<button type="submit">ADICIONAR</button>
					</AddTable>
				</form>
				<CreatedTablesContainer>
					{mesas?.map((mesa) => {
						return (
							<CreatedTablesContain key={mesa.numeroMesa}>
								<CreatedTablesText>
									<span>Mesa {mesa.numeroMesa}</span>
								</CreatedTablesText>
								<CreatedTablesDelete>
									<button
										type="submit"
										onClick={() => {
											handleDeleteMesa(mesa.numeroMesa);
										}}
									>
										<X />
									</button>
								</CreatedTablesDelete>
							</CreatedTablesContain>
						);
					})}
				</CreatedTablesContainer>
			</TableSetupContain>
		</div>
	);
};

export default MesaAdicionarDeletar;
