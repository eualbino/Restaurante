import { useForm } from "react-hook-form";
import Header from "../../../../components/Header";
import { AddBebida, BebidaContain } from "../BebidaAdicionar/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
import * as z from "zod";
import { useEffect, useContext } from "react";
import { api } from "../../../../lib/axios";
import { BebidasContext } from "../../../../context/bebidasContext";

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
  const { editBebida } = useContext(BebidasContext);
  const navigate = useNavigate();

  async function handleEditBebida(data: BebidaFormData) {
    const { nome, litragem, preco } = data;
    await editBebida(id, {
      nome,
      litragem,
      preco,
    });
    navigate("/bebidaAdicionar");
  }

  useEffect(() => {
    api.get(`/menu/bebida/${id}`).then((response) => {
      reset(response.data);
    });
  }, [id, reset]);

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
              <input type="number" required step="0.01" {...register("preco")} />
            </div>
            <button type="submit">ADICIONAR</button>
          </AddBebida>
        </form>
      </BebidaContain>
    </div>
  );
};

export default BebidaEditar;
