
import Serviceatendimento from '../service/atendimento.js'

class Controlleratendimento {
    
    async FindAll(_, res) {
        try {
            const atendimento = await Serviceatendimento.FindAll()
            res.status(200).send({ atendimento })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    
    async FindOne(req, res) {
        try {
            const id = req.params.id || req.headers?.atendimento?.id

            const atendimento = await Serviceatendimento.FindOne(id)
            res.status(200).send({ atendimento })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async Create(req, res) {
        try {
            const loggeatendimento = req.headers?.atendimento
            let permissao = 1
            if(loggeatendimento && loggeatendimento.permissao === 0){
                permissao = req.body.permissao
            }
            const { nome, email, senha, ativo } = req.body
            await Serviceatendimento.Create(nome, email, senha, ativo, permissao)
            res.status(201).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    
    Update(req, res) {
        try {
            const id = req.params.id || req.headers?.atendimento?.id
            const nome = req.body.nome
            Serviceatendimento.Update(id, nome)
            res.status(200).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    
    async Delete(req, res) {
        try {
            const id = req.params.id || req.headers?.atendimento?.id
            await Serviceatendimento.Delete(id)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async Login(req, res) {
        try {
            const { email, senha } = req.body

            const token = await Serviceatendimento.Login(email, senha)

            res.status(200).send({ token })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

}
export default new Controlleratendimento()