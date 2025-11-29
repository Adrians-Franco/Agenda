import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCliente } from '../../api/clientes';
import './style.css'

export default function SignUp() {
    const navigate = useNavigate()
    const [cliente, setCliente] = useState({
        nome: '',
        email: '',
        senha: ''
    })

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCliente({
            ...cliente,
            [id]: value
        })
    }

    const handleSave = async (e) => {
        e.preventDefault()
        const response = await createCliente(cliente)
        
        if(response.status === 201) {
            navigate('/login')
        }
    }

    return (
        <div className='signup-container'>
            <form className='signup-form'>
                <h2>Cadastro</h2>
                <div className="input-group">
                    <label>Nome:</label>
                    <input type="text" name="nome" id="nome" value={cliente.nome} onChange={handleChange} />
                </div>
                <div className="input-group">
                    <label>Email:</label>
                    <input type="email" name="email" id="email" value={cliente.email} onChange={handleChange} />
                </div>
                <div className="input-group">
                    <label>Senha:</label>
                    <input type="password" name="senha" id="senha" value={cliente.senha} onChange={handleChange} />
                </div>
                <button type="reset">Limpar</button>
                <button
                    type="submit"
                    onClick={handleSave}
                >Enviar</button>
            </form>
        </div>
    )
}