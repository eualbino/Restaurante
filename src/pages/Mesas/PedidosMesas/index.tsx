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
import { LanchesContext } from "../../../context/lanchesContext";
import { BebidasContext } from "../../../context/bebidasContext";
import { PorcoesContext } from "../../../context/porcaoContext";
import { priceFormatter } from "../../../utils/formatter";

const PedidosMesas = () => {
  const { lanches } = useContext(LanchesContext)
  const { bebidas } = useContext(BebidasContext)
  const { porcoes } = useContext(PorcoesContext)
  const { id } = useParams()
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
          {lanches.map((lanche) => {
            return (
              <div>
                <h2>{lanche.nome}</h2>
                <span>{priceFormatter.format(lanche.preco)}</span>
                <button>
                  <X />
                </button>
              </div>
            )
          })}
        </PedidosMesaLanches>
        <PedidosMesaBebidas>
          <h1>BEBIDAS</h1>
          {bebidas.map((bebida) => {
            return (
              <div>
                <h2>{bebida.nome} {bebida.litragem}</h2>
                <span>{priceFormatter.format(bebida.preco)}</span>
                <button>
                  <X />
                </button>
              </div>
            )
          })}
        </PedidosMesaBebidas>
        <PedidosMesaPorcoes>
          <h1>PORCOES</h1>
          {porcoes.map(porcao => {
            return (
              <div>
                <h2>{porcao.tipo} {porcao.tamanho}</h2>
                <span>{priceFormatter.format(porcao.preco)}</span>
                  <button>
                    <X />
                  </button>
              </div>
            )
          })}
        </PedidosMesaPorcoes>
      </PedidosMesasContain>
      <TotalAndButtonOptions>
        <ButtonOptions>
          <NavLink to="/lancheComprar" title="Adicionar lanche ao menu">
            <button>
              <span>Adicionar</span>
              <PlusCircle size={24} color="#ffffff" weight="fill" />
            </button>
          </NavLink>
          <button>
            <span>Finalizar</span>
            <CheckCircle size={24} color="#ffffff" weight="fill" />
          </button>
        </ButtonOptions>
        <TotalPrice>
          <h2>TOTAL: R$ 123,00</h2>
        </TotalPrice>
      </TotalAndButtonOptions>
    </PedidosMesasContainer>
  );
};

export default PedidosMesas;
