import { NavLink } from "react-router-dom";
import { Content, Lock2, LoginContainer, User2 } from "./styles";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({});

  function Seila() {
    //Essa função vai ser alterada
  }

  return (
    <LoginContainer>
      <Content>
        <form onSubmit={handleSubmit(Seila)}>
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
