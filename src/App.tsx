import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import LanchesProvider from "./data/lanchesContext";
import BebidasProvider from "./data/bebidasContext";
import PorcaoProvider from "./data/porcaoContext";
import AcrescimosProvider from "./data/acrescimoContext";
import FuncionariosProvider from "./data/funcionarioContext";
import MesasProvider from "./data/mesasContext";
import AutenticacaoProvider from "./data/Auth/AuthContext";

const App = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<AutenticacaoProvider>
				<MesasProvider>
					<FuncionariosProvider>
						<LanchesProvider>
							<BebidasProvider>
								<PorcaoProvider>
									<AcrescimosProvider>
										<BrowserRouter>
											<Router />
										</BrowserRouter>
									</AcrescimosProvider>
								</PorcaoProvider>
							</BebidasProvider>
						</LanchesProvider>
					</FuncionariosProvider>
				</MesasProvider>
			</AutenticacaoProvider>
		</ThemeProvider>
	);
};

export default App;
