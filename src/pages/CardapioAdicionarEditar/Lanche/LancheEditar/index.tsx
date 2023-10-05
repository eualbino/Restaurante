import Header from "../../../../components/Header";
import {
  AddLanche,
  IngredientesCreate,
  LancheContain,
} from "../LancheAdicionar/styles";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../../../lib/axios";
import { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LanchesContext } from "../../../../context/lanchesContext";

const LancheFormSchema = z.object({
  nome: z.string().nonempty(),
  preco: z.coerce.number(),
  ingredientes: z.string().nonempty(),
});

type LancheFormInputs = z.infer<typeof LancheFormSchema>;

const LancheEditar = () => {
  const { register, handleSubmit, reset } = useForm<LancheFormInputs>({
    resolver: zodResolver(LancheFormSchema),
  });

  const { id } = useParams();
  const { editLanche } = useContext(LanchesContext);
  const navigate = useNavigate();

  async function handleEditLanche(data: LancheFormInputs) {
    const { nome, preco, ingredientes } = data;
    await editLanche(id, {
      nome,
      preco,
      ingredientes,
    });
    navigate("/lancheAdicionar");
  }

  useEffect(() => {
    api.get(`/menu/lanche/${id}`).then((response) => {
      reset(response.data);
    });
  }, [id, reset]);

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
              <input type="number" required step="0.01" {...register("preco")} />
            </div>
            <IngredientesCreate>
              <span>Ingredientes</span>
              <textarea
                cols={27}
                rows={5}
                placeholder="Ex: Dois Hamburguer, frango, catupiry..."
                required
                {...register("ingredientes")}
              ></textarea>
            </IngredientesCreate>
            <button type="submit">ALTERAR</button>
          </AddLanche>
        </form>
      </LancheContain>
    </div>
  );
};

export default LancheEditar;
