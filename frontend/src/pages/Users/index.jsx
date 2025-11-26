import { useEffect, useState } from 'react'
import { deletecliente, getclientes } from '../../api/clientes'
import { Link, useNavigate } from 'react-router-dom'
import './styles.css'
import { toast } from 'react-toastify'

function clientes() {
    const navigate = useNavigate()
    const [ clientes, setclientes ] = useState([])

    const handleUpdate = async (cliente) => {
        navigate('/update/cliente', { state: { cliente }})
    }

    const handleDelete = async (id) => {
        const response = await deletecliente(id)

        if(response.status !== 204){
            toast("Erro ao deletar, tente novamente, mais tarde")
            return
        }

        setclientes(clientes => clientes.filter(cliente => cliente.id !== id))
    }

    useEffect(() => {
        async function carregar() {
            const allclientes = await getclientes()
            setclientes(allclientes)
        }
        carregar()
    }, [])

    return (
        <main>
            <div className='cliente-list'>
                <Link to={'/create/cliente'}>
                    <button>Criar</button>
                </Link>
                <div className='cliente header' key='header'>
                    <label>Nome</label>
                    <label>Email</label>
                    <label>Ações</label>
                </div>
                {
                    clientes.length == 0
                        ? <div className='cliente'>
                            <label>Não tem ngm</label>
                        </div>
                        : clientes.map(cliente =>
                        <div className='cliente' key={cliente.id}>
                            <label>{ cliente.nome }</label>
                            <label>{ cliente.email }</label>
                            <div className='actions'>
                                <button
                                    type='button'
                                    onClick={() => handleUpdate(cliente)}
                                >Alterar</button>
                                <button
                                    type='button'
                                    onClick={() => handleDelete(cliente.id)}
                                >Deleta</button>
                            </div>
                        </div>)
                }
            </div>
        </main>
    )
}

export default clientes
