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
import * as z from "zod";
import { useContext } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LanchesContext } from "../../../../context/lanchesContext";


const newLancheFormSchema = z.object({
  nome: z.string(),
  preco: z.coerce.number(),
  ingredientes: z.string(),
});

type NewLancheFormInputs = z.infer<typeof newLancheFormSchema>;

const LancheAdicionar = () => {
  const { createLanche, lanches } = useContext(LanchesContext);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewLancheFormInputs>({
    resolver: zodResolver(newLancheFormSchema),
  });

  async function handleCreateNewLanche(data: NewLancheFormInputs) {
    const { nome, preco, ingredientes } = data;

    await createLanche({
      nome,
      preco,
      ingredientes,
    });
    reset();
  }

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
        <form onSubmit={handleSubmit(handleCreateNewLanche)}>
          <AddLanche>
            <div>
              <span>Nome:</span>
              <input type="text" {...register("nome")} />
            </div>
            <div>
              <span>Preço:</span>
              <input type="number" {...register("preco")} />
            </div>
            <IngredientesCreate>
              <span>Ingledientes</span>
              <textarea
                cols={27}
                rows={5}
                placeholder="Ex: Dois Hamburguer, frango, catupiry..."
                {...register("ingredientes")}
              ></textarea>
            </IngredientesCreate>
            <button type="submit" disabled={isSubmitting}>
              ADICIONAR
            </button>
          </AddLanche>
        </form>
        <CreatedLancheContainer>
          {lanches.map((lanche) => {
            return (
              <CreatedLancheContain key={lanche.id}>
                <CreatedLancheText>
                  <span>{lanche.nome}</span>
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
            );
          })}
        </CreatedLancheContainer>
      </LancheContain>
    </div>
  );
};

export default LancheAdicionar;
