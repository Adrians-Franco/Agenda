import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { updateCliente } from "../../api/clientes";


export default function UpdateUser() {
    const navigate = useNavigate()
    const [cliente, setCliente] = useState({
        nome: '',
        email: '',
        senha: '',
    })

    // adicionar userLocation novo para pegar o state(usuario) passado anteriormente
    const location = useLocation()
    const { cliente: prevCliente } = location.state


    const handleChange = (e) => {
        const { id, value } = e.target;
        setCliente({
            ...cliente,
            [id]: value
        })
    }

    const handleReset = (e) => {
        e.preventDefault()
        // alterado do init para o prev
        setUser({ ...prevCliente, senha: '' })
    }

    const handleSave = async (e) => {
        e.preventDefault()
        // Alterada função pra update
        const response = await updateCliente(prevCliente.id, cliente)

        if (response.status === 200) {
            navigate('/clientes')
            console.log("Cliente alterado com sucesso")
        } else {
            console.log("Erro ao alterar o Cliente")
            console.log(response)
        }

    }

    return (
        <main>
            <form>
                <div>
                    <label>Nome:</label>
                    <input type="text" name="nome" id="nome" value={cliente.nome} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" id="email" value={cliente.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Senha:</label>
                    <input type="password" name="senha" id="senha" value={cliente.senha} onChange={handleChange} />
                </div>
                <button 
                    type="reset"
                    onClick={handleReset}
                >Limpar</button>
                <button
                    type="submit"
                    onClick={handleSave}
                >Enviar</button>
            </form>
        </main>
    )
}