import api from "./api"

export const getClientes = async () => {
    const response = await api.get('/api/clientes')

    if (response.status !== 200) {
        return [] // throw new Error('')
    }

    return response.data.clientes
}

export const createCliente = async (cliente) => {
    const response = await api.post('/api/cliente', cliente)

    return response
}

export const updateCliente = async (id, cliente) => {
    const response = await api.put(`/api/cliente/${id}`, cliente)

    return response
}

export const deleteCliente = async (id) => {
    const response = await api.delete(`/api/cliente/${id}`)

    return response
}

export const loginCliente = async (email, senha) => {
    const response = await api
        .post('/api/login', { email, senha })

   return response
}