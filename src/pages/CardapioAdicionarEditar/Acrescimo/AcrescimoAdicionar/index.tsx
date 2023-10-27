import { PencilLine, X } from "lucide-react";
import Header from "../../../../components/Header";
import SelectOptionsAdicionar from "../../SelectOptionsAdicionar";
import {
  AcrescimoContain,
  AddAcrescimo,
  CreatedAcrescimoContain,
  CreatedAcrescimoContainer,
  CreatedAcrescimoDelete,
  CreatedAcrescimoEdit,
  CreatedAcrescimoText,
} from "./styles";
import { NavLink } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useContext } from "react";
import { AcrescimosContext } from "../../../../context/acrescimoContext";
import { useForm } from "react-hook-form";

const newAcrescimoFormSchema = z.object({
  item: z.string().nonempty(),
  valor: z.coerce.number()
});

type NewAcrescimoFormInput = z.infer<typeof newAcrescimoFormSchema>;

const AcrescimoAdicionar = () => {
  const { createAcrescimo, acrescimos, deleteAcrescimo } =
    useContext(AcrescimosContext);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting},
    reset,
  } = useForm<NewAcrescimoFormInput>({
    resolver: zodResolver(newAcrescimoFormSchema),
  });

  async function handleCreateNewAcrescimo(data: NewAcrescimoFormInput) {
    const { item, valor } = data;

    await createAcrescimo({
      item,
      valor,
    });
    reset();
  }

  async function handleDeleteAcrescimo(id: number) {
    await deleteAcrescimo(id);
  }
  return (
    <div>
      <Header
        children="ADICIONAR ACRESCIMO"
        childrenLanche=""
        childrenBebida=""
        childrenPorcao=""
      />
      <SelectOptionsAdicionar />
      <AcrescimoContain>
        <form onSubmit={handleSubmit(handleCreateNewAcrescimo)}>
          <AddAcrescimo>
            <div>
              <span>Nome:</span>
              <input type="text" required {...register("item")} />
            </div>
            <div>
              <span>Preço:</span>
              <input type="number" required step="0.01" {...register("valor")} />
            </div>
            <button type="submit" disabled={isSubmitting}>
              ADICIONAR
            </button>
          </AddAcrescimo>
        </form>
        <CreatedAcrescimoContainer>
          {acrescimos.map((acrescimo) => {
            return (
              <CreatedAcrescimoContain key={acrescimo.id}>
                <CreatedAcrescimoText>
                  <span>{acrescimo.item}</span>
                </CreatedAcrescimoText>
                <CreatedAcrescimoDelete>
                  <button onClick={() => handleDeleteAcrescimo(acrescimo.id)}>
                    <X />
                  </button>
                </CreatedAcrescimoDelete>
                <CreatedAcrescimoEdit>
                  <button>
                    <NavLink to={{pathname: `/acrescimoEditar/${acrescimo.id}`}} title="Editar Funcionario">
                      <PencilLine />
                    </NavLink>
                  </button>
                </CreatedAcrescimoEdit>
              </CreatedAcrescimoContain>
            );
          })}
        </CreatedAcrescimoContainer>
      </AcrescimoContain>
    </div>
  );
};

export default AcrescimoAdicionar;