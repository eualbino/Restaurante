import Header from "../../../components/Header";
import {
  MainDivPorcoes,
  PorcoesMenuContainer,
  PricePorcoes,
  TextPorcoes,
  TitlePorcoes,
} from "../../Menu/PorcoesMenu/styles";

const PorcoesComprar = () => {
  return (
    <div>
      <Header
        childrenLanche="/lancheComprar"
        childrenBebida="/bebidaComprar"
        childrenPorcao="/porcaoComprar"
      />
      <PorcoesMenuContainer>
        <MainDivPorcoes>
          <button>
            <TitlePorcoes>
              <span>Contra-Filé inteira</span>
            </TitlePorcoes>
            <TextPorcoes>
              <span>
                800g de contra-filé, calabresa, cebola, azeitona e pão de
                aperitivo
              </span>
            </TextPorcoes>
            <PricePorcoes>
              <span>R$ 58,00</span>
            </PricePorcoes>
          </button>
        </MainDivPorcoes>

        <MainDivPorcoes>
          <button>
            <TitlePorcoes>
              <span>Meia Fritas</span>
            </TitlePorcoes>
            <TextPorcoes>
              <span>400g de batata-frita e queijo ralado</span>
            </TextPorcoes>
            <PricePorcoes>
              <span>R$ 18,00</span>
            </PricePorcoes>
          </button>
        </MainDivPorcoes>

        <MainDivPorcoes>
          <button>
            <TitlePorcoes>
              <span>Inteira Fritas</span>
            </TitlePorcoes>
            <TextPorcoes>
              <span>800g de batata-frita e queijo ralado</span>
            </TextPorcoes>
            <PricePorcoes>
              <span>R$ 28,00</span>
            </PricePorcoes>
          </button>
        </MainDivPorcoes>

        <MainDivPorcoes>
          <button>
            <TitlePorcoes>
              <span>Porção Mista</span>
            </TitlePorcoes>
            <TextPorcoes>
              <span>
                200g de frango, 200g de lombo, 200g de contra-filé, calabresa,
                cebola, azeitona e pão de aperitivo
              </span>
            </TextPorcoes>
            <PricePorcoes>
              <span>R$ 24,00</span>
            </PricePorcoes>
          </button>
        </MainDivPorcoes>
      </PorcoesMenuContainer>
    </div>
  );
};

export default PorcoesComprar;
