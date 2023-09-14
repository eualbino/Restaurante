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

const BebidasComprar = () => {
  const { bebidas } = useContext(BebidasContext);
  return (
    <div>
      <Header
        childrenLanche="/lancheComprar"
        childrenBebida="/bebidaComprar"
        childrenPorcao="/porcaoComprar"
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
