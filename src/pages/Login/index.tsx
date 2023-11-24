import { Content, Lock2, LoginContainer, User2 } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { AutenticacaoContext } from "../../context/Auth/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const loginUserFormSchema = z.object({
  usuario: z.string().nonempty('O usuário é obrigatório'),
  senha: z.string().nonempty('A senha é obrigatório')
})

type loginUserFormData = z.infer<typeof loginUserFormSchema>

const Login = () => {
  const navigate = useNavigate()
  const { signin, errorMenssage } = useContext(AutenticacaoContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid }
  } = useForm<loginUserFormData>({
    resolver: zodResolver(loginUserFormSchema)
  });

  async function handleLoginUser(data: loginUserFormData) {
    const { usuario, senha } = data
    await signin({
      usuario,
      senha
    })
    navigate("/menu")
    reset()
  }

  return (
    <LoginContainer>
      <Content>
        <form onSubmit={handleSubmit(handleLoginUser)}>
          <p>USUÁRIO</p>
          <div>
            <User2 size={18} />
            <input placeholder="Usuário" {...register("usuario")} />
          </div>
          <p>SENHA</p>
          <div>
            <Lock2 size={18} />
            <input type="password" placeholder="Senha" {...register("senha")} />
          </div>
          <div>{errorMenssage && <p>{errorMenssage}</p>}</div>
          <button type="submit" disabled={!isValid}>
            Entrar
          </button>
        </form>
      </Content>
    </LoginContainer>
  );
};

export default Login;
