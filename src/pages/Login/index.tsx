import { Content, Lock2, LoginContainer, User2 } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { AutenticacaoContext } from "../../context/Auth/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const loginUserFormSchema = z.object({
  username: z.string().nonempty('O usuário é obrigatório'),
  password: z.string().nonempty('A senha é obrigatório')
})

type loginUserFormData = z.infer<typeof loginUserFormSchema>

const Login = () => {
  const navigate = useNavigate()
  const { signin } = useContext(AutenticacaoContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid }
  } = useForm<loginUserFormData>({
    resolver: zodResolver(loginUserFormSchema)
  });

  async function handleLoginUser(data: loginUserFormData) {
    const { username, password } = data
    await signin(
      username,
      password
    )
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
            <input placeholder="Usuário" {...register("username")} />
          </div>
          <p>SENHA</p>
          <div>
            <Lock2 size={18} />
            <input placeholder="Senha" {...register("password")} />
          </div>
          <button type="submit" disabled={!isValid}>
            Entrar
          </button>
        </form>
      </Content>
    </LoginContainer>
  );
};

export default Login;
