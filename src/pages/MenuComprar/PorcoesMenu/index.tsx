import { useContext } from "react";
import Header from "../../../components/Header";
import {
  MainDivPorcoes,
  PorcoesMenuContainer,
  PricePorcoes,
  TextPorcoes,
  TitlePorcoes,
} from "../../Menu/PorcoesMenu/styles";
import { PorcoesContext } from "../../../context/porcaoContext";
import { priceFormatter } from "../../../utils/formatter";

const PorcoesComprar = () => {
  const { porcoes } = useContext(PorcoesContext);
  return (
    <div>
      <Header
        childrenLanche="/lancheComprar"
        childrenBebida="/bebidaComprar"
        childrenPorcao="/porcaoComprar"
      />
      <PorcoesMenuContainer>
        {porcoes.map((porcao) => {
          return (
            <button key={porcao.id}>
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
