import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Clientes from './pages/Clientes'
import Home from './pages/Home'
import CreateCliente from './pages/Clientes/create'
import UpdateCliente from './pages/Clientes/update'
//import { AuthProvider } from './auth/Content'
import Login from './pages/Login'
//import Router from './router/Router'
import Atendimentos from './pages/Atendimentos'
import CreateAtendimento from './pages/Atendimentos/create'
import UpdateAtendimento from './pages/Atendimentos/update'

function App() { // cuida com a branch que vc esta olhando meu repo

  // pegar token
  return (
    <>
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />

        <Route element={<Route />}>
          <Route path='/clientes' element={<Clientes />} />
          <Route path='/create/cliente' element={<CreateCliente />} />
          <Route path='/update/cliente' element={<UpdateCliente />} />
        </Route>

        <Route >
          <Route path='/atendimentos' element={<Atendimentos />} />
          <Route path='/create/atendimento' element={<CreateAtendimento />} />
          <Route path='/update/atendimento' element={<UpdateAtendimento />} />
        </Route>

      </Routes>

      <Footer />
    </>
  )
}

export default App