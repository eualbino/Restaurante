import Header from "../../../components/Header";
import {
  LanchesMenuContainer,
  MainDivLanches,
  PriceLanches,
  TextLanches,
  TitleLanches,
} from "./styles";

const LanchesMenu = () => {
  return (
    <div>
      <Header />
      <LanchesMenuContainer>
        <MainDivLanches>
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
        </MainDivLanches>

        <MainDivLanches>
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
        </MainDivLanches>

        <MainDivLanches>
          <TitleLanches>
            <span>X-Frango</span>
          </TitleLanches>
          <TextLanches>
            <span>
            Frango, muçarela, tomate, alface e maionese
            </span>
          </TextLanches>
          <PriceLanches>
            <span>R$ 28,00</span>
          </PriceLanches>
        </MainDivLanches>
        

        <MainDivLanches>
          <TitleLanches>
            <span>X-Burguer</span>
          </TitleLanches>
          <TextLanches>
            <span>Dois hambúrgueres, muçarela, tomate, alface e maionese</span>
          </TextLanches>
          <PriceLanches>
            <span>R$ 20,00</span>
          </PriceLanches>
        </MainDivLanches>
      </LanchesMenuContainer>
    </div>
  );
};

export default LanchesMenu;
