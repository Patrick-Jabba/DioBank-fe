import { HeaderContainer } from "./styles";
import {useContext} from "react";
import { AppContext } from "../../context/AppContextProvider";
import { Button, Spacer, Text } from "@chakra-ui/react";
import { changeLocalStorage } from "../../services/storage";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const {userDataContext, isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({
      login: false
    })
    setIsLoggedIn(false)
    localStorage.removeItem('userData')
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
                  Bem vindo { userDataContext?.name }
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