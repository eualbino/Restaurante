import { useForm } from "react-hook-form";
import Header from "../../../../components/Header";
import { AddPorcao, PorcaoContain } from "../PorcaoAdicionar/styles";
import * as z from "zod";
import { useEffect, useContext } from "react";
import { PorcoesContext } from "../../../../context/porcaoContext";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../../lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";

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
  const { editPorcao } = useContext(PorcoesContext);
  const navigate = useNavigate();

  async function handleEditPorcao(data: PorcaoFormInputs) {
    const { tipo, tamanho, preco } = data;
    await editPorcao(id, {
      tipo,
      tamanho,
      preco,
    });
    navigate("/porcaoAdicionar");
  }

  useEffect(() => {
    api.get(`/menu/porcao/${id}`).then((response) => {
      reset(response.data);
    });
  }, [id, reset]);

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
              <input type="number" required step="0.01" {...register("preco")} />
            </div>
            <button type="submit">ALTERAR</button>
          </AddPorcao>
        </form>
      </PorcaoContain>
    </div>
  );
};

export default PorcaoEditar;
