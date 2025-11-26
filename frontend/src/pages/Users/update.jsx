import { useEffect, useState } from "react"
import { updatecliente } from "../../api/clientes";
import { useLocation, useNavigate } from "react-router-dom";
import './styles.css'

export default function Updatecliente() {
    const navigate = useNavigate()
    const [cliente, setcliente] = useState({
        nome: '',
        email: '',
        senha: '',
        ativo: true
    })
    // adicionar clienteLocation novo para pegar o state passado anteriormente
    const location = useLocation()
    const { cliente: prevcliente } = location.state

    const handleChange = (e) => {
        const { id, value } = e.target;
        setcliente({
            ...cliente,
            [id]: value
        })
    }

    const handleReset = (e) => {
        e.preventDefault()
        // alterado do init para o prev
        setcliente({...prevcliente, senha: ''})
    }

    const handleSave = async (e) => {
        e.preventDefault()
        // Alterada função pra update
        const response = await updatecliente(prevcliente.id, cliente)

        if (response.status === 200) {
            navigate('/clientes')
        } else {
            console.log(response)
        }
    }

    // Adicionado
    useEffect(() => {
        setcliente({ ...prevcliente, senha: ''})
    }, [])

    return (
        <div className="form">
            <form>
                <div>
                    <label>Nome: </label>
                    <input type="text" name="nome" id='nome' value={cliente.nome} onChange={handleChange} />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" id='email' value={cliente.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Senha: </label>
                    <input type="password" name="senha" id='senha' value={cliente.senha} onChange={handleChange} />
                </div>
                <div className="actions">
                    <button
                        type="reset"
                        onClick={handleReset}
                    >Limpar</button>
                    <button
                        type="submit"
                        onClick={handleSave}
                    >Enviar</button>
                </div>
            </form>
        </div>
    )
}