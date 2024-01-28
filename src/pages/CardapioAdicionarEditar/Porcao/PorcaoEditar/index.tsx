import { useForm } from "react-hook-form";
import Header from "../../../../components/Header";
import { AddPorcao, PorcaoContain } from "../PorcaoAdicionar/styles";
import * as z from "zod";
import { useNavigate, useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { editPorcao, porcaoGetId } from "../../../../data/porcaoContext";
import { useEffect } from "react";

const PorcaoFormSchema = z.object({
  tipo: z.string().nonempty(),
  preco: z.coerce.number(),
  tamanho: z.string().nonempty(),
});

type PorcaoFormInputs = z.infer<typeof PorcaoFormSchema>;

const PorcaoEditar = () => {
  const { register, handleSubmit, reset } = useForm<PorcaoFormInputs>({
    resolver: zodResolver(PorcaoFormSchema),
  });

  const { id } = useParams();
  const idParams = id ?? "";
  const navigate = useNavigate();

  const { data: porcaoId, refetch } = useQuery({
    queryKey: ["pocoes"],
    queryFn: () => porcaoGetId(idParams),
  });

  useEffect(() => {
    if (porcaoId) {
      reset({
        tipo: porcaoId?.tipo ?? "",
        preco: porcaoId?.preco ?? 0,
        tamanho: porcaoId?.tamanho ?? "",
      });
    }
  }, [porcaoId, reset]);

  const { mutateAsync: edicaoPorcao } = useMutation({
    mutationFn: (data: PorcaoFormInputs) => editPorcao(idParams, data),
    onSuccess: () => {
      refetch();
    },
  });

  async function handleEditPorcao(data: PorcaoFormInputs) {
    await edicaoPorcao(data);
    navigate("/porcaoAdicionar");
  }

  return (
    <div>
      <Header
        children="EDITAR PORÇÃO"
        childrenLanche=""
        childrenBebida=""
        childrenPorcao=""
      />
      <PorcaoContain>
        <form onSubmit={handleSubmit(handleEditPorcao)}>
          <AddPorcao>
            <div>
              <span>Nome:</span>
              <input type="text" required {...register("tipo")} />
            </div>
            <div>
              <span>Tamanho:</span>
              <input type="text" required {...register("tamanho")} />
            </div>
            <div>
              <span>Preço:</span>
              <input
                type="number"
                required
                step="0.01"
                {...register("preco")}
              />
            </div>
            <button type="submit">ALTERAR</button>
          </AddPorcao>
        </form>
      </PorcaoContain>
    </div>
  );
};

export default PorcaoEditar;
