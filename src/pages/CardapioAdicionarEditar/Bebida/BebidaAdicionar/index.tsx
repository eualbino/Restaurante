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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const newBebidaFormSchema = z.object({
  nome: z.string(),
  litragem: z.string(),
  preco: z.coerce.number(),
})

type newBebidaFormData = z.infer<typeof newBebidaFormSchema>

const BebidaAdicionar = () => {
  const { createBebida, bebidas } = useContext(BebidasContext);

  const{
    register,
    handleSubmit,
  } = useForm<newBebidaFormData>({
    resolver: zodResolver(newBebidaFormSchema)
  })

  async function handleCreateNewBebida(data: newBebidaFormData) {
    
    const { nome, litragem, preco } = data;
    console.log("Bebida antes")
    await createBebida({
      nome,
      litragem,
      preco,
    });
    console.log("seila1")
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
              <input placeholder="Nome" type="text" {...register("nome")} />
            </div>
            <div>
              <span>Litragem:</span>
              <input
                placeholder="litragem"
                type="text"
                {...register("litragem")}
              />
            </div>
            <div>
              <span>Preço:</span>
              <input placeholder="Preco" type="number" {...register("preco")} />
            </div>
            <button type="submit">
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
