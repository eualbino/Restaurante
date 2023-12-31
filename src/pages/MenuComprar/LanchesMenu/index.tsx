import { NavLink, useParams } from "react-router-dom";
import Header from "../../../components/Header";
import {
	LanchesMenuContainer,
	MainDivLanches,
	PriceLanches,
	TextLanches,
	TitleLanches,
} from "../../Menu/LanchesMenu/styles";
import { useContext } from "react";
import { LanchesContext } from "../../../context/lanchesContext";
import { priceFormatter } from "../../../utils/formatter";

const LanchesComprar = () => {
	const { lanches } = useContext(LanchesContext);
	const { id } = useParams();

	return (
		<div>
			<Header
				childrenLanche={`/lancheComprar/${id}`}
				childrenBebida={`/bebidaComprar/${id}`}
				childrenPorcao={`/porcaoComprar/${id}`}
			/>
			<LanchesMenuContainer>
				{lanches.map((lanche) => {
					return (
						<button key={lanche.id}>
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
