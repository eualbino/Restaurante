import Header from "../../../../components/Header";
import {
  AddLanche,
  IngredientesCreate,
  LancheContain,
} from "../LancheAdicionar/styles";

const LancheEditar = () => {
  return (
    <div>
      <Header
        children="EDITAR LANCHE"
        childrenLanche=""
        childrenBebida=""
        childrenPorcao=""
      />
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
      </LancheContain>
    </div>
  );
};

export default LancheEditar;
