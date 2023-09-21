import * as z from "zod";
import Header from "../../components/Header";
import {
  FinishButton,
  InsertAddition,
  InsertedAddition,
  ObservationContain,
  ObservationContainer,
  ProductsInsert,
  SepareteObservationFromInsert,
  TextObservacao,
} from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { CheckCircle } from "phosphor-react";
import { X } from "lucide-react";
import { AcrescimosContext } from "../../context/acrescimoContext";
import { priceFormatter } from "../../utils/formatter";

const textObservationSchema = z.object({
  observation: z.string(),
});

type textObservationData = z.infer<typeof textObservationSchema>;

const Observacao = () => {
  const [output, setOutput] = useState("");

  const { register, handleSubmit } = useForm<textObservationData>({
    resolver: zodResolver(textObservationSchema),
  });

  function observationValue(data: any) {
    setOutput(JSON.stringify(data, null, 1));
  }

  const { acrescimos } = useContext(AcrescimosContext);

  return (
    <ObservationContainer>
      <Header childrenLanche="" childrenBebida="" childrenPorcao="" />
      <ObservationContain>
        <SepareteObservationFromInsert>
          <TextObservacao>
            <span>DESEJA INSERIR ALGUMA OBSERVAÇÃO?</span>
            <form onSubmit={handleSubmit(observationValue)}>
              <textarea
                cols={40}
                rows={6}
                placeholder="Ex: sem alface, sem tomate"
                {...register("observation")}
              ></textarea>
            </form>
            <pre>{output}</pre>
          </TextObservacao>

          <InsertedAddition>
            <div>
              <span>2x Cattupiry - R$12,00</span>
              <button>
                <X />
              </button>
            </div>
          </InsertedAddition>
        </SepareteObservationFromInsert>
        <InsertAddition>
          <span>DESEJA INSERIR ALGUM ACRÉSCIMO?</span>
          <ProductsInsert>
            {acrescimos.map((acrescimo) => {
              return (
                <div>
                  <button>
                    {acrescimo.item} <span>{priceFormatter.format(acrescimo.valor)}</span>
                  </button>
                </div>
              );
            })}
          </ProductsInsert>
        </InsertAddition>
        <FinishButton>
          <span>Finalizar</span>
          <CheckCircle size={24} color="#ffffff" weight="fill" />
        </FinishButton>
      </ObservationContain>
    </ObservationContainer>
  );
};

export default Observacao;
