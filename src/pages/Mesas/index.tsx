import { NavLink } from "react-router-dom";
import Header from "../../components/Header";
import { MessasContainer } from "./styles";
import { useContext } from "react";
import { MesasContext } from "../../data/mesasContext";

const Mesas = () => {
	const { mesas } = useContext(MesasContext);

	return (
		<div>
			<Header
				children="MESAS"
				childrenLanche=""
				childrenBebida=""
				childrenPorcao=""
			/>
			<MessasContainer>
				{mesas.map((mesa) => {
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
