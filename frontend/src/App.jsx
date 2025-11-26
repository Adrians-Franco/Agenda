import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import clientes from './pages/clientes'
import Home from './pages/Home'
import Createcliente from './pages/clientes/create'
import Updatecliente from './pages/clientes/update'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/clientes' element={<clientes />} />
        <Route path='/create/cliente' element={<Createcliente />} />
        <Route path='/update/cliente' element={<Updatecliente />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
