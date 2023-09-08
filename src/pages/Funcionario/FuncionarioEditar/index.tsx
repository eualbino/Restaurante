import Header from "../../../components/Header";
import { AddEmployee } from "../FuncionarioAdicionar/styles";
import { EmployeeEditContain } from "./styles";

const FuncionarioEditar = () => {
  return (
    <div>
      <Header
        children="EDITAR FUNCIONARIOS"
        childrenLanche=""
        childrenBebida=""
        childrenPorcao=""
      />
      <EmployeeEditContain>
        <AddEmployee>
          <div>
            <span>Nome:</span>
            <input type="text" />
          </div>
          <div>
            <span>Idade:</span>
            <input type="number" />
          </div>
          <div>
            <span>Função:</span>
            <input type="text" />
          </div>
          <div>
            <span>Email:</span>
            <input type="email" />
          </div>
          <div>
            <span>Senha:</span>
            <input type="password" />
          </div>
          <button>ADICIONAR</button>
        </AddEmployee>
      </EmployeeEditContain>
    </div>
  );
};

export default FuncionarioEditar;
