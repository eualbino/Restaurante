import Header from "../../../../components/Header";
import { AcrescimoContain, AddAcrescimo } from "../AcrescimoAdicionar/styles";

const AcrescimoEditar = () => {
  return (
    <div>
      <Header
        children="EDITAR ACRESCIMO"
        childrenLanche=""
        childrenBebida=""
        childrenPorcao=""
      />
      <AcrescimoContain>
        <AddAcrescimo>
          <div>
            <span>Nome:</span>
            <input type="text" />
          </div>
          <div>
            <span>Preço:</span>
            <input type="number" />
          </div>
          <button>ADICIONAR</button>
        </AddAcrescimo>
      </AcrescimoContain>
    </div>
  );
};

export default AcrescimoEditar;
