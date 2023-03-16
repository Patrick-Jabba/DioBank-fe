import { Text } from "@chakra-ui/react"
import {useContext} from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";

const ContaInfo = () => {
  const { userDataContext } = useContext(AppContext)
  console.log(userDataContext)
  return (
      <>
        <Link to="/conta/1">
          <Text
            fontSize="3xl"
            color="white"
            fontWeight="bold"
          >
            Conta de {userDataContext?.name}:
            email: {userDataContext?.email}
          
          </Text>
        </Link>
            
      </>
  )
}

export default ContaInfo;