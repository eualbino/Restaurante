import { X } from "lucide-react";
import Header from "../../components/Header";
import {
  PedidosMesaBebidas,
  PedidosMesaLanches,
  PedidosMesaPorcoes,
  PedidosMesasContainer,
} from "./styles";

const PedidosMesas = () => {
  return (
    <div>
      <Header children="MESA 4" />
      <PedidosMesasContainer>
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
          <div>
            <h2>X-Tudo</h2>
            <span>R$ 32,00</span>
              <button>
              <X />
              </button>
          </div>
        </PedidosMesaPorcoes>
      </PedidosMesasContainer>
    </div>
  );
};

export default PedidosMesas;
