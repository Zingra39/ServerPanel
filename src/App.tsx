import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default"

import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ClientContextProvider } from "./context/ClientContetxt";
import { SideBarContextProvider } from "./context/SideBarContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <SideBarContextProvider>
        <ClientContextProvider>
          <Router/>
        </ClientContextProvider>
      </SideBarContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
