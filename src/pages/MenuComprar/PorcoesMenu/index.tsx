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
import { useParams } from "react-router-dom";

const PorcoesComprar = () => {
  const { porcoes } = useContext(PorcoesContext);
  const { id } = useParams()
  return (
    <div>
      <Header
        childrenLanche={`/lancheComprar/${id}`}
        childrenBebida={`/bebidaComprar/${id}`}
        childrenPorcao={`/porcaoComprar/${id}`}
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
