import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { AppContextProvider } from "../../context/AppContextProvider";

import { Router } from "../../Router";
import { Layout } from "../Layout";

function App() {
  return (
    <BrowserRouter>
    <AppContextProvider>
    <ChakraProvider>
      <Layout>
      <Router />
      </Layout>
    </ChakraProvider>
    </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
