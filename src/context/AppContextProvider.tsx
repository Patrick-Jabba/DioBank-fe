import { createContext, useState } from "react";
import IAppContext from "../interfaces/IAppContext";

export const AppContext = createContext({} as IAppContext)


export const AppContextProvider = ({ children}:any) => {
  const user = 'Patrick'
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  return (
    <AppContext.Provider 
      value={{user, isLoggedIn, setIsLoggedIn}}
    >
      {children}
    </AppContext.Provider>
  )
}