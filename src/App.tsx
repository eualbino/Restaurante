import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import LanchesProvider from "./context/lanchesContext";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <LanchesProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </LanchesProvider>
    </ThemeProvider>
  );
};

export default App;
