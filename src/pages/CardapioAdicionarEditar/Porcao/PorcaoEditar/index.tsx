import Header from "../../../../components/Header";
import { AddPorcao, PorcaoContain } from "../PorcaoAdicionar/styles";

const PorcaoEditar = () => {
  return (
    <div>
      <Header
        children="EDITAR PORÇÃO"
        childrenLanche=""
        childrenBebida=""
        childrenPorcao=""
      />
      <PorcaoContain>
        <AddPorcao>
          <div>
            <span>Nome:</span>
            <input type="text" />
          </div>
          <div>
            <span>Tamanho:</span>
            <input type="text" />
          </div>
          <div>
            <span>Preço:</span>
            <input type="number" />
          </div>
          <button>ADICIONAR</button>
        </AddPorcao>
      </PorcaoContain>
    </div>
  );
};

export default PorcaoEditar;
