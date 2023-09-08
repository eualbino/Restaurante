import { Route, Routes  } from "react-router-dom";
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

const Router = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/mesas" element={<Mesas/>}/>
            <Route path="/acrescimoAdicionar" element={<AcrescimoAdicionar/>}/>
            <Route path="/acrescimoEditar" element={<AcrescimoEditar/>}/>
            <Route path="/bebidaAdicionar" element={<BebidaAdicionar/>}/>
            <Route path="/bebidaEditar" element={<BebidaEditar/>}/>
            <Route path="/funcionarioAdicionar" element={<FuncionarioAdicionar/>}/>
            <Route path="/funcionarioEditar" element={<FuncionarioEditar/>}/>
            <Route path="/lancheAdicionar" element={<LancheAdicionar/>}/>
            <Route path="/lancheEditar" element={<LancheEditar/>}/>
            <Route path="/bebidasMenu" element={<BebidasMenu/>}/>
            <Route path="/lanchesMenu" element={<LanchesMenu/>}/>
            <Route path="/porcoesMenu" element={<PorcoesMenu/>}/>
            <Route path="/mesaAdicionarDeletar" element={<MesaAdicionarDeletar/>}/>
            <Route path="/observacao" element={<Observacao/>}/>
            <Route path="/pedidosMesas" element={<PedidosMesas/>}/>
            <Route path="/porcaoAdicionar" element={<PorcaoAdicionar/>}/>
            <Route path="/porcaoEditar" element={<PorcaoEditar/>}/>
        </Routes>
    );
}
export default Router;
