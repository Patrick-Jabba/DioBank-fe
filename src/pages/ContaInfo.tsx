import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";

const ContaInfo = () => {
  return (
      <>
        <Link to="/conta/1">
          <Text
            fontSize="3xl"
            color="white"
            fontWeight="bold"
          >
            Conta
          </Text>
        </Link>
            
      </>
  )
}

export default ContaInfo;