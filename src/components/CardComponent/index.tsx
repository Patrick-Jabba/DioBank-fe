import { Input, Box, Center, Button } from "@chakra-ui/react";
import { Header } from "../Header";
import { login } from "../../services/login";


export const CardComponent = () => {
  return (
    <div>
      <Header />

      <Box minHeight="100vh" padding="2rem">
      <Box 
        bg="#f8f8f2" 
        borderRadius="25px" 
        padding="1rem"
        minHeight="50vh"
      >
      <Center>
       Login
      </Center>
      <Input placeholder="email" />
      <Input placeholder="password" marginTop="2rem" />
      <Center>
        <Button 
          colorScheme="teal" 
          size="sm" 
          marginTop="8rem" 
          w="100%"
          onClick={login}
          >
          Entrar
        </Button>
        </Center>
      </Box>
      </Box>
    </div>
  )
}