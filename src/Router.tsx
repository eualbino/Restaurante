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
import AdminAuthority from "./context/Auth/Authority/AdminAuthority";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/menu" element={<RequireAuth><Menu /></RequireAuth>} />
            <Route path="/mesas" element={<RequireAuth><Mesas /></RequireAuth>} />
            <Route path="/acrescimoAdicionar" element={<AdminAuthority><RequireAuth><AcrescimoAdicionar /></RequireAuth></AdminAuthority>} />
            <Route path="/acrescimoEditar/:id" element={<AdminAuthority><RequireAuth><AcrescimoEditar /></RequireAuth></AdminAuthority>} />
            <Route path="/bebidaAdicionar" element={<AdminAuthority><RequireAuth><BebidaAdicionar /></RequireAuth></AdminAuthority>} />
            <Route path="/bebidaEditar/:id" element={<AdminAuthority><RequireAuth><BebidaEditar /></RequireAuth></AdminAuthority>} />
            <Route path="/funcionarioAdicionar" element={<AdminAuthority><RequireAuth><FuncionarioAdicionar /></RequireAuth></AdminAuthority>} />
            <Route path="/funcionarioEditar/:id" element={<AdminAuthority><RequireAuth><FuncionarioEditar /></RequireAuth></AdminAuthority>} />
            <Route path="/lancheAdicionar" element={<AdminAuthority><RequireAuth><LancheAdicionar /></RequireAuth></AdminAuthority>} />
            <Route path="/lancheEditar/:id" element={<AdminAuthority><RequireAuth><LancheEditar /></RequireAuth></AdminAuthority>} />
            <Route path="/bebidasMenu" element={<RequireAuth><BebidasMenu /></RequireAuth>} />
            <Route path="/lanchesMenu" element={<RequireAuth><LanchesMenu /></RequireAuth>} />
            <Route path="/porcoesMenu" element={<RequireAuth><PorcoesMenu /></RequireAuth>} />
            <Route path="/mesaAdicionarDeletar" element={<AdminAuthority><RequireAuth><MesaAdicionarDeletar /></RequireAuth></AdminAuthority>} />
            <Route path="/observacao/:idMesa/:idProduto" element={<RequireAuth><Observacao /></RequireAuth>} />
            <Route path="/pedidosMesas/:id" element={<RequireAuth><PedidosMesas /></RequireAuth>} />
            <Route path="/porcaoAdicionar" element={<AdminAuthority><RequireAuth><PorcaoAdicionar /></RequireAuth></AdminAuthority>} />
            <Route path="/porcaoEditar/:id" element={<AdminAuthority><RequireAuth><PorcaoEditar /></RequireAuth></AdminAuthority>} />
            <Route path="/bebidaComprar/:id" element={<RequireAuth><BebidasComprar /></RequireAuth>} />
            <Route path="/lancheComprar/:id" element={<RequireAuth><LanchesComprar /></RequireAuth>} />
            <Route path="/porcaoComprar/:id" element={<RequireAuth><PorcoesComprar /></RequireAuth>} />
        </Routes>
    );
}
export default Router;