import Cliente from '../model/clientes.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const jwt_segredo = 'batata'
const SALT = 10 // Deixe entre 10 e 12

class ServiceCliente {

    async FindAll() {
        const cliente = await Cliente.findAll()

        return cliente
    }

    async FindOne(id) {
        if (!id) {
            throw new Error('favor informar o ID')
        }

        const cliente = await Cliente.findByPk(id)

        if (!cliente) {
            throw new Error(`Cliente ${id} não encontrado!`)
        }

        return cliente
    }

    async Create(nome, email, senha) {
        if (!nome || !email || !senha) {
            throw new Error('Preencha todos os campos!')
        }

        const senhaCrip = await bcrypt.hash(String(senha), SALT)

        await Cliente.create({
            nome,
            email,
            senha: senhaCrip,
        })
    }

    async Update(id, nome, email, senha) {
        if (!id) {
            throw new Error('favor informar o ID')
        }
        const oldCliente = await Cliente.findByPk(id)
        if (!oldCliente) {
            throw new Error(`Cliente ${id} não encontrado!`)
        }

        oldCliente.nome = nome || oldCliente.nome
        oldCliente.email = email || oldCliente.email
        oldCliente.senha = senha 
            ? await bcrypt.hash(String(senha), SALT) 
            : oldCliente.senha 

        await oldCliente.save()
    }

    async Delete(id) {
        if (!id) {
            throw new Error('favor informar o ID')
        }

        const cliente = await Cliente.findByPk(id)

        if (!cliente) {
            throw new Error(`Cliente ${id} não encontrado!`)
        }

        await cliente.destroy()
    }

    async Login(email, senha) {
        if (!email || !senha) {
            throw new Error('Email ou senha inválidos!')
        }

        // se o email ou a senha for invalido eu não gero o token
        const cliente = await Cliente.findOne({ where: { email } })

        if (
            !cliente
            || !(await bcrypt.compare(String(senha), cliente.senha))
        ) {
            throw new Error('Email ou senha inválidos!')
        }

        // criar o token
        return jwt.sign(
            { id: cliente.id, nome: cliente.nome, permissao: cliente.permissao },
            jwt_segredo,
            { expiresIn: 60 * 60 }
        )

    }

}

export default new ServiceCliente()