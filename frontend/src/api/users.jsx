import api from "./api"

export const getcliente = async () => {
    const response = await api.get('/api/v1/cliente')

    if(response.status !== 200){
        return [] 
    }

    return response.data.cliente
}

export const createcliente = async (clienter) => {
   const response = await api.post('/api/v1/clienter', clienter)

   return response
}

export const updatecliente = async (id, clienter) => {
    const response = await api.put(`/api/v1/clienter/${id}`, clienter)

    return response
}

export const deletecliente = async (id) => {
    const response = await api.delete(`/api/v1/clienter/${id}`)

    return response
}