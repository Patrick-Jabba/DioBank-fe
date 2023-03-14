import { CardContainer } from "./styles";

import { Box } from "@chakra-ui/react";

export const CardComponent = ({children}:any) => {
  return (
    <CardContainer>
      <Box minHeight="100vh" padding="2rem">
        {children}
      </Box>
    </CardContainer>
  )
}