import Header from "../../../../components/Header";
import { AddBebida, BebidaContain } from "../BebidaAdicionar/styles";

const BebidaEditar = () => {
  return (
    <div>
      <Header
        children="EDITAR BEBIDA"
        childrenLanche=""
        childrenBebida=""
        childrenPorcao=""
      />
      <BebidaContain>
        <AddBebida>
          <div>
            <span>Nome:</span>
            <input type="text" />
          </div>
          <div>
            <span>Litragem:</span>
            <input type="text" />
          </div>
          <div>
            <span>Preço:</span>
            <input type="number" />
          </div>
          <button>ADICIONAR</button>
        </AddBebida>
      </BebidaContain>
    </div>
  );
};

export default BebidaEditar;
