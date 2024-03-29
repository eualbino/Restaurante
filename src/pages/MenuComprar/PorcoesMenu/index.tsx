import Header from "../../../components/Header";
import {
	MainDivPorcoes,
	PorcoesMenuContainer,
	PricePorcoes,
	TextPorcoes,
	TitlePorcoes,
} from "../../Menu/PorcoesMenu/styles";
import { porcaoGet } from "../../../data/porcaoContext";
import { priceFormatter } from "../../../utils/formatter";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const PorcoesComprar = () => {
	const { id } = useParams();

	const { data: porcoes } = useQuery({
		queryKey: ["porcoes"],
		queryFn: porcaoGet,
	});

	return (
		<div>
			<Header
				childrenLanche={`/lancheComprar/${id}`}
				childrenBebida={`/bebidaComprar/${id}`}
				childrenPorcao={`/porcaoComprar/${id}`}
			/>
			<PorcoesMenuContainer>
				{porcoes?.map((porcao) => {
					return (
						<button type="submit" key={porcao.id}>
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
						</button>
					);
				})}
			</PorcoesMenuContainer>
		</div>
	);
};

export default PorcoesComprar;
