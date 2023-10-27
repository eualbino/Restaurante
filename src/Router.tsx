import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AcrescimoAdicionar from "./pages/CardapioAdicionarEditar/Acrescimo/AcrescimoAdicionar";
import AcrescimoEditar from "./pages/CardapioAdicionarEditar/Acrescimo/AcrescimoEditar";
import BebidaAdicionar from "./pages/CardapioAdicionarEditar/Bebida/BebidaAdicionar";
import BebidaEditar from "./pages/CardapioAdicionarEditar/Bebida/BebidaEditar";
import FuncionarioAdicionar from "./pages/Funcionario/FuncionarioAdicionar";
import FuncionarioEditar from "./pages/Funcionario/FuncionarioEditar";
import LancheAdicionar from "./pages/CardapioAdicionarEditar/Lanche/LancheAdicionar";
import LancheEditar from "./pages/CardapioAdicionarEditar/Lanche/LancheEditar";
import Menu from "./pages/Menu";
import BebidasMenu from "./pages/Menu/BebidasMenu";
import LanchesMenu from "./pages/Menu/LanchesMenu";
import PorcoesMenu from "./pages/Menu/PorcoesMenu";
import MesaAdicionarDeletar from "./pages/MesaAdicionarDeletar";
import Observacao from "./pages/Observacao";
import PedidosMesas from "./pages/Mesas/PedidosMesas";
import PorcaoAdicionar from "./pages/CardapioAdicionarEditar/Porcao/PorcaoAdicionar";
import PorcaoEditar from "./pages/CardapioAdicionarEditar/Porcao/PorcaoEditar";
import Mesas from "./pages/Mesas";
import BebidasComprar from "./pages/MenuComprar/BebidasMenu";
import LanchesComprar from "./pages/MenuComprar/LanchesMenu";
import PorcoesComprar from "./pages/MenuComprar/PorcoesMenu";
import RequireAuth from "./context/Auth/RequireAuth";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/menu" element={<RequireAuth><Menu /></RequireAuth>} />
            <Route path="/mesas" element={<RequireAuth><Mesas /></RequireAuth>} />
            <Route path="/acrescimoAdicionar" element={<RequireAuth><AcrescimoAdicionar /></RequireAuth>} />
            <Route path="/acrescimoEditar/:id" element={<RequireAuth><AcrescimoEditar /></RequireAuth>} />
            <Route path="/bebidaAdicionar" element={<RequireAuth><BebidaAdicionar /></RequireAuth>} />
            <Route path="/bebidaEditar/:id" element={<RequireAuth><BebidaEditar /></RequireAuth>} />
            <Route path="/funcionarioAdicionar" element={<RequireAuth><FuncionarioAdicionar /></RequireAuth>} />
            <Route path="/funcionarioEditar/:id" element={<RequireAuth><FuncionarioEditar /></RequireAuth>} />
            <Route path="/lancheAdicionar" element={<RequireAuth><LancheAdicionar /></RequireAuth>} />
            <Route path="/lancheEditar/:id" element={<RequireAuth><LancheEditar /></RequireAuth>} />
            <Route path="/bebidasMenu" element={<RequireAuth><BebidasMenu /></RequireAuth>} />
            <Route path="/lanchesMenu" element={<RequireAuth><LanchesMenu /></RequireAuth>} />
            <Route path="/porcoesMenu" element={<RequireAuth><PorcoesMenu /></RequireAuth>} />
            <Route path="/mesaAdicionarDeletar" element={<RequireAuth><MesaAdicionarDeletar /></RequireAuth>} />
            <Route path="/observacao/:id" element={<RequireAuth><Observacao /></RequireAuth>} />
            <Route path="/pedidosMesas/:id" element={<RequireAuth><PedidosMesas /></RequireAuth>} />
            <Route path="/porcaoAdicionar" element={<RequireAuth><PorcaoAdicionar /></RequireAuth>} />
            <Route path="/porcaoEditar/:id" element={<RequireAuth><PorcaoEditar /></RequireAuth>} />
            <Route path="/bebidaComprar" element={<RequireAuth><BebidasComprar /></RequireAuth>} />
            <Route path="/lancheComprar" element={<RequireAuth><LanchesComprar /></RequireAuth>} />
            <Route path="/porcaoComprar" element={<RequireAuth><PorcoesComprar /></RequireAuth>} />
        </Routes>
    );
}
export default Router;