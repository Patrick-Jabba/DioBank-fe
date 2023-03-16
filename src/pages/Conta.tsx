import {useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"

import { AppContext } from "../context/AppContextProvider";
import CardInfo from "../components/CardInfo/indes"

import { api } from "../api";

import IUserData from "../interfaces/IUserData";

const Conta = () => {
  const [userData, setUserData] = useState<null | IUserData>()
  const { id } = useParams()
  const navigate = useNavigate()

  const actualData = new Date()

  const { isLoggedIn } = useContext(AppContext);

  !isLoggedIn && navigate('/')
  
  if(userData && id !== userData.id.toString()) {
    navigate('/');
  }
  
  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api
      setUserData(data)
    }
    
    getData()
  }, [])

  return (
    <Center>
      <SimpleGrid 
        columns={2}
        spacing={8}
        padding={16}
      >
       {
          userData === undefined || userData === null ? (
              <Center>
                <Spinner
                  size="xl"
            	    color="white"
                />
              </Center>
           )         :  
          <>
            <CardInfo
              title="Informações de acesso:"
              text={actualData.toLocaleString()}
            />
            <Link to="/infoconta">
              <CardInfo
                title="Informações da conta"
                text={`Saldo: ${userData?.balance}`}
              />
            </Link>
          </>
        }
      </SimpleGrid>
    </Center>
  )
}

export default Conta