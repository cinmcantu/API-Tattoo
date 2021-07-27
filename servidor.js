const Express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const bd = require('./src/data/sqlite-bd')
const clientesController = require('./src/controllers/clientes-controller')
const port = process.env.PORT
const app = Express()

app.use(Express.json())
app.use(cors())

clientesController(app, bd)

app.listen(port, ()=> console.log(`[INFO]Servidor rodando na porta: ${port}`))