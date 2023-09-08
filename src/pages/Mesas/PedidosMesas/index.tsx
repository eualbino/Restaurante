import { X } from "lucide-react";
import Header from "../../../components/Header";
import {
  ButtonOptions,
  PedidosMesaBebidas,
  PedidosMesaLanches,
  PedidosMesaPorcoes,
  PedidosMesasContain,
  PedidosMesasContainer,
  TotalAndButtonOptions,
  TotalPrice,
} from "./styles";
import { PlusCircle, CheckCircle } from "phosphor-react";
import { NavLink } from "react-router-dom";

const PedidosMesas = () => {
  return (
    <PedidosMesasContainer>
      <Header
        children="MESA 4"
        childrenLanche=""
        childrenBebida=""
        childrenPorcao=""
      />
      <PedidosMesasContain>
        <PedidosMesaLanches>
          <h1>LANCHES</h1>
          <div>
            <h2>X-Tudo</h2>
            <span>R$ 32,00</span>
            <button>
              <X />
            </button>
          </div>
          <div>
            <h2>X-Tudo</h2>
            <span>R$ 32,00</span>
            <button>
              <X />
            </button>
          </div>
        </PedidosMesaLanches>
        <PedidosMesaBebidas>
          <h1>BEBIDAS</h1>

          <div>
            <h2>X-Tudo</h2>
            <span>R$ 32,00</span>
            <button>
              <X />
            </button>
          </div>
          <div>
            <h2>X-Tudo</h2>
            <span>R$ 32,00</span>
            <button>
              <X />
            </button>
          </div>
          <div>
            <h2>X-Tudo</h2>
            <span>R$ 32,00</span>
            <button>
              <X />
            </button>
          </div>
        </PedidosMesaBebidas>
        <PedidosMesaPorcoes>
          <h1>PORCOES</h1>
          {/* Colocar isso dentro de um MAP */}
          <div>
            <h2>X-Tudo</h2>
            <span>R$ 32,00</span>
            <button>
              <X />
            </button>
          </div>
        </PedidosMesaPorcoes>
      </PedidosMesasContain>
      <TotalAndButtonOptions>
        <ButtonOptions>
          <NavLink to="/lancheComprar" title="Adicionar lanche ao menu">
            <button>
              <span>Adicionar</span>
              <PlusCircle size={24} color="#ffffff" weight="fill" />
            </button>
          </NavLink>
          <button>
            <span>Finalizar</span>
            <CheckCircle size={24} color="#ffffff" weight="fill" />
          </button>
        </ButtonOptions>
        <TotalPrice>
          <h2>TOTAL: R$ 123,00</h2>
        </TotalPrice>
      </TotalAndButtonOptions>
    </PedidosMesasContainer>
  );
};

export default PedidosMesas;
