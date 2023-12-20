import { useContext } from "react";
import Header from "../../../components/Header";
import {
	MainDivPorcoes,
	PorcoesMenuContainer,
	PricePorcoes,
	TextPorcoes,
	TitlePorcoes,
} from "./styles";
import { PorcoesContext } from "../../../context/porcaoContext";
import { priceFormatter } from "../../../utils/formatter";

const PorcoesMenu = () => {
	const { porcoes } = useContext(PorcoesContext);
	return (
		<div>
			<Header
				childrenLanche="/lanchesMenu"
				childrenBebida="/bebidasMenu"
				childrenPorcao="/porcoesMenu"
			/>
			<PorcoesMenuContainer>
				{porcoes.map((porcao) => {
					return (
						<MainDivPorcoes>
							<TitlePorcoes>
								<span>{porcao.tipo}</span>
							</TitlePorcoes>
							<TextPorcoes>
								<span>{porcao.tamanho}</span>
							</TextPorcoes>
							<PricePorcoes>
								<span>{priceFormatter.format(porcao.preco)}</span>
							</PricePorcoes>
						</MainDivPorcoes>
					);
				})}
			</PorcoesMenuContainer>
		</div>
	);
};

export default PorcoesMenu;
