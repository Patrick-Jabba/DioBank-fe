import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, Center, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

import { AppContext } from "../context/AppContextProvider";
import { DButton } from "../components/Button";
import { CardComponent } from "../components/CardComponent";

import { login }  from "../services/login";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const validateUser = async (email: string, password: string) => {
    const loggedIn = await login(email, password)

    if(!loggedIn) {
      alert('Email ou senha inválidos')
      return;
    }
    setIsLoggedIn(true)
    changeLocalStorage({
      login: true
    })
    navigate(`/conta/1`)
  }


  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
        <Box padding="25px">
          <CardComponent>
          <Box 
            bg="#fff" 
            borderRadius="25px" 
            padding="1rem"
            minHeight="50vh"
            w="700px"
          >
          <Center
            color="#2c7a7b"
            marginBottom="1rem"
          >
            Faça o login
          </Center>
        <Input 
          placeholder="email" 
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          focusBorderColor="#2C7A7B"
          color="#2c7a7b"
          />
          
        <InputGroup size='md'>
        <Input
          placeholder='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          focusBorderColor="#2C7A7B"
          marginTop="1rem"
          type={show ? 'text' : 'password'}
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
          onClick={() => validateUser(email, password)}
          text="Entrar"
        />
        </Center>
      </Box>
          </CardComponent>
        </Box>
  )
}

export default Home;