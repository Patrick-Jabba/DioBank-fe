import { createContext, useState, useEffect } from "react";
import { api } from "../api";
import IAppContext from "../interfaces/IAppContext";
import IUserData from "../interfaces/IUserData";
import { getAllLocalStorage, getUserFromLocalStorage } from "../services/storage";

export const AppContext = createContext({} as IAppContext | IUserData | any)

export const AppContextProvider = ({ children }:any) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [userDataContext, setUserDataContext] = useState<IUserData>()

  const storage = getAllLocalStorage();
  const getUserDataFromStorage = getUserFromLocalStorage();

  async function getData() {
    const data: IUserData | any = await api
    setUserDataContext(data)
  }

  useEffect(() => {
    if(storage && getUserDataFromStorage) {
      const { login } = JSON.parse(storage)
      setIsLoggedIn(login)
      getData()
    }
  }, [storage, getUserDataFromStorage])

  return (
    <>
      <AppContext.Provider
        value={{userDataContext, isLoggedIn, setIsLoggedIn}}
      >
        {children}
      </AppContext.Provider>
      
    </>
  )
}