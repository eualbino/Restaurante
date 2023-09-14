import { useContext } from "react";
import Header from "../../../components/Header";
import {
  BebidasMenuContainer,
  MainDivBebidas,
  PriceBebidas,
  TitleBebidas,
} from "./styles";
import { BebidasContext } from "../../../context/bebidasContext";
import { priceFormatter } from "../../../utils/formatter";

const BebidasMenu = () => {
  const { bebidas } = useContext(BebidasContext);
  return (
    <div>
      <Header
        childrenLanche="/lanchesMenu"
        childrenBebida="/bebidasMenu"
        childrenPorcao="/porcoesMenu"
      />
      <BebidasMenuContainer>
        {bebidas.map((bebida) => {
          return (
            <MainDivBebidas key={bebida.id}>
              <TitleBebidas>
                <span>
                  {bebida.nome}{}{bebida.litragem}
                </span>
              </TitleBebidas>
              <PriceBebidas>
                <span>{priceFormatter.format(bebida.preco)}</span>
              </PriceBebidas>
            </MainDivBebidas>
          );
        })}
      </BebidasMenuContainer>
    </div>
  );
};

export default BebidasMenu;
