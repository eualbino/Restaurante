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
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { MesasContext } from "../../context/mesasContext";
import { zodResolver } from "@hookform/resolvers/zod";

const newMesaFormSchema = z.object({
	numeroMesa: z.coerce.number(),
});

type newMesaFormData = z.infer<typeof newMesaFormSchema>;

const MesaAdicionarDeletar = () => {
	const { createMesa, mesas, deleteMesa } = useContext(MesasContext);

	const { register, handleSubmit, reset } = useForm<newMesaFormData>({
		resolver: zodResolver(newMesaFormSchema),
	});

	async function handleCreateNewMesa(data: newMesaFormData) {
		const { numeroMesa } = data;
		await createMesa({
			numeroMesa,
		});
		reset();
	}

	async function handleDeleteMesa(numeroMesa: number) {
		await deleteMesa(numeroMesa);
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
					{mesas.map((mesa) => {
						return (
							<CreatedTablesContain key={mesa.numeroMesa}>
								<CreatedTablesText>
									<span>Mesa {mesa.numeroMesa}</span>
								</CreatedTablesText>
								<CreatedTablesDelete>
									<button
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
