import Header from "../../../components/Header";
import {
	BebidasMenuContainer,
	MainDivBebidas,
	PriceBebidas,
	TitleBebidas,
} from "../../Menu/BebidasMenu/styles";
import { priceFormatter } from "../../../utils/formatter";
import { useParams } from "react-router-dom";
import { bebidaGet } from "../../../data/bebidasContext";
import { useQuery } from "@tanstack/react-query";

const BebidasComprar = () => {
	const { id } = useParams();

	const { data: bebidas } = useQuery({
		queryKey: ["bebidas"],
		queryFn: bebidaGet,
	});

	return (
		<div>
			<Header
				childrenLanche={`/lancheComprar/${id}`}
				childrenBebida={`/bebidaComprar/${id}`}
				childrenPorcao={`/porcaoComprar/${id}`}
			/>
			<BebidasMenuContainer>
				{bebidas?.map((bebida) => {
					return (
						<button type="submit" key={bebida.id}>
							<MainDivBebidas>
								<TitleBebidas>
									<span>
										{bebida.nome} {bebida.litragem}
									</span>
								</TitleBebidas>
								<PriceBebidas>
									<span>{priceFormatter.format(bebida.preco)}</span>
								</PriceBebidas>
							</MainDivBebidas>
						</button>
					);
				})}
			</BebidasMenuContainer>
		</div>
	);
};

export default BebidasComprar;
