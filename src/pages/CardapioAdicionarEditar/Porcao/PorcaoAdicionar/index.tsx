import { PencilLine, X } from "lucide-react";
import Header from "../../../../components/Header";
import SelectOptionsAdicionar from "../../SelectOptionsAdicionar";
import { NavLink } from "react-router-dom";
import {
  AddPorcao,
  CreatedPorcaoContain,
  CreatedPorcaoContainer,
  CreatedPorcaoDelete,
  CreatedPorcaoEdit,
  CreatedPorcaoText,
  PorcaoContain,
} from "./styles";

const PorcaoAdicionar = () => {
  return (
    <div>
      <Header
        children="ADICIONAR PORÇÃO"
        childrenLanche=""
        childrenBebida=""
        childrenPorcao=""
      />
      <SelectOptionsAdicionar />
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
        <CreatedPorcaoContainer>
          <CreatedPorcaoContain>
            <CreatedPorcaoText>
              <span>Mista Batata</span>
            </CreatedPorcaoText>
            <CreatedPorcaoDelete>
              <button>
                <X />
              </button>
            </CreatedPorcaoDelete>
            <CreatedPorcaoEdit>
              <button>
                <NavLink to="/porcaoEditar" title="Editar Porção">
                  <PencilLine />
                </NavLink>
              </button>
            </CreatedPorcaoEdit>
          </CreatedPorcaoContain>
        </CreatedPorcaoContainer>
      </PorcaoContain>
    </div>
  );
};

export default PorcaoAdicionar;
