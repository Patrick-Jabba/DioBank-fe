import { HeaderContainer } from "./styles";
import {useContext} from "react";
import { AppContext } from "../../context/AppContextProvider";
import { Button, Spacer, Text } from "@chakra-ui/react";
import { changeLocalStorage } from "../../services/storage";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { user, isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({
      login: false
    })
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
        <HeaderContainer 
        >
          <Text 
            fontSize="3xl" 
            color="#2C7A7B"
            >
            Dio Bank
          </Text>
          
          <Spacer />
            
          <div className="logout">
            {
              isLoggedIn && (
                <>
                <Text>
                  Bem vindo { user }
                </Text>  
                <Button
                  colorScheme="teal"
                  onClick={() => logout()}
                >
                  Sair
                </Button>
                </>
              )
            }
          </div>

        </HeaderContainer>
  )
}