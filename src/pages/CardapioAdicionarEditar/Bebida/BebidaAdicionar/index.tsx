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
import * as z from "zod";
import { useContext } from "react";
import { BebidasContext } from "../../../../context/bebidasContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newBebidaFormSchema = z.object({
  nome: z.string(),
  litragem: z.string(),
  preco: z.number(),
});

type NewBebidaFormInputs = z.infer<typeof newBebidaFormSchema>;

const BebidaAdicionar = () => {
  const { createBebida, bebidas } = useContext(BebidasContext);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewBebidaFormInputs>({
    resolver: zodResolver(newBebidaFormSchema),
  });

  async function handleCreateNewBebida(data: NewBebidaFormInputs) {
    const { nome, litragem, preco } = data;

    await createBebida({
      nome,
      litragem,
      preco,
    });
    reset();
  }

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
        <form onSubmit={handleSubmit(handleCreateNewBebida)}>
          <AddBebida>
            <div>
              <span>Nome:</span>
              <input type="text" {...register("nome")} />
            </div>
            <div>
              <span>Litragem:</span>
              <input type="text" {...register("litragem")} />
            </div>
            <div>
              <span>Preço:</span>
              <input type="number" {...register("preco")} />
            </div>
            <button type="submit" disabled={isSubmitting}>
              ADICIONAR
            </button>
          </AddBebida>
        </form>
        <CreatedBebidaContainer>
          {bebidas.map((bebida) => {
            return (
              <CreatedBebidaContain key={bebida.id}>
                <CreatedBebidaText>
                  <span>{bebida.nome}</span>
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
            );
          })}
        </CreatedBebidaContainer>
      </BebidaContain>
    </div>
  );
};

export default BebidaAdicionar;
