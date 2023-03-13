import { Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface IDButton {
  onClick: MouseEventHandler
  text: string,
}

export const DButton = ({ onClick, text }: IDButton) => {
  return (
    <Button
      onClick={onClick}
      colorScheme="teal"
      size="sm"
      width="100%"
      marginTop="3rem"
    >
      {text}
    </Button>
  )
}