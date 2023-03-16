import { Route, Routes, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import Home from './pages/Home'
import Conta from './pages/Conta'
import ContaInfo from './pages/ContaInfo'
import { ProtectedRoutes } from './components/ProtectedRoutes';
import { AppContext } from './context/AppContextProvider';

export const Router = () => {
const { userDataContext } = useContext(AppContext)
  return (
    <Routes>
      <Route 
        path="/" 
        element={ !userDataContext
          ?  <Home />
          : <Navigate to="/infoconta" replace />
        } 
      />

        <Route element={<ProtectedRoutes />}>
          <Route path="/conta/:id" element={<Conta />} />
          <Route path="/infoconta" element={<ContaInfo />} />
        </Route>
    </Routes>
  )
}