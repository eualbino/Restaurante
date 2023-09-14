import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import LanchesProvider from "./context/LanchesContext";
import BebidasProvider from "./context/bebidasContext";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <LanchesProvider>
        <BebidasProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </BebidasProvider>
      </LanchesProvider>
    </ThemeProvider>
  );
};

export default App;
