import { Box, Text } from "@chakra-ui/react"

import ICardInfo from "../../interfaces/ICardInfo"

const CardInfo = (props: ICardInfo) => {
  return (
        <Box
          bg="#fff"
          minHeight="120px"
          width={320}
          borderRadius="1rem"
          padding={4}
          textAlign="center"
        >

          <Text
            fontSize="2xl"
            fontWeight="bold"
          >
          {props.title}
          </Text>

          <Text
            fontSize="xl"
          >
          {props.text}
          </Text>
        </Box>
  )
}

export default CardInfo