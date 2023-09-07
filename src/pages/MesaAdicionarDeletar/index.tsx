import { X } from "lucide-react";
import Header from "../../components/Header";
import {
  AddTable,
  CreatedTablesContain,
  CreatedTablesContainer,
  CreatedTablesDelete,
  CreatedTablesText,
  TableSetupContain,
} from "./styles";

const MesaAdicionarDeletar = () => {
  return (
    <div>
      <Header children="CONFIGURAÇÕES DE MESAS" />
      <TableSetupContain>
        <AddTable>
          <div>
            <span>N da Mesa:</span>
            <input type="text" />
          </div>
          <button>ADICIONAR</button>
        </AddTable>
        <CreatedTablesContainer>
          <CreatedTablesContain>
            <CreatedTablesText>
              <span>Mesa 1</span>
            </CreatedTablesText>
            <CreatedTablesDelete>
              <button>
                <X />
              </button>
            </CreatedTablesDelete>
          </CreatedTablesContain>
          <CreatedTablesContain>
            <CreatedTablesText>
              <span>Mesa 2</span>
            </CreatedTablesText>
            <CreatedTablesDelete>
              <button>
                <X />
              </button>
            </CreatedTablesDelete>
          </CreatedTablesContain>
          <CreatedTablesContain>
            <CreatedTablesText>
              <span>Mesa 3</span>
            </CreatedTablesText>
            <CreatedTablesDelete>
              <button>
                <X />
              </button>
            </CreatedTablesDelete>
          </CreatedTablesContain>
          <CreatedTablesContain>
            <CreatedTablesText>
              <span>Mesa 4</span>
            </CreatedTablesText>
            <CreatedTablesDelete>
              <button>
                <X />
              </button>
            </CreatedTablesDelete>
          </CreatedTablesContain>
        </CreatedTablesContainer>
      </TableSetupContain>
    </div>
  );
};

export default MesaAdicionarDeletar;
