import Header from "../components/Header";
import { MesasContainer, MessasAcessiveis } from "./styles";

const Mesas = () => {
  return (
    <MesasContainer>
      <Header children="MESAS" />
      <MessasAcessiveis>
        <div>
          <h2>Mesa 1</h2>
          <button>ACESSAR</button>
        </div>
        <div>
          <h2>Mesa 1</h2>
          <button>ACESSAR</button>
        </div>
        <div>
          <h2>Mesa 1</h2>
          <button>ACESSAR</button>
        </div>
        <div>
          <h2>Mesa 1</h2>
          <button>ACESSAR</button>
        </div>
        <div>
          <h2>Mesa 1</h2>
          <button>ACESSAR</button>
        </div>
        <div>
          <h2>Mesa 1</h2>
          <button>ACESSAR</button>
        </div>
      </MessasAcessiveis>
    </MesasContainer>
  );
};

export default Mesas;
