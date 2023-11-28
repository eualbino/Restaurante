import { useContext } from "react";
import Header from "../../../components/Header";
import {
  BebidasMenuContainer,
  MainDivBebidas,
  PriceBebidas,
  TitleBebidas,
} from "../../Menu/BebidasMenu/styles";
import { BebidasContext } from "../../../context/bebidasContext";
import { priceFormatter } from "../../../utils/formatter";
import { useParams } from "react-router-dom";

const BebidasComprar = () => {
  const { bebidas } = useContext(BebidasContext);
  const { id } = useParams()
  return (
    <div>
      <Header
        childrenLanche={`/lancheComprar/${id}`}
        childrenBebida={`/bebidaComprar/${id}`}
        childrenPorcao={`/porcaoComprar/${id}`}
      />
      <BebidasMenuContainer>
        {bebidas.map((bebida) => {
          return (
            <button key={bebida.id}>
              <MainDivBebidas>
                <TitleBebidas>
                  <span>
                    {bebida.nome} {bebida.litragem}
                  </span>
                </TitleBebidas>
                <PriceBebidas>
                  <span>{priceFormatter.format(bebida.preco)}</span>
                </PriceBebidas>
              </MainDivBebidas>
            </button>
          );
        })}
      </BebidasMenuContainer>
    </div>
  );
};

export default BebidasComprar;
