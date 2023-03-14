import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Conta from './pages/Conta'
import ContaInfo from './pages/ContaInfo'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conta/:id" element={<Conta />} />
      <Route path="/infoconta" element={<ContaInfo />} />
    </Routes>
  )
}