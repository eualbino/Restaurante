import { NavLink } from "react-router-dom";
import Header from "../../../components/Header";
import {
  LanchesMenuContainer,
  MainDivLanches,
  PriceLanches,
  TextLanches,
  TitleLanches,
} from "../../Menu/LanchesMenu/styles";

const LanchesComprar = () => {
  return (
    <div>
      <Header
        childrenLanche="/lancheComprar"
        childrenBebida="/bebidaComprar"
        childrenPorcao="/porcaoComprar"
      />
      <LanchesMenuContainer>
        <MainDivLanches>
          <button>
            <NavLink to="/observacao">
              <TitleLanches>
                <span>X-Tudo</span>
              </TitleLanches>
              <TextLanches>
                <span>
                  Dois hambúrgueres, frango, calabresa, cebola, ovo, catupiry,
                  milho, muçarela, presunto, azeitona, tomate, alface e maionese
                </span>
              </TextLanches>
              <PriceLanches>
                <span>R$ 32,00</span>
              </PriceLanches>
            </NavLink>
          </button>
        </MainDivLanches>

        <MainDivLanches>
          <button>
            <TitleLanches>
              <span>X-Burgão</span>
            </TitleLanches>
            <TextLanches>
              <span>
                Dois hambúrgueres, muçarela, presunto, ovo, tomate, alface e
                maionese
              </span>
            </TextLanches>
            <PriceLanches>
              <span>R$ 24,00</span>
            </PriceLanches>
          </button>
        </MainDivLanches>

        <MainDivLanches>
          <button>
            <TitleLanches>
              <span>X-Frango</span>
            </TitleLanches>
            <TextLanches>
              <span>Frango, muçarela, tomate, alface e maionese</span>
            </TextLanches>
            <PriceLanches>
              <span>R$ 28,00</span>
            </PriceLanches>
          </button>
        </MainDivLanches>

        <MainDivLanches>
          <button>
            <TitleLanches>
              <span>X-Burguer</span>
            </TitleLanches>
            <TextLanches>
              <span>
                Dois hambúrgueres, muçarela, tomate, alface e maionese
              </span>
            </TextLanches>
            <PriceLanches>
              <span>R$ 20,00</span>
            </PriceLanches>
          </button>
        </MainDivLanches>
      </LanchesMenuContainer>
    </div>
  );
};

export default LanchesComprar;
