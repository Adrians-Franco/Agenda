import './App.css'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

import { AuthProvider } from './auth/Content'
import PrivateRouter from './router/PrivateRouter'
import Login from './pages/Login'
import SignUp from './pages/SignUp'


import Clientes from './pages/Clientes'
import CreateCliente from './pages/Clientes/create'
import UpdateCliente from './pages/Clientes/update'

import Atendimentos from './pages/Atendimentos'
import CreateAtendimento from './pages/Atendimentos/create'
import UpdateAtendimento from './pages/Atendimentos/update'
import SelfAtendimentos from './pages/Atendimentos/selfAtendimentos'

function App() {

  // pegar token
  return (
    <AuthProvider>
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />


        <Route element={<PrivateRouter />}>
          <Route path='/clientes' element={<Clientes />} />
          <Route path='/create/cliente' element={<CreateCliente />} />
          <Route path='/update/cliente' element={<UpdateCliente />} />
        </Route>

        <Route path='/atendimentos' element={<Atendimentos />} />
        <Route path='/self/atendimentos' element={<SelfAtendimentos />} />
        <Route path='/create/atendimento' element={<CreateAtendimento />} />
        <Route path='/update/atendimento' element={<UpdateAtendimento />} />

      </Routes>

      <Footer />
    </AuthProvider>
  )
}

export default App