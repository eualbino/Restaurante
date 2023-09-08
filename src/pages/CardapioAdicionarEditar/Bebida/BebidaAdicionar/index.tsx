import { PencilLine, X } from "lucide-react";
import Header from "../../../../components/Header";
import SelectOptionsAdicionar from "../../SelectOptionsAdicionar";
import {
  AddBebida,
  BebidaContain,
  CreatedBebidaContain,
  CreatedBebidaContainer,
  CreatedBebidaDelete,
  CreatedBebidaEdit,
  CreatedBebidaText,
} from "./styles";
import { NavLink } from "react-router-dom";

const BebidaAdicionar = () => {
  return (
    <div>
      <Header
        children="ADICIONAR BEBIDA"
        childrenLanche=""
        childrenBebida=""
        childrenPorcao=""
      />
      <SelectOptionsAdicionar />
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
        <CreatedBebidaContainer>
          <CreatedBebidaContain>
            <CreatedBebidaText>
              <span>Guaraná</span>
            </CreatedBebidaText>
            <CreatedBebidaDelete>
              <button>
                <X />
              </button>
            </CreatedBebidaDelete>
            <CreatedBebidaEdit>
              <button>
                <NavLink to="/bebidaEditar" title="Editar Funcionario">
                  <PencilLine />
                </NavLink>
              </button>
            </CreatedBebidaEdit>
          </CreatedBebidaContain>
        </CreatedBebidaContainer>
      </BebidaContain>
    </div>
  );
};

export default BebidaAdicionar;
