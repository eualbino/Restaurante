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
import { priceFormatter } from "../../../utils/formatter";
import { lancamentoGet } from "../../../data/lancamentoContext";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

//Não está funcionando por causa que não foi terminado no back!


interface CreateLancamento {
  itemPedido: [
    item: {
      id: number;
      nome: string;
      preco: number;
      tipo: string;
      litragem: string;
      tamanho: string;
    },
    acrescimos: [
      {
        id: number;
      }
    ],
    observacoes: string,
    quantidade: number
  ];
  lancamento: {
    garcom: {
      id: number | null;
    };
    pedido: {
      numeroMesa: number;
    };
  };
}

const PedidosMesas = () => {
  const { id } = useParams();
  const idParams = id ?? "";
  const numeroMesa = parseInt(id ?? "");
  const [total, setTotal] = useState(0);

  const { data: lancamentos } = useQuery({
    queryKey: ["lancamentos"],
    queryFn: () => lancamentoGet(idParams),
  });

    if (lancamentos) {
			let tt = 0
      lancamentos
        .filter(
          (lancamento: CreateLancamento) =>
            lancamento.lancamento.pedido.numeroMesa === numeroMesa
        )
        .map((lancamento: CreateLancamento) => {
          lancamento.itemPedido.map((item) => {
            if (typeof item === "object" && item !== null && "preco" in item) {
              tt += item.preco;
							setTotal(tt);
            }
          });
        });
    }
    

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
            ?.filter(
              (lancamento: CreateLancamento) =>
                lancamento.lancamento.pedido.numeroMesa === numeroMesa
            )
            .map((lancamento: CreateLancamento) => {
              return lancamento.itemPedido.map((item) => {
                if (
                  typeof item === "object" &&
                  item !== null &&
                  "preco" in item
                )
                  return (
                    <div>
                      <h2>{item.nome}</h2>
                      <span>{priceFormatter.format(item.preco)}</span>
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
            ?.filter(
              (lancamento: CreateLancamento) =>
                lancamento.lancamento.pedido.numeroMesa === numeroMesa
            )
            .map((lancamento: CreateLancamento) => {
              return lancamento.itemPedido.map((item) => {
                if (
                  typeof item === "object" &&
                  item !== null &&
                  "preco" in item
                )
                  return (
                    <div>
                      <h2>
                        {item.nome} {item.litragem}
                      </h2>
                      <span>{priceFormatter.format(item.preco)}</span>
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
            ?.filter(
              (lancamento: CreateLancamento) =>
                lancamento.lancamento.pedido.numeroMesa === numeroMesa
            )
            .map((lancamento: CreateLancamento) => {
              return lancamento.itemPedido.map((item) => {
                if (
                  typeof item === "object" &&
                  item !== null &&
                  "preco" in item
                )
                  return (
                    <div>
                      <h2>
                        {item.tipo} {item.tamanho}
                      </h2>
                      <span>{priceFormatter.format(item.preco)}</span>
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
          <h2>TOTAL: {total}</h2>
        </TotalPrice>
      </TotalAndButtonOptions>
    </PedidosMesasContainer>
  );
};

export default PedidosMesas;
