import { useContext } from "react";
import Header from "../../../components/Header";
import { priceFormatter } from "../../../utils/formatter";
import {
  LanchesMenuContainer,
  MainDivLanches,
  PriceLanches,
  TextLanches,
  TitleLanches,
} from "./styles";
import { LanchesContext } from "../../../context/LanchesContext";


const LanchesMenu = () => {
  const { lanches } = useContext(LanchesContext);
  return (
    <div>
      <Header
        childrenLanche="/lanchesMenu"
        childrenBebida="/bebidasMenu"
        childrenPorcao="/porcoesMenu"
      />
      <LanchesMenuContainer>
        {lanches.map((lanche) => {
          return (
            <MainDivLanches key={lanche.id}>
              <TitleLanches>
                <span>{lanche.nome}</span>
              </TitleLanches>
              <TextLanches>
                <span>{lanche.ingredientes}</span>
              </TextLanches>
              <PriceLanches>
                <span>{priceFormatter.format(lanche.preco)}</span>
              </PriceLanches>
            </MainDivLanches>
          );
        })}
      </LanchesMenuContainer>
    </div>
  );
};

export default LanchesMenu;
