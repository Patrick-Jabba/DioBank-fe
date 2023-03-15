import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Conta from './pages/Conta'
import ContaInfo from './pages/ContaInfo'
import { ProtectedRoutes } from './components/ProtectedRoutes';

export const Router = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/conta/:id" element={<Conta />} />
          <Route path="/infoconta" element={<ContaInfo />} />
        </Route>
    </Routes>
  )
}