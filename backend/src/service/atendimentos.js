import Atendimento from '../model/atendimentos.js'

class ServiceAtendimento {

    async FindAll() {
        const atendimento = await Atendimento.findAll()

        return atendimento
    }

    async FindOne(id) {
        if (!id) {
            throw new Error('favor informar o ID')
        }

        const atendimento = await Atendimento.findByPk(id)

        if (!atendimento) {
            throw new Error(`Atendimento ${id} não encontrado!`)
        }

        return atendimento
    }

    async Create(dia, hora, valor) {
        if (!dia || !hora || !valor) {
            throw new Error('Preencha todos os campos!')
        }

        if (dia < 1 || dia > 31) {
            throw new Error('Coloque um dia válido!')
        }

        await Atendimento.create({
            dia,
            hora,
            valor,
            concluido: false
        })
    }

    async Update(id, dia, hora, valor, concluido) {
        if (!id) {
            throw new Error('favor informar o ID')
        }
        const atendimento = await Atendimento.findByPk(id)
        if (!atendimento) {
            throw new Error(`Atendimento ${id} não encontrado!`)
        }

        atendimento.dia = dia || atendimento.dia
        atendimento.hora = hora || atendimento.hora
        atendimento.valor = valor || atendimento.valor
        atendimento.concluido = concluido || atendimento.concluido

        await atendimento.save()
    }

    async Delete(id) {
        if (!id) {
            throw new Error('favor informar o ID')
        }

        const atendimento = await Atendimento.findByPk(id)

        if (!atendimento) {
            throw new Error(`Atendimento ${id} não encontrado!`)
        }

        await atendimento.destroy()
    }
}

export default new ServiceAtendimento()