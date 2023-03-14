import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { Router } from "../../Router";
import { Layout } from "../Layout";

function App() {
  return (
    <BrowserRouter>
    <ChakraProvider>
      <Layout>
      <Router />
      </Layout>
    </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
