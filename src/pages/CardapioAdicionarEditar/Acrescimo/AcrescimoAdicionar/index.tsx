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
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  acrescimoGet,
  createAcrescimo,
  deleteAcrescimo,
} from "../../../../data/acrescimoContext";

const newAcrescimoFormSchema = z.object({
  item: z.string().nonempty(),
  valor: z.coerce.number(),
});

type NewAcrescimoFormInput = z.infer<typeof newAcrescimoFormSchema>;

const AcrescimoAdicionar = () => {
  const { register, handleSubmit, reset } = useForm<NewAcrescimoFormInput>({
    resolver: zodResolver(newAcrescimoFormSchema),
  });

  const { data: acrescimos, refetch } = useQuery({
    queryKey: ["acrescimos"],
    queryFn: acrescimoGet,
  });

  const { mutateAsync: criacaoAcrescimo } = useMutation({
    mutationFn: createAcrescimo,
    onSuccess: () => {
      refetch();
    },
  });

  const { mutateAsync: deletarAcrescimo } = useMutation({
    mutationFn: deleteAcrescimo,
    onSuccess: () => {
      refetch();
    },
  });

  async function handleCreateNewAcrescimo(data: NewAcrescimoFormInput) {
    await criacaoAcrescimo(data);
    reset();
  }

  async function handleDeleteAcrescimo(id: number) {
    await deletarAcrescimo(id);
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
              <input
                type="number"
                required
                step="0.01"
                {...register("valor")}
              />
            </div>
            <button type="submit">ADICIONAR</button>
          </AddAcrescimo>
        </form>
        <CreatedAcrescimoContainer>
          {acrescimos?.map((acrescimo) => {
            return (
              <CreatedAcrescimoContain key={acrescimo.id}>
                <CreatedAcrescimoText>
                  <span>{acrescimo.item}</span>
                </CreatedAcrescimoText>
                <CreatedAcrescimoDelete>
                  <button
                    type="submit"
                    onClick={() => handleDeleteAcrescimo(acrescimo.id)}
                  >
                    <X />
                  </button>
                </CreatedAcrescimoDelete>
                <CreatedAcrescimoEdit>
                  <button type="button">
                    <NavLink
                      to={{ pathname: `/acrescimoEditar/${acrescimo.id}` }}
                      title="Editar Funcionario"
                    >
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
