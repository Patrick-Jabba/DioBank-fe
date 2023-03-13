import { useEffect, useState } from "react";
import { CardContainer } from "./styles";

import { Input, Box, Center, Button, InputGroup, InputRightElement } from "@chakra-ui/react";

import { DButton } from "../Button";
import IUserData from "../../interfaces/IUserData";

import { api } from "../../api";
import { login } from "../../services/login";

export const CardComponent = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const [email, setEmail] = useState('')
  const [userData, setUserData] = useState<null | IUserData>()

  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api
      setUserData(data)
      console.log(data)
    }

    getData()
  }, [])

  return (
    <CardContainer>
      <Box minHeight="100vh" padding="2rem">
      <Box 
        bg="#fff" 
        borderRadius="25px" 
        padding="1rem"
        minHeight="50vh"
        >
        { (userData === null || userData === undefined) && <h1>Loading...</h1>}
      <Center>
       Faça o login
      </Center>
      <Input 
      htmlSize={10}
        placeholder="email" 
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        focusBorderColor="#2C7A7B"
        />
        
      <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='password'
        marginTop="1rem"
        focusBorderColor="#2C7A7B"
        />
      <InputRightElement width='4.5rem' marginTop="1rem">
        
        <Button 
          h='1.75rem' 
          size='sm' 
          onClick={handleClick}
          bg="#2C7A7B"
          color="#fff"
        >
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
      <Center>
        <DButton
          onClick={() => login(email)}
          text="Entrar"
        />
        </Center>
      </Box>
      </Box>
    </CardContainer>
  )
}