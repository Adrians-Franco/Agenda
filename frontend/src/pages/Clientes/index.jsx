import { useEffect, useState } from 'react'
import { deleteCliente, getClientes } from '../../api/clientes'
import { Link, useNavigate } from 'react-router-dom'
import './styles.css'

function Clientes() {
    const navigate = useNavigate()
    const [conteudo, setConteudo] = useState([])

    const handleUpdate = async (cliente) => {
        navigate('/update/cliente', { state: { cliente } })
    }

    const handleDelete = async (id) => {
        const response = await deleteCliente(id)

        if (response.status != 204) {
            console.log("Erro ao deletar!!!")
            return
        }

        setConteudo(clientes => clientes.filter(cliente => cliente.id != id))
    }

    useEffect(() => {
        async function Carregar() {
            const todosClientes = await getClientes();
            setConteudo(todosClientes);
        }
        Carregar();
    }, [])

    return (
        <main>
            <Link to={'/create/cliente'}>
                <button>Criar</button>
            </Link>
            {
                conteudo.length == 0
                    ? <div>
                        <label>Nenhum cliente cadastrado</label>
                    </div>
                    : conteudo.map(clientes =>
                        <div className='card char' key={clientes.id}>
                            <h2>Nome: {clientes.nome}</h2>
                            <h2>Email: {clientes.email}</h2>
                            <div className='actions'>
                                <button
                                    type='button'
                                    onClick={() => handleUpdate(clientes)}
                                >Alterar</button>

                                <button
                                    type='button'
                                    onClick={() => handleDelete(clientes.id)}
                                >Deletar</button>
                            </div>
                        </div>)
            }
        </main>
    )
}

export default Clientes