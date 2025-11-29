import express from 'express'
import cors from 'cors'
import router from './router/router.js'
import database from './config/database.js'


const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', router)

const porta = 3000

database.db
    .sync({ force: false })
    .then((_) => {
        app.listen(porta, () => {
            console.info("Servidor rodando na porta " + porta)
        })
    })
    .catch((e) => {
        console.log("Não foi possível conectar com o banco"+ e)
    })