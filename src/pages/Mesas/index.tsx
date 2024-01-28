import { NavLink } from "react-router-dom";
import Header from "../../components/Header";
import { MessasContainer } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { mesaGet } from "../../data/mesasContext";

const Mesas = () => {
	const { data: mesas } = useQuery({
		queryKey: ["mesas"],
		queryFn: mesaGet,
	});

	return (
		<div>
			<Header
				children="MESAS"
				childrenLanche=""
				childrenBebida=""
				childrenPorcao=""
			/>
			<MessasContainer>
				{mesas?.map((mesa) => {
					return (
						<div key={mesa.numeroMesa}>
							<h2>Mesa {mesa.numeroMesa}</h2>
							<button type="button">
								<NavLink
									to={{ pathname: `/pedidosMesas/${mesa.numeroMesa}` }}
									title="Pedidos das Mesas"
								>
									ACESSAR
								</NavLink>
							</button>
						</div>
					);
				})}
			</MessasContainer>
		</div>
	);
};

export default Mesas;
