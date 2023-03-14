import { HeaderContainer } from "./styles"

import {useContext} from "react";
import { AppContext } from "../../context/AppContextProvider";

export const Header = () => {
  const context = useContext(AppContext)
  return (
      <HeaderContainer >
        <h1>Dio Bank</h1>
        <p>Bem vindo { context.user } </p>
      </HeaderContainer>
  )
}