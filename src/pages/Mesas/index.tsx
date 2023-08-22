import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import { MessasContainer } from "./styles";

const Mesas = () => {
  return (
    <div>
      <Header children="MESAS" />
      <MessasContainer>
        <div>
          <h2>Mesa 1</h2>
          <button>ACESSAR</button>
        </div>
        <div>
          <h2>Mesa 2</h2>
          <button>ACESSAR</button>
        </div>
        <div>
          <h2>Mesa 3</h2>
          <button>ACESSAR</button>
        </div>
        <div>
          <h2>Mesa 4</h2>
          <NavLink to="/pedidosMesas" title="Pedidos das Mesas">
          <button>ACESSAR</button>
          </NavLink>
        </div>
        <div>
          <h2>Mesa 5</h2>
          <button>ACESSAR</button>
        </div>
        <div>
          <h2>Mesa 6</h2>
          <button>ACESSAR</button>
        </div>
      </MessasContainer>
    </div>
  );
};

export default Mesas;
