import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { AppContextProvider } from "../../context/AppContextProvider";
import { createLocalStorage, getAllLocalStorage } from "../../services/storage";

import { Layout } from "../Layout";
import { Router } from "../../Router";

function App() {
 !getAllLocalStorage() && createLocalStorage()

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
