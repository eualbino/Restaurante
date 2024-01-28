import { NavLink, useParams } from "react-router-dom";
import Header from "../../../components/Header";
import {
	LanchesMenuContainer,
	MainDivLanches,
	PriceLanches,
	TextLanches,
	TitleLanches,
} from "../../Menu/LanchesMenu/styles";
import { priceFormatter } from "../../../utils/formatter";
import { lancheGet } from "../../../data/lanchesContext";
import { useQuery } from "@tanstack/react-query";

const LanchesComprar = () => {
	const { id } = useParams();

	const { data: lanches } = useQuery({
		queryKey: ["lanches"],
		queryFn: lancheGet,
	});

	return (
		<div>
			<Header
				childrenLanche={`/lancheComprar/${id}`}
				childrenBebida={`/bebidaComprar/${id}`}
				childrenPorcao={`/porcaoComprar/${id}`}
			/>
			<LanchesMenuContainer>
				{lanches?.map((lanche) => {
					return (
						<button type="submit" key={lanche.id}>
							<MainDivLanches>
								<NavLink to={{ pathname: `/observacao/${id}/${lanche.id}` }}>
									<TitleLanches>
										<span>{lanche.nome}</span>
									</TitleLanches>
									<TextLanches>
										<span>{lanche.ingredientes}</span>
									</TextLanches>
									<PriceLanches>
										<span>{priceFormatter.format(lanche.preco)}</span>
									</PriceLanches>
								</NavLink>
							</MainDivLanches>
						</button>
					);
				})}
			</LanchesMenuContainer>
		</div>
	);
};

export default LanchesComprar;
