import Header from "../../../components/Header";
import {
	BebidasMenuContainer,
	MainDivBebidas,
	PriceBebidas,
	TitleBebidas,
} from "./styles";
import { bebidaGet } from "../../../data/bebidasContext";
import { priceFormatter } from "../../../utils/formatter";
import { useQuery } from "@tanstack/react-query";

const BebidasMenu = () => {
	const { data: bebidas } = useQuery({
		queryKey: ["bebidas"],
		queryFn: bebidaGet,
	});

	return (
		<div>
			<Header
				childrenLanche="/lanchesMenu"
				childrenBebida="/bebidasMenu"
				childrenPorcao="/porcoesMenu"
			/>
			<BebidasMenuContainer>
				{bebidas?.map((bebida) => {
					return (
						<MainDivBebidas key={bebida.id}>
							<TitleBebidas>
								<span>{bebida.nome}</span>
								<span>{bebida.litragem}</span>
							</TitleBebidas>
							<PriceBebidas>
								<span>{priceFormatter.format(bebida.preco)}</span>
							</PriceBebidas>
						</MainDivBebidas>
					);
				})}
			</BebidasMenuContainer>
		</div>
	);
};

export default BebidasMenu;
