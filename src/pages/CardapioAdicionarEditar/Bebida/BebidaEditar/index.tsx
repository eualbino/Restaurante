import { useForm } from "react-hook-form";
import Header from "../../../../components/Header";
import { AddBebida, BebidaContain } from "../BebidaAdicionar/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
import * as z from "zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { bebidaGetId, editBebida } from "../../../../data/bebidasContext";
import { useEffect } from "react";

const BebidaFormSchema = z.object({
  nome: z.string().nonempty(),
  litragem: z.string().nonempty(),
  preco: z.coerce.number(),
});

type BebidaFormData = z.infer<typeof BebidaFormSchema>;

const BebidaEditar = () => {
  const { register, handleSubmit, reset } = useForm<BebidaFormData>({
    resolver: zodResolver(BebidaFormSchema),
  });

  const { id } = useParams();
  const idParams = id ?? "";
  const navigate = useNavigate();

  const { data: bebidas, refetch } = useQuery({
    queryKey: ["bebida"],
    queryFn: () => bebidaGetId(idParams),
  });

  useEffect(() => {
    if (bebidas) {
      reset({
        nome: bebidas?.nome ?? "",
        litragem: bebidas?.litragem ?? "",
        preco: bebidas?.preco ?? 0,
      });
    }
  }, [bebidas, reset]);

  const { mutateAsync: edicaoBebida } = useMutation({
    mutationFn: (data: BebidaFormData) => editBebida(idParams, data),
    onSuccess: () => {
      refetch();
    },
  });

  async function handleEditBebida(data: BebidaFormData) {
    await edicaoBebida(data);
    navigate("/bebidaAdicionar");
  }

  return (
    <div>
      <Header
        children="EDITAR BEBIDA"
        childrenLanche=""
        childrenBebida=""
        childrenPorcao=""
      />
      <BebidaContain>
        <form onSubmit={handleSubmit(handleEditBebida)}>
          <AddBebida>
            <div>
              <span>Nome:</span>
              <input type="text" required {...register("nome")} />
            </div>
            <div>
              <span>Litragem:</span>
              <input type="text" required {...register("litragem")} />
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
            <button type="submit">ADICIONAR</button>
          </AddBebida>
        </form>
      </BebidaContain>
    </div>
  );
};

export default BebidaEditar;
