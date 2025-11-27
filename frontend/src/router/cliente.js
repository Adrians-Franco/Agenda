import express from "express"
import Controllercliente from '../controller/clientes.js'

const router = express.Router()

router.get('/cliente/context',  Controllercliente.FindOne)
 router.post('/cliente/', Controllercliente.Create)
 router.put('/cliente/', Controllercliente.Update)
 router.delete('/cliente/', Controllercliente.Delete)

router.post('/login', Controllercliente.Login)

router.get('/clientes', Controllercliente.FindAll)
router.get('/cliente/:id', Controllercliente.FindOne)
router.post('/cliente/admin', Controllercliente.Create)
router.put('/cliente/:id', Controllercliente.Update)
router.delete('/cliente/:id', Controllercliente.Delete)

export default router