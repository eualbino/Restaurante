import { X } from "lucide-react";
import Header from "../../../components/Header";
import {
	ButtonOptions,
	PedidosMesaBebidas,
	PedidosMesaLanches,
	PedidosMesaPorcoes,
	PedidosMesasContain,
	PedidosMesasContainer,
	TotalAndButtonOptions,
	TotalPrice,
} from "./styles";
import { PlusCircle, CheckCircle } from "phosphor-react";
import { NavLink, useParams } from "react-router-dom";
import { useContext } from "react";
import { priceFormatter } from "../../../utils/formatter";
import { LancamentoContext } from "../../../data/lancamentoContext";

const PedidosMesas = () => {
	const { lancamentos } = useContext(LancamentoContext);
	const { id } = useParams();
	const numeroMesa = parseInt(id ?? "");

	const calcularTotal = () => {
		let total = 0;
		if (lancamentos) {
			lancamentos
				.filter((lancamento) => lancamento.numeroMesa === numeroMesa)
				.map((lancamento) => {
					lancamento.itemPedido.map((itemPedido) => {
						total += itemPedido.item.preco;
					});
				});
		}
		return total;
	};

	return (
		<PedidosMesasContainer>
			<Header
				children={`MESA ${id}`}
				childrenLanche=""
				childrenBebida=""
				childrenPorcao=""
			/>
			<PedidosMesasContain>
				<PedidosMesaLanches>
					<h1>LANCHES</h1>

					{lancamentos
						.filter((lancamento) => lancamento.numeroMesa === numeroMesa)
						.map((lancamento) => {
							return lancamento.itemPedido.map((itemPedido) => {
								return (
									<div>
										<h2>{itemPedido.item.nome}</h2>
										<span>{priceFormatter.format(itemPedido.item.preco)}</span>
										<button type="button">
											<X />
										</button>
									</div>
								);
							});
						})}
				</PedidosMesaLanches>
				<PedidosMesaBebidas>
					<h1>BEBIDAS</h1>
					{lancamentos
						.filter((lancamento) => lancamento.numeroMesa === numeroMesa)
						.map((lancamento) => {
							return lancamento.itemPedido.map((itemPedido) => {
								return (
									<div>
										<h2>
											{itemPedido.item.nome} {itemPedido.item.litragem}
										</h2>
										<span>{priceFormatter.format(itemPedido.item.preco)}</span>
										<button type="button">
											<X />
										</button>
									</div>
								);
							});
						})}
				</PedidosMesaBebidas>
				<PedidosMesaPorcoes>
					<h1>PORCOES</h1>
					{lancamentos
						.filter((lancamento) => lancamento.numeroMesa === numeroMesa)
						.map((lancamento) => {
							return lancamento.itemPedido.map((itemPedido) => {
								return (
									<div>
										<h2>
											{itemPedido.item.tipo} {itemPedido.item.tamanho}
										</h2>
										<span>{priceFormatter.format(itemPedido.item.preco)}</span>
										<button type="button">
											<X />
										</button>
									</div>
								);
							});
						})}
				</PedidosMesaPorcoes>
			</PedidosMesasContain>
			<TotalAndButtonOptions>
				<ButtonOptions>
					<NavLink
						to={{ pathname: `/lancheComprar/${id}` }}
						title="Adicionar lanche ao menu"
					>
						<button type="button">
							<span>Adicionar</span>
							<PlusCircle size={24} color="#ffffff" weight="fill" />
						</button>
					</NavLink>
					<button type="button">
						<span>Finalizar</span>
						<CheckCircle size={24} color="#ffffff" weight="fill" />
					</button>
				</ButtonOptions>
				<TotalPrice>
					<h2>TOTAL: {priceFormatter.format(calcularTotal())}</h2>
				</TotalPrice>
			</TotalAndButtonOptions>
		</PedidosMesasContainer>
	);
};

export default PedidosMesas;
