import { PencilLine, X } from "lucide-react";
import Header from "../../../components/Header";
import {
  AddEmployee,
  CreatedEmployeesContain,
  CreatedEmployeesContainer,
  CreatedEmployeesDelete,
  CreatedEmployeesEdit,
  CreatedEmployeesText,
  EmployeeContain,
} from "./styles";

const FuncionarioAdicionar = () => {
  return (
    <div>
      <Header children="CONFIGURAÇÕES DE FUNCIONARIOS"></Header>
      <EmployeeContain>
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
            <span>Usuário:</span>
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
        <CreatedEmployeesContainer>
          <CreatedEmployeesContain>
            <CreatedEmployeesText>
              <span>Albino</span>
            </CreatedEmployeesText>
            <CreatedEmployeesDelete>
              <button>
                <X />
              </button>
            </CreatedEmployeesDelete>
            <CreatedEmployeesEdit>
              <button>
                <PencilLine />
              </button>
            </CreatedEmployeesEdit>
          </CreatedEmployeesContain>

          <CreatedEmployeesContain>
            <CreatedEmployeesText>
              <span>Leonardo</span>
            </CreatedEmployeesText>
            <CreatedEmployeesDelete>
              <button>
                <X />
              </button>
            </CreatedEmployeesDelete>
            <CreatedEmployeesEdit>
              <button>
                <PencilLine />
              </button>
            </CreatedEmployeesEdit>
          </CreatedEmployeesContain>

          <CreatedEmployeesContain>
            <CreatedEmployeesText>
              <span>Chris</span>
            </CreatedEmployeesText>
            <CreatedEmployeesDelete>
              <button>
                <X />
              </button>
            </CreatedEmployeesDelete>
            <CreatedEmployeesEdit>
              <button>
                <PencilLine />
              </button>
            </CreatedEmployeesEdit>
          </CreatedEmployeesContain>

          <CreatedEmployeesContain>
            <CreatedEmployeesText>
              <span>Marcos</span>
            </CreatedEmployeesText>
            <CreatedEmployeesDelete>
              <button>
                <X />
              </button>
            </CreatedEmployeesDelete>
            <CreatedEmployeesEdit>
              <button>
                <PencilLine />
              </button>
            </CreatedEmployeesEdit>
          </CreatedEmployeesContain>
        </CreatedEmployeesContainer>
      </EmployeeContain>
    </div>
  );
};

export default FuncionarioAdicionar;
