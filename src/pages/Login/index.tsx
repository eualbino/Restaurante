import { NavLink } from "react-router-dom";
import { Content, Lock2, LoginContainer, User2 } from "./styles";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";


const loginUserFormSchema = z.object({
  usuario: z.string().nonempty('O usuário é obrigatório'),
  password: z.string().nonempty('A senha é obrigatório')
})

type loginUserFormData = z.infer<typeof loginUserFormSchema>

const Login = () => {
  const [output, setOutput] = useState('')

  const {
    register,
    handleSubmit,
    formState: {isValid}
  } = useForm<loginUserFormData>({
    resolver: zodResolver(loginUserFormSchema)
  });

  function loginUser(data: any) {
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <LoginContainer>
      <Content>
        <form onSubmit={handleSubmit(loginUser)}>
          <p>USUÁRIO</p>
          <div>
            <User2 size={18} />
            <input placeholder="Usuário" {...register("usuario")} />
          </div>
          <p>SENHA</p>
          <div>
            <Lock2 size={18} />
            <input placeholder="Senha" type="password" {...register("password")} />
          </div>
          <NavLink to="/menu" title="Menu">
            <button type="submit" disabled={ !isValid }>
              Entrar
            </button>
          </NavLink>
        </form>
        <pre>{output}</pre>
      </Content>
    </LoginContainer>
  );
};

export default Login;
