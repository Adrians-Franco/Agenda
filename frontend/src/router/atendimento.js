import express  from "express"
import ControllerAtendimento from '../controller/atendimentos.js'

const router = express.Router()

 router.get('/atendimento/context',  ControllerAtendimento.FindOne)
 router.post('/atendimento/', ControllerAtendimento.Create)
router.put('/atendimento/', ControllerAtendimento.Update)
 router.delete('/atendimento/', ControllerAtendimento.Delete)

 router.post('/login', ControllerAtendimento.Login)

router.get('/atendimentos', ControllerAtendimento.FindAll)
router.get('/atendimento/:id', ControllerAtendimento.FindOne)
router.post('/atendimento/', ControllerAtendimento.Create)
router.put('/atendimento/:id', ControllerAtendimento.Update)
router.delete('/atendimento/:id', ControllerAtendimento.Delete)

export default router