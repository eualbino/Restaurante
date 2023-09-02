import Header from "../../../components/Header";
import { BebidasMenuContainer, MainDivBebidas, PriceBebidas, TitleBebidas } from "./styles";

const BebidasMenu = () => {
  return (
    <div>
      <Header />
      <BebidasMenuContainer>
        <MainDivBebidas>
            <TitleBebidas>
              <span>Água mineral 500ml</span>
            </TitleBebidas>
            <PriceBebidas>
              <span>R$ 24,00</span>
            </PriceBebidas>
        </MainDivBebidas>
        <MainDivBebidas>
            <TitleBebidas>
              <span>Coca-Cola 2L</span>
            </TitleBebidas>
            <PriceBebidas>
              <span>R$ 24,00</span>
            </PriceBebidas>
        </MainDivBebidas>
        <MainDivBebidas>
            <TitleBebidas>
              <span>Chope 350ml</span>
            </TitleBebidas>
            <PriceBebidas>
              <span>R$ 24,00</span>
            </PriceBebidas>
        </MainDivBebidas>
        <MainDivBebidas>
            <TitleBebidas>
              <span>H2O Limoneto</span>
            </TitleBebidas>
            <PriceBebidas>
              <span>R$ 24,00</span>
            </PriceBebidas>
        </MainDivBebidas>
      </BebidasMenuContainer>
    </div>
  );
};

export default BebidasMenu;
