import Header from "../../../components/Header";
import {
  BebidasMenuContainer,
  MainDivBebidas,
  PriceBebidas,
  TitleBebidas,
} from "../../Menu/BebidasMenu/styles";

const BebidasComprar = () => {
  return (
    <div>
      <Header childrenLanche="/lancheComprar" childrenBebida="/bebidaComprar" childrenPorcao="/porcaoComprar"/>
      <BebidasMenuContainer>
        <MainDivBebidas>
          <button>
            <TitleBebidas>
              <span>Água mineral 500ml</span>
            </TitleBebidas>
            <PriceBebidas>
              <span>R$ 24,00</span>
            </PriceBebidas>
          </button>
        </MainDivBebidas>
        <MainDivBebidas>
          <button>
            <TitleBebidas>
              <span>Coca-Cola 2L</span>
            </TitleBebidas>
            <PriceBebidas>
              <span>R$ 24,00</span>
            </PriceBebidas>
          </button>
        </MainDivBebidas>
        <MainDivBebidas>
          <button>
            <TitleBebidas>
              <span>Chope 350ml</span>
            </TitleBebidas>
            <PriceBebidas>
              <span>R$ 24,00</span>
            </PriceBebidas>
          </button>
        </MainDivBebidas>
        <MainDivBebidas>
          <button>
            <TitleBebidas>
              <span>H2O Limoneto</span>
            </TitleBebidas>
            <PriceBebidas>
              <span>R$ 24,00</span>
            </PriceBebidas>
          </button>
        </MainDivBebidas>
      </BebidasMenuContainer>
    </div>
  );
};

export default BebidasComprar;
