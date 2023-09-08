import { NavLink } from "react-router-dom";
import Header from "../../../../components/Header";
import SelectOptionsAdicionar from "../../SelectOptionsAdicionar";
import { PencilLine, X } from "lucide-react";
import {
  AddLanche,
  CreatedLancheContain,
  CreatedLancheContainer,
  CreatedLancheDelete,
  CreatedLancheEdit,
  CreatedLancheText,
  IngredientesCreate,
  LancheContain,
} from "./styles";

const LancheAdicionar = () => {
  return (
    <div>
      <Header
        children="ADICIONAR LANCHE"
        childrenLanche=""
        childrenBebida=""
        childrenPorcao=""
      />
      <SelectOptionsAdicionar />
      <LancheContain>
        <AddLanche>
          <div>
            <span>Nome:</span>
            <input type="text" />
          </div>
          <div>
            <span>Preço:</span>
            <input type="number" />
          </div>
          <IngredientesCreate>
            <span>Ingledientes</span>
            <textarea
              cols={27}
              rows={5}
              placeholder="Ex: Dois Hamburguer, frango, catupiry..."
            ></textarea>
          </IngredientesCreate>
          <button>ADICIONAR</button>
        </AddLanche>
        <CreatedLancheContainer>
          <CreatedLancheContain>
            <CreatedLancheText>
              <span>X-Tudo</span>
            </CreatedLancheText>
            <CreatedLancheDelete>
              <button>
                <X />
              </button>
            </CreatedLancheDelete>
            <CreatedLancheEdit>
              <button>
                <NavLink to="/lancheEditar" title="Editar Funcionario">
                  <PencilLine />
                </NavLink>
              </button>
            </CreatedLancheEdit>
          </CreatedLancheContain>
        </CreatedLancheContainer>
      </LancheContain>
    </div>
  );
};

export default LancheAdicionar;
