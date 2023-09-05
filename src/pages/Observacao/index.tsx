import * as z from "zod";
import Header from "../../components/Header";
import {
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
import { useState } from "react";
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

  return (
    <ObservationContainer>
      <Header />
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
        
        <InsertedAddition></InsertedAddition>
        </SepareteObservationFromInsert>
        <InsertAddition>
          <span>DESEJA INSERIR ALGUM ACRÉSCIMO?</span>
          <ProductsInsert>
            <div><button>Cebola <span>R$25,00</span></button></div>
            <div><button></button></div>
            <div><button></button></div>
            
            
          </ProductsInsert>
        
        </InsertAddition>
      </ObservationContain>
    </ObservationContainer>
  );
};

export default Observacao;
