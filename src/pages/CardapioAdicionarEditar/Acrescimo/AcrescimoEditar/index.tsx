import { useContext, useEffect } from "react";
import Header from "../../../../components/Header";
import { AcrescimoContain, AddAcrescimo } from "../AcrescimoAdicionar/styles";
import * as z from "zod";
import { AcrescimosContext } from "../../../../context/acrescimoContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../../lib/axios";

const AcrescimoFormSchema = z.object({
  item: z.string().nonempty(),
  valor: z.coerce.number(),
});

type AcrescimoFormInput = z.infer<typeof AcrescimoFormSchema>;

const AcrescimoEditar = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<AcrescimoFormInput>({
    resolver: zodResolver(AcrescimoFormSchema),
  });

  const { id } = useParams();
  const { editAcrescimo } = useContext(AcrescimosContext);
  const navigate = useNavigate();

  async function handleEditAcrescimo(data: AcrescimoFormInput) {
    const { item, valor } = data;
    await editAcrescimo(id, {
      item,
      valor,
    });
    navigate("/acrescimoAdicionar")
  }

  useEffect(() => {
    api.get(`/acrescimo/${id}`).then((response) => {
      reset(response.data);
    });
  }, [id, reset]);

  return (
    <div>
      <Header
        children="EDITAR ACRESCIMO"
        childrenLanche=""
        childrenBebida=""
        childrenPorcao=""
      />
      <AcrescimoContain>
        <form onSubmit={handleSubmit(handleEditAcrescimo)}>
          <AddAcrescimo>
            <div>
              <span>Nome:</span>
              <input type="text" {...register("item")} />
            </div>
            <div>
              <span>Preço:</span>
              <input type="number" step="0.01" {...register("valor")} />
            </div>
            <button type="submit" disabled={isSubmitting}>
              ALTERAR
            </button>
          </AddAcrescimo>
        </form>
      </AcrescimoContain>
    </div>
  );
};

export default AcrescimoEditar;
