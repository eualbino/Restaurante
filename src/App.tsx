import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import AutenticacaoProvider from "./data/Auth/AuthContext";

const App = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<AutenticacaoProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</AutenticacaoProvider>
		</ThemeProvider>
	);
};

export default App;
