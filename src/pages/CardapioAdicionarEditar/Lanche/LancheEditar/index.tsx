import Header from "../../../../components/Header";
import {
  AddLanche,
  IngredientesCreate,
  LancheContain,
} from "../LancheAdicionar/styles";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
import { editLanche, lancheGetId } from "../../../../data/lanchesContext";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const LancheFormSchema = z.object({
  nome: z.string().nonempty("É necessário ter nome o lanche!"),
  preco: z.coerce.number(),
  ingredientes: z.string().nonempty("É necessário ter ingredientes o lanche!"),
});

type LancheFormInputs = z.infer<typeof LancheFormSchema>;

const LancheEditar = () => {
  const { register, handleSubmit, reset } = useForm<LancheFormInputs>({
    resolver: zodResolver(LancheFormSchema),
  });

  const { id } = useParams();
  const idParams = id ?? "";
  const navigate = useNavigate();

  const { data: lancheId, refetch } = useQuery({
    queryKey: ["lanches"],
    queryFn: () => lancheGetId(idParams),
  });

  useEffect(() => {
    if (lancheId) {
      reset({
        nome: lancheId?.nome ?? "",
        preco: lancheId?.preco ?? 0,
        ingredientes: lancheId?.ingredientes ?? "",
      });
    }
  }, [lancheId, reset]);

  const { mutateAsync: edicaoLanche } = useMutation({
    mutationFn: (data: LancheFormInputs) => editLanche(idParams, data),
    onSuccess: () => {
      refetch();
    },
  });

  async function handleEditLanche(data: LancheFormInputs) {
    await edicaoLanche(data);
    navigate("/lancheAdicionar");
  }

  return (
    <div>
      <Header
        children="EDITAR LANCHE"
        childrenLanche=""
        childrenBebida=""
        childrenPorcao=""
      />
      <LancheContain>
        <form onSubmit={handleSubmit(handleEditLanche)}>
          <AddLanche>
            <div>
              <span>Nome:</span>
              <input type="text" required {...register("nome")} />
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
            <IngredientesCreate>
              <span>Ingredientes</span>
              <textarea
                cols={27}
                rows={5}
                placeholder="Ex: Dois Hamburguer, frango, catupiry..."
                required
                {...register("ingredientes")}
              />
            </IngredientesCreate>
            <button type="submit">ALTERAR</button>
          </AddLanche>
        </form>
      </LancheContain>
    </div>
  );
};

export default LancheEditar;
