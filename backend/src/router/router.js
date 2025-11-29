import express from 'express'
import ControllerCliente from '../controller/clientes.js'
import authMiddleware from '../middleware/auth.js'
import ControllerAtendimento from '../controller/atendimentos.js'

const router = express.Router()

router.post('/login', ControllerCliente.Login)

router.get('/clientes/',  ControllerCliente.FindAll)
router.get('/cliente/:id',  ControllerCliente.FindOne)
router.post('/cliente/', ControllerCliente.Create)
router.put('/cliente/:id',  ControllerCliente.Update)
router.delete('/cliente/:id',  ControllerCliente.Delete)

router.get('/atendimentos/',  ControllerAtendimento.FindAll)
router.get('/atendimentosself/',  ControllerAtendimento.FindAllByCliente)
router.get('/atendimento/:id',  ControllerAtendimento.FindOne)
router.post('/atendimento/',  ControllerAtendimento.Create)
router.put('/atendimento/:id',  ControllerAtendimento.Update)
router.delete('/atendimento/:id',  ControllerAtendimento.Delete)

export default router