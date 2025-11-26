import Cliente from '../model/cliente.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import cliente from '../controller/cliente.js'

const JWT_SEGREDO = "M3uS3gr3d0"
const SALT = 10 

class ServiceCliente {

    async FindAll() {
        return cliente.FindAll()
    }

    async FindOne(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

       
        const cliente = await cliente.findByPk(id)

        if (!cliente) {
            throw new Error(`Cliente ${id} não encontrado`)
        }

        return cliente
    }

    async Create(nome, email, senha, ativo, permissao) {
        if (!nome || !email || !senha) {
            throw new Error("favor preencher todos os campos")
        }

        const senhaCrip = await bcrypt.hash(String(senha), SALT)

        await cliente.Create({
            nome,
            email,
            senha: senhaCrip,
           
        })
    }

    async Update(id, nome, senha) {
        const oldcliente = await Cliente.findByPk(id)
         oldcliente.nome = nome || oldcliente.nome

        oldcliente.senha = senha
            ? await bcrypt.hash(String(senha), SALT)
            : oldcliente.senha

         Cliente.update(id, nome)
    }

    async Delete(id) {
        const oldcliente = await Cliente.findByPk(id)

        oldcliente.destroy()
    }

    async Login(email, senha) {
        if(!email || !senha) {
            throw new Error("Email ou senha inválidos.")
        }

        const cliente = await Cliente.findOne({ where: { email } })

        if (
            !cliente
            || !(await bcrypt.compare(String(senha), cliente.senha))
        ) {
            throw new Error("Email ou senha inválidos.")
        }

        return jwt.sign(
            { id: cliente.id, nome: cliente.nome, permissao: cliente.permissao },
            JWT_SEGREDO,
            { expiresIn: 60 * 60 }
        )
    }
}

export default new ServiceCliente()