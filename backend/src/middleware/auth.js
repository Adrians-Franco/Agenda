import jwt from 'jsonwebtoken'
import ServiceCliente from '../service/clientes.js'

const jwt_segredo = "batata"

export default function authMiddleware(roles = []) {
    return async (req, res, next) => {
        try {
        
            const token = req.headers['authorization']
            
            if (!token) {
                throw new Error('Voçê não tem permissão para realizar esta ação!')
            }
            
            // pegar o token
            // validar o token - jwt/json web token 
            const decoded = jwt.verify(token.split(' ')[1], jwt_segredo)
            const cliente = await ServiceCliente.FindOne(decoded.id)

            req.headers.cliente = cliente
        
            // se der certo!
            next()
        
        } catch (erro) {
            // se der errado!
            res.status(403).send({
                data: null,
                msg: erro.message,
                error: true
            })
        }
    }
}