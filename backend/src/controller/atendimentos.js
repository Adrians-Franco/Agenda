import ServiceAtendimento from '../service/atendimentos.js'

class ControllerAtendimento {

    async FindAllByCliente(req, res) {
        try {
            const clienteId = req.headers["cliente.id"]


            if (!clienteId) {
                return res.status(400).send({ error: "ID do cliente não informado." })
            }

            const atendimentos = await ServiceAtendimento.FindAllByCliente(clienteId)
            res.status(200).send({ atendimentos })

        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async FindAll(_, res) {
        try {
            const atendimentos = await ServiceAtendimento.FindAll()
            res.status(200).send({ atendimentos })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async FindOne(req, res) {
        try {
            const id = req.params.id
            const atendimento = await ServiceAtendimento.FindOne(id)

            if (!atendimento) {
                return res.status(404).send({ error: "Atendimento não encontrado." })
            }

            res.status(200).send({ atendimento })

        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async Create(req, res) {
        try {
            const clienteId = req.headers["cliente.id"]

            if (!clienteId) {
                return res.status(400).send({ error: "ID do cliente não informado." })
            }

            const { dia, hora, valor, concluido } = req.body

            await ServiceAtendimento.Create(dia, hora, valor, concluido, clienteId)

            res.status(201).send({ message: "Criado com sucesso" })

        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async Update(req, res) {
        try {
            const id = req.params.id
            const { dia, hora, valor, concluido } = req.body

            const result = await ServiceAtendimento.Update(id, dia, hora, valor, concluido)

            if (!result) {
                return res.status(404).send({ error: "Atendimento não encontrado." })
            }

            res.status(200).send({ message: "Atualizado com sucesso" })

        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async Delete(req, res) {
        try {
            const id = req.params.id
            const result = await ServiceAtendimento.Delete(id)

            if (!result) {
                return res.status(404).send({ error: "Atendimento não encontrado." })
            }

            // 204 = sem conteúdo
            res.status(204).send()

        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
}

export default new ControllerAtendimento()
