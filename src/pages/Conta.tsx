import {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"

import CardInfo from "../components/CardInfo/indes"

import { api } from "../api";

import IUserData from "../interfaces/IUserData";

const Conta = () => {
  const [userData, setUserData] = useState<null | IUserData>()
  
  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api
      setUserData(data)
      console.log(data)
    }
    
    getData()
  }, [])
  
  const actualData = new Date();
  
  const { id } = useParams()
  const navigate = useNavigate()
  if(userData && id !== userData.id.toString()) {
    navigate('/');
  }


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
                   <CardInfo
            title="Informações da conta"
            text={`Saldo: ${userData?.balance}`}
                    />
          </>
        }
      </SimpleGrid>
    </Center>
  )
}

export default Conta