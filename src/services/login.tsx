/* eslint-disable react-hooks/rules-of-hooks */
import {  useContext } from "react";
import { AppContext } from "../context/AppContextProvider";
import { useNavigate } from "react-router-dom"

import { api } from "../api";
export const login = async (email:string):Promise<void> => {
  
  const { setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()
  const data: any = await api
  
  if(email !== data?.email) {
    return alert('Email inválido')
  }
  
    setIsLoggedIn(true)
    navigate(`/conta/${data?.id}`)
    alert(`Bem vindo ${email}!`);
}

export default login