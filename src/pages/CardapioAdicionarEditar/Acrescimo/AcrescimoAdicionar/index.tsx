import { PencilLine, X } from "lucide-react";
import Header from "../../../../components/Header";
import SelectOptionsAdicionar from "../../SelectOptionsAdicionar";
import {
  AcrescimoContain,
  AddAcrescimo,
  CreatedAcrescimoContain,
  CreatedAcrescimoContainer,
  CreatedAcrescimoDelete,
  CreatedAcrescimoEdit,
  CreatedAcrescimoText,
} from "./styles";
import { NavLink } from "react-router-dom";

const AcrescimoAdicionar = () => {
  return (
    <div>
      <Header
        children="ADICIONAR ACRESCIMO"
        childrenLanche=""
        childrenBebida=""
        childrenPorcao=""
      />
      <SelectOptionsAdicionar />
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
        <CreatedAcrescimoContainer>
          <CreatedAcrescimoContain>
            <CreatedAcrescimoText>
              <span>Catupiry</span>
            </CreatedAcrescimoText>
            <CreatedAcrescimoDelete>
              <button>
                <X />
              </button>
            </CreatedAcrescimoDelete>
            <CreatedAcrescimoEdit>
              <button>
                <NavLink to="/acrescimoEditar" title="Editar Funcionario">
                  <PencilLine />
                </NavLink>
              </button>
            </CreatedAcrescimoEdit>
          </CreatedAcrescimoContain>
          
        </CreatedAcrescimoContainer>
      </AcrescimoContain>
    </div>
  );
};

export default AcrescimoAdicionar;
