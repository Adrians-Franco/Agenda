import api from "./api"

export const getAtendimentos = async () => {
    const response = await api.get('/api/atendimentos')

    if (response.status !== 200) {
        return [] // throw new Error('')
    }

    return response.data.atendimentos
}

export const createAtendimento = async (atendimento) => {
    const response = await api.post('/api/atendimento', atendimento)

    return response
}

export const updateAtendimento = async (id, atendimento) => {
    const response = await api.put(`/api/atendimento/${id}`, atendimento)

    return response
}

export const deleteAtendimento = async (id) => {
    const response = await api.delete(`/api/atendimento/${id}`)

    return response.data.results
}