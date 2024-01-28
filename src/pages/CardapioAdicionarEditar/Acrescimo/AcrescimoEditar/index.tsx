import Header from "../../../../components/Header";
import { AcrescimoContain, AddAcrescimo } from "../AcrescimoAdicionar/styles";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  acrescimoGetId,
  editAcrescimo,
} from "../../../../data/acrescimoContext";
import { useEffect } from "react";

const AcrescimoFormSchema = z.object({
  item: z.string().nonempty("É necessário ter nome de acréscimo!"),
  valor: z.coerce.number(),
});

type AcrescimoFormInput = z.infer<typeof AcrescimoFormSchema>;

const AcrescimoEditar = () => {

  const { register, handleSubmit, reset } = useForm<AcrescimoFormInput>({
    resolver: zodResolver(AcrescimoFormSchema),
  });

  const { id } = useParams();
  const idParams = id ?? "";
  const navigate = useNavigate();

  const { data: acrescimoId, refetch } = useQuery({
    queryKey: ["acrescimo"],
    queryFn: () => acrescimoGetId(idParams),
  });

  useEffect(() => {
    if (acrescimoId) {
      reset({
        item: acrescimoId?.item ?? "",
        valor: acrescimoId?.valor ?? 0,
      });
    }
  }, [acrescimoId, reset]);

  const { mutateAsync: edicaoAcrescimo } = useMutation({
    mutationFn: (data: AcrescimoFormInput) => editAcrescimo(idParams, data),
    onSuccess: () => {
      refetch()
    },
  });

  async function handleEditAcrescimo(data: AcrescimoFormInput) {
    await edicaoAcrescimo(data);
    navigate("/acrescimoAdicionar")
  }

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
            <button type="submit">ALTERAR</button>
          </AddAcrescimo>
        </form>
      </AcrescimoContain>
    </div>
  );
};

export default AcrescimoEditar;
