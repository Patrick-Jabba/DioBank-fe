import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/Layout";
import { CardComponent } from "./components/CardComponent";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <CardComponent />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
