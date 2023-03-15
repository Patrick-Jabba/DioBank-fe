import { createContext, useState, useEffect } from "react";
import IAppContext from "../interfaces/IAppContext";
import { getAllLocalStorage } from "../services/storage";

export const AppContext = createContext({} as IAppContext)


export const AppContextProvider = ({ children}:any) => {
  const user = 'Patrick'
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  const storage = getAllLocalStorage();

  useEffect(() => {
    if(storage) {
      const { login } = JSON.parse(storage)
      setIsLoggedIn(login)
    }
  }, [])

  

  return (
    <AppContext.Provider 
      value={{user, isLoggedIn, setIsLoggedIn}}
    >
      {children}
    </AppContext.Provider>
  )
}