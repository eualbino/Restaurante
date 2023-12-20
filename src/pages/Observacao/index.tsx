import * as z from "zod";
import Header from "../../components/Header";
import {
	FinishButton,
	InsertAddition,
	InsertedAddition,
	ObservationContain,
	ObservationContainer,
	ProductsInsert,
	SepareteObservationFromInsert,
	TextObservacao,
} from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { CheckCircle } from "phosphor-react";
import { X } from "lucide-react";
import { AcrescimosContext } from "../../context/acrescimoContext";
import { priceFormatter } from "../../utils/formatter";

const newAcrescimoSchema = z.object({
	observation: z.string(),
	acrescimos: z.array(z.string()),
});

type newAcrescimoData = z.infer<typeof newAcrescimoSchema>;

const Observacao = () => {
	const { acrescimos } = useContext(AcrescimosContext);

	const { register } = useForm<newAcrescimoData>({
		resolver: zodResolver(newAcrescimoSchema),
	});

	return (
		<ObservationContainer>
			<Header childrenLanche="" childrenBebida="" childrenPorcao="" />
			<ObservationContain>
				<form>
					<SepareteObservationFromInsert>
						<TextObservacao>
							<span>DESEJA INSERIR ALGUMA OBSERVAÇÃO?</span>
							<textarea
								cols={40}
								rows={6}
								placeholder="Ex: sem alface, sem tomate"
								{...register("observation")}
							></textarea>
						</TextObservacao>

						<InsertedAddition>
							<div>
								<span>2x Cattupiry - R$12,00</span>
								<button>
									<X />
								</button>
							</div>
						</InsertedAddition>
					</SepareteObservationFromInsert>
					<InsertAddition>
						<span>DESEJA INSERIR ALGUM ACRÉSCIMO?</span>
						<ProductsInsert>
							{acrescimos.map((acrescimo) => {
								return (
									<div key={acrescimo.id}>
										<button>
											{acrescimo.item}{" "}
											<span>{priceFormatter.format(acrescimo.valor)}</span>
										</button>
									</div>
								);
							})}
						</ProductsInsert>
					</InsertAddition>
					<FinishButton>
						<span>Finalizar</span>
						<CheckCircle size={24} color="#ffffff" weight="fill" />
					</FinishButton>
				</form>
			</ObservationContain>
		</ObservationContainer>
	);
};

export default Observacao;
