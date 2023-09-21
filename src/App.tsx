import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import LanchesProvider from "./context/lanchesContext";
import BebidasProvider from "./context/bebidasContext";
import PorcaoProvider from "./context/porcaoContext";
import AcrescimosProvider from "./context/acrescimoContext";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
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
    </ThemeProvider>
  );
};

export default App;
