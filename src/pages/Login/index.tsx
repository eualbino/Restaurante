import { NavLink} from "react-router-dom";
import { Content, Lock2, LoginContainer, User2 } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";


const loginUserFormSchema = z.object({
  usuario: z.string().nonempty('O usuário é obrigatório'),
  senha: z.string().nonempty('A senha é obrigatório')
})

type loginUserFormData = z.infer<typeof loginUserFormSchema>

const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { isValid }
  } = useForm<loginUserFormData>({
    resolver: zodResolver(loginUserFormSchema)
  });

  return (
    <LoginContainer>
      <Content>
        <form onSubmit={handleSubmit()}>
          <p>USUÁRIO</p>
          <div>
            <User2 size={18} />
            <input placeholder="Usuário" {...register("usuario")} />
          </div>
          <p>SENHA</p>
          <div>
            <Lock2 size={18} />
            <input placeholder="Senha" type="password" {...register("senha")} />
          </div>
          <NavLink to="/menu" title="Menu">
            <button type="submit" disabled={!isValid}>
              Entrar
            </button>
          </NavLink>
        </form>
      </Content>
    </LoginContainer>
  );
};

export default Login;
